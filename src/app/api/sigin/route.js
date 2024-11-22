import { promises as fs } from "fs";
import path from "path"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
const { MongoClient, ServerApiVersion } = require('mongodb');

export async function POST(req){
  const { username, password } = await req.json();

  // mongo client
  const client = new MongoClient(process.env.MONGODB_URI, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  
  try {
    await client.connect();

    const db = client.db("marketPlace");
    const usuarios = db.collection("usuarios");

  } catch (e){
    console.log(e)
    return new Response("message: error\n", { status: 400 }); 
  }

  // encriptar
  const hashRounds = 10;
  const hashedPassword = await bcrypt.hash(password, hashRounds);

  if (await usuarios.findOne({ "user": username })){ 
    return new Response("message: the existing username\n", { status: 400 }); 
  };

  try {
    const resoult = usuarios.insertOne({
      "user": username,
      "password": hashedPassword
    })
  } catch (e) {
    console.log(e) 
    return new Response("message: the existing username\n", { status: 400 }); 
  }

  return new Response("message: sigin succesfull", {status: 200});

}
