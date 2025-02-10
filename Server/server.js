const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");

dotenv.config();

const app = express();
app.use(express.json()); // Enable JSON body parsing
app.use(cors()); // Enable CORS


// Sample Route
app.get("/", (req, res) => {
  res.send("Welcome to Node.js, Express & MongoDB API!");
});

app.use("/users", userRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
