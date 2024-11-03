"use client";

import { useAuth } from "./../context/auth_context.js";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

async function checkToken() {
  const token = localStorage.getItem("token");

  const res = await fetch("/api/verifie_token", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token })
  });

  return res;
}

export default function TestPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [isTokenValid, setIsTokenValid] = useState(null);

  useEffect(() => {
    async function verifyAndRedirect() {
      const res = await checkToken();

      if (!res.ok) {
        router.push("/login");
      } else {
        setIsTokenValid(true); // Indica que el token es válido
      }
    }

    verifyAndRedirect();
  }, [router]);

  // Mientras espera la verificación, no muestra el contenido
  if (isTokenValid === null) {
    return null;
  }

  return (
    <div>
      <h1>HOLA</h1>
    </div>
  );
}

