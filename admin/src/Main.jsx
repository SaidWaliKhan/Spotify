import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddSong from './pages/AddSong';
import ListSong from './pages/ListSong';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

const Main = () => {
  return (
    <div className='flex items-start min-h-screen'>
      <Router>
      <ToastContainer/>
       <Sidebar/>
      <div className='flex-1 h-screen overflow-y-scroll bg-[#F3FFF7]'>
          <div className='pt-8 pl-5 sm:pt-12 sm:pl-12'>
            <Navbar/>
          {/* <Router> */}
            <Routes>
              <Route path='/add-song' element={<AddSong />} />
              <Route path='/list-song' element={<ListSong />} />
            </Routes>
          {/* </Router> */}
        </div>
        </div>
        </Router>
    </div>
  );
}

export default Main;