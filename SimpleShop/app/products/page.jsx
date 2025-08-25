import { connectToDB } from "@/lib/mongodb";
import Product from "@/models/Product";
import Link from "next/link";

export const dynamic = "force-dynamic"; // مطمئن می‌شود هر بار از DB خوانده شود (دموی ساده)

export default async function ProductsPage() {
  await connectToDB();
  const products = await Product.find({}).lean();

  return (
    <main className="mx-auto max-w-6xl p-6">
      <h1 className="text-2xl font-bold mb-6">محصولات</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <Link
            href={`/products/${p.slug}`}
            key={p._id}
            className="rounded-2xl border p-4 shadow-sm hover:shadow-md transition"
          >
            <img
              src={p.image || "/placeholder.png"}
              alt={p.name}
              className="w-full h-48 object-cover rounded-xl"
            />
            <div className="mt-3">
              <h3 className="font-semibold line-clamp-1">{p.name}</h3>
              <p className="mt-1 text-sm text-neutral-600 line-clamp-2">{p.description}</p>
              <div className="mt-3 font-bold">{p.price.toLocaleString()} €</div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}