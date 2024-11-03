import jwt from 'jsonwebtoken';

export async function POST(req){
  const { token } = await req.json(); 
  
  // verificar si esta o no el token 
  if (!token){
    console.log("no hay token\n");
    return new Response("message: no jwt", {status: 401})
  }

  try {
    const decode = jwt.verify(token, process.env.jwt_secret)
    console.log("token verificado\n")
    return new Response("message: token verificado", {status: 200})
  } catch (error){
    console.log("token invalido\n")
    return new Response("message: token no valido o expirado", { status: 403})
  }
}
