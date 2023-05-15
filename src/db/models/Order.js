import mongoose from "mongoose";
const { Schema } = mongoose;

const orderSchema = new Schema({
  user: { type: Schema.Types.ObjectId, required: true },
  products: { type: [Schema.Types.ObjectId], required: true },
  timestamp: { type: Date, required: true, default: Date.now },
});

const Order =
  mongoose.models.Order || mongoose.model("Order", orderSchema, "orders");

export default Order;
