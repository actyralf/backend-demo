import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true },
  gender: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: Number, required: true },
  address: { type: String, required: true },
});

const User =
  mongoose.models.User || mongoose.model("User", userSchema, "users");

export default User;
