import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import songRouter from './src/routes/songRoute.js';
import connectDB from './src/config/mongoDb.js';
import connectCloudinary from './src/config/cloudinary.js';
//import albumRouter from './src/routes/albumRoute.js';
// App configuration
const app = express();
const port = 3000; 

// Connect to MongoDB and Cloudinary
connectDB().then(() => {
  console.log("Connected to MongoDB");
}).catch(err => {
  console.error("MongoDB connection error:", err);
});

connectCloudinary().then(() => {
  console.log("Connected to Cloudinary");
}).catch(err => {
  console.error("Cloudinary connection error:", err);
});

// Middlewares
app.use(express.json()); 
app.use(cors()); 

// Initializing routes
app.use("/api/song", songRouter);
// app.use("/api/album",albumRouter)

app.get('/', (req, res) => res.send("API working"));

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});