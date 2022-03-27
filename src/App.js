import React from 'react';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './page/home';
import Sidebar from './components/sidebar';
import Movie from './page/movie';
import Detail from './page/movie/detail';

function App() {
  const location = useLocation()

  return (
    <div className='flex flex-row'>
      <div className='w-2/12'>
        <Sidebar />
      </div>
      <div className='w-10/12'>
        <Routes>
          <Route path={`/detail/${location?.state?.id}`} element={<Detail />} />
          <Route path='/listmovie' element={<Movie />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
