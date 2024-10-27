import { promises as fs } from "fs";
import path from "path"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export async function POST(req){

  // get the username and password from the request
  const { username, password } = await req.json();
  
  // obtenemos los datos de los usuarios
  const filePath = path.join(process.cwd(), "src/data/users.json")
  const fileData = await fs.readFile(filePath, "utf8");
  const users = JSON.parse(fileData);

  console.log(users)

  if (username in users){ 
    return new Response("{hello}", { status:200 })
  } else {
    return new Response("message: credencial invalida\n", { status: 401})
  }

}
