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


  if (username in users){ 
    let passwordHash = users[username]["password"]
    if (await bcrypt.compare(password, passwordHash)){
      console.log("message: " +username+ " loged")
      return new Response("message: " +username+ " loged", { status:200 })
    }
    return new Response("message: credencial invalida\n", { status: 401})

  } else {
    console.log("message: credencial invalida\n")
    return new Response("message: credencial invalida\n", { status: 401})
  }

}
