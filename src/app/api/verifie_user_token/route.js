import jwt from 'jsonwebtoken';

export async function POST(req){
  const { token, user } = await req.json(); 
  
  // verificar si esta o no el token 
  if (!token){
    console.log("no hay token\n");
    return new Response("message: no jwt", {status: 401})
  } else if (!user){
    return new Response("message: no user", {status: 402})
  }
  
  let decode;
  try {
    console.log(token)
    console.log(user)
    decode = await jwt.verify(token, process.env.jwt_secret)
    console.log("user token " + decode.username)
    //verify user
    if (decode.username != user ){
      console.log("token con usuario incorrecto")
      return new Response(JSON.stringify({message: "token no valido para este usuario"}), {status: 403})
    } else {

      console.log("usuario verificado");
      return new Response(
        JSON.stringify({ message: "usuario verificado" }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      )
    }

  } catch (error){
    console.log("token con firma incorrecta\n")
    return new Response("message: token no valido o expirado", { status: 402})
  }

}
