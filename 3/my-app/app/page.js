"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  const handleDelete = async (id) => {
    await fetch(`/api/products?id=${id}`, { method: "DELETE" });
    setProducts(products.filter((p) => p._id !== id));
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">📦 Products</h1>
      <ul className="space-y-2">
        {products.map((p) => (
          <li key={p._id} className="border p-3 flex justify-between">
            <div>
              <h2 className="font-semibold">{p.title}</h2>
              <p>${p.price}</p>
            </div>
            <button
              onClick={() => handleDelete(p._id)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}