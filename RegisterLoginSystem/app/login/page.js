"use client";
import { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    alert(data.message || data.error);
  };

  return (
    <div className="text-black flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <input type="email" placeholder="Email"
          className="w-full border p-2 mb-2"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input type="password" placeholder="Password"
          className="w-full border p-2 mb-2"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button className="bg-green-500 text-white w-full py-2 rounded">Login</button>
      </form>
    </div>
  );
}