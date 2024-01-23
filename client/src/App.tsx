import React from 'react';
import './App.css';
import {Navbar} from "./view/common/Navbar/Navbar";
import {Main} from "./view/common/Main/Main";
import {Footer} from "./view/common/Footer/Footer";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
          <BrowserRouter>
             <Navbar/>
              <Main/>
              <Footer/>
          </BrowserRouter>
  );
}

export default App;
