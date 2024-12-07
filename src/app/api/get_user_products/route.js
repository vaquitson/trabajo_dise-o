import jwt from "jsonwebtoken";
import { MongoClient, ServerApiVersion } from "mongodb";

export async function POST(req) {
  const { user } = await req.json();

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

    console.log(userProducts);
    client.close()
    return new Response(
      JSON.stringify({ message: "success", products: userProducts }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err){
    return new Response("message: somethong wnet wrong", {status: 400})
  }
}
