import React from 'react';
import './App.css';
import {Navbar} from "./view/common/Navbar/Navbar";
import {Main} from "./view/common/Main/Main";
import {Footer} from "./view/common/Footer/Footer";

function App() {
  return (
          <>
             <Navbar/>
              <Main/>
              <Footer/>
          </>
  );
}

export default App;
