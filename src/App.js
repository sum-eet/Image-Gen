import React, { useState, useEffect } from 'react';

import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
// import { Footer, Blog, Possibility, Features, WhatGPT3} from './containers';

import { CTA, Brand, Navbar } from './components';
import TodoPage from './APIcheck'
// import Cropper from './App.tsx'
import ImageCropper from './Cropper/App'


import './App.css';

const App = () => {

  const [data,setData] = useState([{}]);
 
useEffect(() => {
    fetch("/result").then(
        res => res.json()
    ).then(
        data => {
            setData(data)
            console.log(data)
        }
    )
      }, [])

      return (
  <div className="App">
    {/* <div className="gradient__bg"> */}
      {/* <TodoPage /> */}
      {/* <Navbar /> */}
      <Header />
      {/* <ImageCropper /> */}
    {/* </div> */}
    {/* <Brand />
    <WhatGPT3 />
    <Features />
    <Possibility />
    <CTA />
    <Blog /> */}
    <Footer />
  </div>
)
  };

export default App;
