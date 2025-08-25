// app/api/signup/route.js
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { email, mobile, password } = await req.json();
    await connectDB();

    const exist = await User.findOne({ email });
    if (exist) {
      return Response.json({ error: "User already exists" }, { status: 400 });
    }

    const hashed = await bcrypt.hash(password, 10);

    const newUser = await User.create({ email, mobile, password: hashed });

    return Response.json({ message: "User created", user: newUser }, { status: 201 });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}