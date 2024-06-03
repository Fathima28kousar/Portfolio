import './App.css'
import Contact from './components/contact/Contact'
import Cursor from './components/cursor/Cursor'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Portfolio from './components/portfolio/Portfolio'
import Services from './components/services/Services'
import Skills from './components/skills/Skills'
// import Parallax from './components/parallax/Parallax'
// import {BrowserRouter,Route,Switch} from 'react-router-dom'



const App = () => {
  return (
    <div>
      <Cursor/>
      <section id='Homepage'>
        <Navbar/>
        <Hero/>
      </section>
      <section id='Services'><Services/></section>
      <div id='Portfolio'><Portfolio/></div>
      <section id='Skills'><Skills/></section>
      <section id='Contact'><Contact/></section>
  </div>
  )
}

export default App
