import React from 'react'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
 //importado en el contenedor padre para el uso de sus hijos
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './components/Inicio';
import Footer from "./components/Footer"




function App() {
  return (
    <div className='App'>
      <>
      <BrowserRouter>
        <NavBar/>
          <Routes>
          <Route path= "/" element={<Inicio/>}/>
            <Route path= "/productos" element={<ItemListContainer/>}/>
          </Routes>
          <Footer/>
      </BrowserRouter>
      </>
    </div>
  )
}

export default App
