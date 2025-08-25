import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl p-6">
      <h1 className="text-3xl font-bold">Next + Mongo فروشگاه</h1>
      <p className="mt-3 text-neutral-600">دموی مینیمال با اتصال مستقیم به MongoDB</p>
      <Link href="/products" className="mt-6 inline-block rounded-2xl border px-4 py-2 hover:shadow">
        مشاهده محصولات
      </Link>
    </main>
  );
}