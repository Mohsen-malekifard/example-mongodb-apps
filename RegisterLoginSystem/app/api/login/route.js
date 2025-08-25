// app/api/login/route.js
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { email, password } = await req.json();
    await connectDB();

    const user = await User.findOne({ email });
    if (!user) return Response.json({ error: "User not found" }, { status: 404 });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return Response.json({ error: "Invalid credentials" }, { status: 401 });

    return Response.json({ message: "Login success", user });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}