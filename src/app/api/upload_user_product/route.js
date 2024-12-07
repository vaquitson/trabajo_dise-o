import jwt from "jsonwebtoken";
import { MongoClient, ServerApiVersion } from "mongodb";

export async function POST(req) {
  const { token, user, title, description, price, image } = await req.json();

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
      return new Response(
        JSON.stringify({ message: "El producto ya existe" }),
        { status: 408, headers: { "Content-Type": "application/json" } }
      );
    }

    // Añadir nuevo producto
    userProducts.push({
      title,
      description,
      price,
      image,
    });

    await products.updateOne(
      { user },
      { $set: { products: userProducts } }
    );

    return new Response(
      JSON.stringify({ message: "Producto añadido correctamente" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
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


// perro: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InBlcnJvIiwiaWF0IjoxNzMzNTkxMTA2LCJleHAiOjE3MzM1OTQ3MDZ9.uNcuk4Kvm8YK6N4vZTc6sFNvirJevzXhr3wKFY6GBB0
// hola: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhvbGEiLCJpYXQiOjE3MzM1OTExNTEsImV4cCI6MTczMzU5NDc1MX0.R22qToGtc_zR46lf1ub46yhhx7xRceV7QmDV4D8pygA
