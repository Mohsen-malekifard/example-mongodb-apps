"use client";
import { useState } from "react";

export default function RegisterPage() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(form),
    });
    const data = await res.json();
    setMsg(data.message || data.error);
  };

  return (
    <div>
      <h1>ثبت‌نام</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="نام کاربری"
          onChange={(e) => setForm({ ...form, username: e.target.value })} />
        <input type="email" placeholder="ایمیل"
          onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input type="password" placeholder="رمز عبور"
          onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <button type="submit">ثبت‌نام</button>
      </form>
      <p>{msg}</p>
    </div>
  );
}