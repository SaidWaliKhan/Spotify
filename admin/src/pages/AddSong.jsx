import React, { useState } from "react";
import { assets } from "../asstes/assets";
import axios from 'axios'
import { url } from "../App";
import { toast } from "react-toastify";
const AddSong = () => {
  const [image, setImage] = useState(false);
  const [song, setSong] = useState(false);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [loading, setLoading] = useState(false); 
 
  const onSubmitHandler = async (e) => {
    e.preventDefault(); 
    setLoading(true)
    try {
      const formData = new FormData();

      formData.append('name', name);
      formData.append('desc', desc);
      formData.append('image', image);
      formData.append('audio', song);

      const response = await axios.post(`${url}/api/song/add`, formData);
      if (response.data.success) {
        toast.success("Songs Added");
        setName('');
        setDesc('');
        setImage(false);
        setSong(false);
      }else{
        toast.error("Something wrong")
      }

    } catch (error) {
      toast.error("Error Occurred")
    }
 setLoading(false)
  }
  return loading ? (
    <div className="grid place-items-center min-h-[80vh] ">
      <div className="w-16 h-16 place-self-center border border-gray-400 border-t-green-800 rounded-full animate-spin"></div>
  </div>
  ) : (

    <form onSubmit={onSubmitHandler}  className="flex flex-col items-start gap-8 text-gray-800">
      <div className="flex gap-8">
        <div className="flex flex-col gap-4">
          <p>Uplaod Song</p>
          <input onChange={(e)=>setSong(e.target.files[0])} type="file" id="song" accept="audio/*" hidden />
          <label htmlFor="song">
            <img
              className="w-24 cursor-pointer"
              src={song ? assets.upload_added: assets.upload_song}
              alt=""
            />
          </label>
        </div>
        <div className="flex flex-col gap-4">
          <p>Uplaod Image</p>
          <input onChange={(e)=>setImage(e.target.files[0])} type="file" accept="image/*" hidden id="image" />
          <label htmlFor="image">
            <img
              className="w-24 cursor-pointer"
              src={image ?URL.createObjectURL(image): assets.upload_area}
              alt=""
            />
          </label>
        </div>
      </div>
      <div className="flex flex-col gap-2.5">
        <p>Song Name</p>
        <input onChange={(e)=>setName(e.target.value)} value={name}
          className="bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[max(40vw, 250px)]"
          placeholder="Type here"
          required
          type="text"
          name=""
          id=""
        />
      </div>
      <div className="flex flex-col gap-2.5">
        <p>Song Description</p>
        <input onChange={(e)=>setDesc(e.target.value)} value={desc}
          className="bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[max(40vw, 250px)]"
          placeholder="Type here"
          required
          type="text"
          name=""
          id=""
        />
      </div>

      <button
        className="test-base bg-black text-white py-2.5 px-14 cursor-pointer "
        type="submit"
      >
        ADD
      </button>
    </form>
  );
};

export default AddSong;
