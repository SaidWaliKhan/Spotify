// import { v2 as cloudinary } from "cloudinary";
// import albumModel from "../models/albumModel.js";

// // Configure Cloudinary with environment variables
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// const addAlbum = async (req, res) => {
//   try {
//     const { name, desc, bgColor } = req.body;
//     if (!name || !desc || !bgColor) {
//       return res.status(400).json({ success: false, message: "Name, description, and background color are required." });
//     }

//     if (!req.file) {
//       return res.status(400).json({ success: false, message: "Image file is required." });
//     }

//     const imageFile = req.file;
//     const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
//       resource_type: "image",
//     });

//     const albumData = {
//       name,
//       desc,
//       bgColor,
//       image: imageUpload.secure_url,
//     };

//     const album = new albumModel(albumData);
//     await album.save();

//     res.status(201).json({ success: true, message: "Album added successfully" });
//   } catch (error) {
//     console.error("Error adding album:", error);
//     res.status(500).json({ success: false, message: error.message });
//   }
// };

// const listAlbum = async (req, res) => {
//   try {
//     const albums = await albumModel.find();
//     res.status(200).json({ success: true, albums });
//   } catch (error) {
//     console.error("Error listing albums:", error);
//     res.status(500).json({ success: false, message: error.message });
//   }
// };

// const removeAlbum = async (req, res) => {
//   try {
//     const { id } = req.body;
//     await albumModel.findByIdAndDelete(id);
//     res.json({ success: true, message: "Album removed successfully" });
//   } catch (error) {
//     console.error("Error removing album:", error);
//     res.status(500).json({ success: false, message: error.message });
//   }
// };

// export { addAlbum, listAlbum, removeAlbum };
