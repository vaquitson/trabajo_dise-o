import { promises as fs } from "fs";
import path from "path"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export async function POST(req){
  const { username, password } = await req.json();

  // datos de usuarios
  const filePath = path.join(process.cwd(), "src/data/users.json")
  const fileData = await fs.readFile(filePath, "utf8");
  const users = JSON.parse(fileData);

  // confirmamos que el usurio no exista previamente
  if (username in users){
    return new Response("message: the existing username\n", { status: 400 }); 
  }

  // encriptar
  const hashRounds = 10;
  const hashedPassword = await bcrypt.hash(password, hashRounds);

  users[username] = { "password": hashedPassword}

  await fs.writeFile(filePath, JSON.stringify(users, null, "\n"));

  return new Response("message: sigin succesfull", {status: 200});

}
