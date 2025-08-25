import { connectToDB } from "@/lib/mongodb";
import Product from "@/models/Product";

const seedItems = [
  {
    name: "Wireless Headphones",
    slug: "wireless-headphones",
    price: 79.99,
    image: "/products/headphones.jpg",
    description: "Comfortable over-ear with clean sound.",
    brand: "Sonic",
    category: "Electronics",
    countInStock: 15,
  },
  {
    name: "Mechanical Keyboard",
    slug: "mechanical-keyboard",
    price: 129.0,
    image: "/products/keyboard.jpg",
    description: "Hot-swappable, compact layout.",
    brand: "KeyPro",
    category: "Computers",
    countInStock: 10,
  },
  {
    name: "Smartwatch",
    slug: "smartwatch",
    price: 149.5,
    image: "/products/smartwatch.jpg",
    description: "Health tracking, long battery.",
    brand: "FitMe",
    category: "Wearables",
    countInStock: 20,
  },
];

export async function GET() {
  await connectToDB();
  await Product.deleteMany({});
  const inserted = await Product.insertMany(seedItems);
  return Response.json({ inserted: inserted.length });
}