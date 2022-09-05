import React from 'react'
import HomePage from "./pages/Home/home.page";
import Aboutpage from './pages/aboutus/about';
import {Routes,Route} from "react-router-dom";


const App = () => {
  return (
    <div>
       
      <Routes>
        <Route path="/" element={<HomePage />}>

        </Route>
        <Route path='/about' element={<Aboutpage/>}></Route>
      

      
     
      </Routes>
    </div>
  );
}

export default App