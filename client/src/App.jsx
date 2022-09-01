import React from 'react'
import HomePage from "./pages/Home/home.page";
import {Routes,Route} from "react-router-dom";
import Aboutpage from './pages/aboutus/aboutus';

const App = () => {
  return (
    <div>
       
      <Routes>
        <Route path="/" element={<HomePage />}>

        </Route>
        <Route path='/aboutus' element={<Aboutpage/>}>

        </Route>
     
      </Routes>
    </div>
  );
}

export default App