import './App.css'
import {Route, Routes } from 'react-router-dom'
import Header from './componetes/Header'
import Home from './pages/Home/index'
import SobreNos from './pages/SobreNos/index'
import FaleConosco from './pages/FaleConosco/index'
import Footer from './componetes/Footer'



export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path= "/" element ={<Home />} />   
          <Route path= "/sobre-nos" element ={<SobreNos />} />   
          <Route path= "/fale-conosco" element ={<FaleConosco />} />      
       
        </Routes>
      </main>
      <Footer />
    </>
  )
}

