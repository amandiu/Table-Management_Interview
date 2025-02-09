// server.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Atlas URI (এখানে আপনার MongoDB URI দিন)
const dbURI = "mongodb+srv://user:adminuser@cluster0.mongodb.net/personalInfo?retryWrites=true&w=majority";

// MongoDB Atlas এর সাথে কানেক্ট
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Atlas Connected"))
  .catch((err) => console.log("MongoDB Connection Error:", err));

// Schema তৈরি (ডেটা কাঠামো)
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  dob: Date,
  gender: String
});

// Model তৈরি
const User = mongoose.model("User", userSchema);

// API রুট তৈরি (GET, POST, PUT, DELETE)
app.get("/users", async (req, res) => {
  try {
    const users = await User.find(); // সমস্ত ব্যবহারকারী ফেচ
    res.json(users);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post("/users", async (req, res) => {
  const { name, age, dob, gender } = req.body;
  const newUser = new User({ name, age, dob, gender });

  try {
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  const { name, age, dob, gender } = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(id, { name, age, dob, gender }, { new: true });
    res.json(updatedUser);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.delete("/users/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await User.findByIdAndDelete(id);
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).send(err);
  }
});

// Server start
app.listen(port, () => {
  console.log(`Server is running on ${port} `);
});
