const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const admin = require("firebase-admin");
const userRoutes = require("./routes/userRoutes");
const serviceAccount = require('./serviceAccount.json')
 require('./config/db.js'); 

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Routes
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Home Page!");
});

app.post("/api/verify-token", async (req, res) => {
  const { token } = req.body;
  try {
    const decoded = await admin.auth().verifyIdToken(token);
    res.json({ success: true, uid: decoded.uid, email: decoded.email });
  } catch (err) {
    res.status(401).json({ success: false, message: "Invalid token" });
  }
});

// Connect DB and start server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(5000, () =>
      console.log("Server running on http://localhost:5000")
    );
  })
  .catch((err) => console.error(err));


  