
import React, { useState } from "react";
import { auth } from "./firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => navigate("/dashboard"))
      .catch(() => alert("Hatalı giriş"));
  };

  const register = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => navigate("/dashboard"))
      .catch(() => alert("Kayıt başarısız"));
  };

  return (
    <div className="p-6 max-w-sm mx-auto mt-20 bg-white shadow-md rounded">
      <h1 className="text-xl font-bold mb-4">Giriş / Kayıt</h1>
      <input type="email" className="border p-2 mb-2 w-full" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" className="border p-2 mb-4 w-full" placeholder="Şifre" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={login} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Giriş Yap</button>
      <button onClick={register} className="bg-gray-500 text-white px-4 py-2 rounded">Kayıt Ol</button>
    </div>
  );
};

export default Login;
