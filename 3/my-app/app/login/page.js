"use client";
import { useState } from "react";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify(form),
    });
    const data = await res.json();
    setMsg(data.message || data.error);
    if (data.token) {
      localStorage.setItem("token", data.token);
    }
  };

  return (
    <div>
      <h1>ورود</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="ایمیل"
          onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input type="password" placeholder="رمز عبور"
          onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <button type="submit">ورود</button>
      </form>
      <p>{msg}</p>
    </div>
  );
}