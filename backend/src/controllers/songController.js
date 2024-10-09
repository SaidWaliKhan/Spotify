import { v2 as cloudinary } from "cloudinary";
import songModel from '../models/songModel.js';

const addSong = async (req, res) => {
  try {
    // Validate required fields
    const { name, desc, album } = req.body;
    if (!name || !desc || !album) {
      return res.status(400).json({ success: false, message: "Name, description, and album are required." });
    }

    // Validate uploaded files
    if (!req.files || !req.files.audio || !req.files.image) {
      return res.status(400).json({ success: false, message: "Audio and image files are required." });
    }

    const audioFile = req.files.audio[0];
    const imageFile = req.files.image[0];

    // Upload audio file to Cloudinary
    const audioUpload = await cloudinary.uploader.upload(audioFile.path, {
      resource_type: "video",
    });

    // Upload image file to Cloudinary
    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });

    // Calculate duration
    const duration = `${Math.floor(audioUpload.duration / 60)}:${Math.floor(audioUpload.duration % 60)}`;

    // Prepare song data
    const songData = {
      name,
      desc,
      album,
      image: imageUpload.secure_url,
      file: audioUpload.secure_url,
      duration,
    };

    // Create and save the song
    const song =new songModel(songData);
    await song.save();

    // Send success response
    res.status(201).json({ success: true, message: "Song added successfully" });
  } catch (error) {
res.json({success:false})
  }
};

const listSong = async (req, res) => {
  try {
    const songs = await songModel.find(); // Fetch all songs from the database
    res.status(200).json({ success: true, songs }); // Return the list of songs
  } catch (error) {
    console.error("Error listing songs:", error); // Log the error for debugging
    res.status(500).json({ success: false, message: error.message }); 
  }
};

const removeSong = async (req,res) => {
  try {
    await songModel.findByIdAndDelete(req.body.id);
    res.json({success:true,message:"Removed"})
  } catch (error) {
    res.json({success:false})
  }
}

export { addSong ,listSong,removeSong };