import bcrypt from "bcrypt";
import { MongoClient, ServerApiVersion } from "mongodb";

export async function POST(req) {
  const { username, password } = await req.json();

  // Configuración del cliente de MongoDB
  const client = new MongoClient(process.env.MONGODB_URI, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  try {
    await client.connect();

    const db = client.db("marketPlace");
    const usuarios = db.collection("usuarios");

    const existingUser = await usuarios.findOne({ user: username });
    if (existingUser) {
      return new Response("message: the username already exists", {
        status: 400,
      });
    }

    const hashRounds = 10;
    const hashedPassword = await bcrypt.hash(password, hashRounds);

    await usuarios.insertOne({
      user: username,
      password: hashedPassword,
    });

    return new Response("message: signup successful", { status: 200 });
  } catch (e) {
    console.error("Error durante la operación:", e);
    return new Response("message: internal server error", { status: 500 });
  } finally {
    await client.close();
  }
}

