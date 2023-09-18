import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Main from './Main';
import Catalog from './Catalog';
import About from './About';
import Contacts from './Contacts';
import Header from './Header';
import Footer from './Footer';
import Item from './Item';
import Items from './Items';


function App() {

  return <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/catalog" element={ <Catalog/> } />
      <Route path="/about" element={<About/>}/>
      <Route path="/contacts" element={<Contacts/>}/>
      <Route path="/catalog/:id" element={<Item/>}/>
      <Route path="/home/:id" element={<Items/>}/>

    </Routes>
    <Footer/>
  </Router>
  
}

export default App;
