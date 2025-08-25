import mongoose, { Schema } from "mongoose";

const ProductSchema = new Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    price: { type: Number, required: true, min: 0 },
    image: { type: String, default: "/placeholder.png" },
    description: { type: String, default: "" },
    brand: { type: String, default: "Generic" },
    category: { type: String, default: "General" },
    countInStock: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.models.Product || mongoose.model("Product", ProductSchema);