import { notFound } from "next/navigation";
import { connectToDB } from "@/lib/mongodb";
import Product from "@/models/Product";

export const dynamic = "force-dynamic";

export default async function ProductDetail({ params }) {
  const { slug } = await params;
  await connectToDB();
  const p = await Product.findOne({ slug }).lean();
  if (!p) return notFound();

  return (
    <main className="mx-auto max-w-4xl p-6 grid md:grid-cols-2 gap-8">
      <img src={p.image || "/placeholder.png"} alt={p.name} className="w-full rounded-2xl object-cover" />
      <div>
        <h1 className="text-3xl font-bold">{p.name}</h1>
        <div className="mt-2 text-neutral-600">برند: {p.brand} • دسته: {p.category}</div>
        <div className="mt-4 text-2xl font-extrabold">{p.price.toLocaleString()} €</div>
        <p className="mt-4 leading-7">{p.description}</p>
        <button className="mt-6 rounded-2xl border px-4 py-2 font-medium hover:shadow">افزودن به سبد</button>
      </div>
    </main>
  );
}