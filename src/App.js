import React from 'react';

import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
// import { Footer, Blog, Possibility, Features, WhatGPT3} from './containers';

import { CTA, Brand, Navbar } from './components';
import TodoPage from './APIcheck'
import Cropper from './App.tsx'

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <TodoPage />
      <Navbar />
      <Header />
      <Cropper />
    </div>
    {/* <Brand />
    <WhatGPT3 />
    <Features />
    <Possibility />
    <CTA />
    <Blog /> */}
    <Footer />
  </div>
);

export default App;
