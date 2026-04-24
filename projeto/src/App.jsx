import './App.css'
import {Route, Routes } from 'react-router-dom'
import Header from './componetes/Header'
import Principal from './pages/Principal/index'
import SobreNos from './pages/SobreNos/index'
import Produto from './pages/Produto/index'
import FaleConosco from './pages/FaleConosco/index'
import Footer from './componetes/Footer'



export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path= "/" element ={<Principal />} />   
          <Route path= "/sobre-nos" element ={<SobreNos />} />   
          <Route path= "/fale-conosco" element ={<FaleConosco />} />      
          <Route path= "/produto" element ={<Produto />} />   
        </Routes>
      </main>
      <Footer />
    </>
  )
}

