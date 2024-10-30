import jwt from 'jsonwebtoken';

export async function GET(req){
  const { token } = await req.json(); 
  const paylode = token.split(".")[1]
  
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
