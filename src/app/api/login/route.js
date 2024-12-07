import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { MongoClient, ServerApiVersion } from "mongodb";

export async function POST(req){

  // get the username and password from the request
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
    // check if the user exist
    if (existingUser) {
      // check if the password is correct
      if (await bcrypt.compare(password, existingUser.password)){
        const jwt_boddy = {
          "username": username
        }

        const token = jwt.sign(jwt_boddy, process.env.jwt_secret, { expiresIn: "1h"})

        let res = {
          message: username + " loged",
          "username": username,
          "token": token
        }

        client.close();
        return new Response(JSON.stringify(res), { status:200 })

      } else {
        
        client.close();
        return new Response("message: User or password error", {status: 500})
      }
    }
  } catch {

    client.close();
    return new Response("message: User or password error", {status: 500})
  }
}
