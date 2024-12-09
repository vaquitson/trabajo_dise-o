import jwt from "jsonwebtoken";
import { MongoClient, ServerApiVersion } from "mongodb";

export async function POST(req) {
  const { token, user, title } = await req.json();

  // Verificar si está el token
  if (!token) {
    return new Response(
      JSON.stringify({ message: "No JWT provided" }),
      { status: 405, headers: { "Content-Type": "application/json" } }
    );
  }

  // Verificar firma
  let decode;
  try {
    decode = await jwt.verify(token, process.env.jwt_secret);
  } catch (err) {
    console.log("Error al verificar el token:", err);
    return new Response(
      JSON.stringify({ message: "Invalid JWT" }),
      { status: 409, headers: { "Content-Type": "application/json" } }
    );
  }

  // Verificar usuario
  if (decode.username !== user) {
    return new Response(
      JSON.stringify({ message: "Token no válido para este usuario" }),
      { status: 407, headers: { "Content-Type": "application/json" } }
    );
  }

  // Conectar a MongoDB
  const client = new MongoClient(process.env.MONGODB_URI, {
    serverApi: { version: ServerApiVersion.v1, strict: true, deprecationErrors: true },
  });

  try {
    await client.connect();
    const db = client.db("marketPlace");
    const products = db.collection("products");

    // Verificar si el producto ya existe
    const userProductsDbEntry = await products.findOne({ user });
    const userProducts = userProductsDbEntry?.products || [];


    if (userProducts.some((product) => product.title === title)) {

      await products.updateOne(
        { user },
        { $pull: { products: {"title": title } } }
      );



      return new Response(
        JSON.stringify({ message: "El producto fue eliminado" }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }



    return new Response(
      JSON.stringify({ message: "El producto no existe" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.log("Error al interactuar con MongoDB:", err);
    return new Response(
      JSON.stringify({ message: "Error interno del servidor" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  } finally {
    await client.close();
  }
}


