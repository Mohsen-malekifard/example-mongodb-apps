"use client";
import { useState } from "react";

export default function Signup() {
  const [form, setForm] = useState({ email: "", mobile: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    alert(data.message || data.error);
  };

  return (
    <div className="text-blackflex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-xl font-bold mb-4">Signup</h2>
        <input type="email" placeholder="Email"
          className="w-full border p-2 mb-2"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input type="text" placeholder="Mobile"
          className="w-full border p-2 mb-2"
          onChange={(e) => setForm({ ...form, mobile: e.target.value })}
        />
        <input type="password" placeholder="Password"
          className="w-full border p-2 mb-2"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button className="bg-blue-500 text-white w-full py-2 rounded">Register</button>
      </form>
    </div>
  );
}