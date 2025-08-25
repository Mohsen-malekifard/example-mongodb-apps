import { connectToDB } from "@/lib/mongodb";
import Product from "@/models/Product";

// GET /api/products  -> همه محصولات
export async function GET() {
  await connectToDB();
  const products = await Product.find({}).sort({ createdAt: -1 }).lean();
  return Response.json(products);
}

// POST /api/products  -> ایجاد محصول جدید (بدون احراز هویت برای دموی ساده)
export async function POST(req) {
  try {
    await connectToDB();
    const body = await req.json();
    const created = await Product.create(body);
    return new Response(JSON.stringify(created), { status: 201 });
  } catch (e) {
    return new Response(JSON.stringify({ message: e.message }), { status: 400 });
  }
}