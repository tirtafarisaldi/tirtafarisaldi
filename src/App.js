import "./styles.css";

import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Ournament1 from './images/1.png'
import Ournament2 from './images/2.png'
import Ournament3 from './images/3.png'
import './App.css'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      <img alt="" srcSet={Ournament1} width="100%" height="auto" style={{
        position: 'absolute',
        top: 0
      }}/>
      <img alt="" srcSet={Ournament2} width="100%" height="auto" style={{
        position: 'absolute',
        top: 1600
      }}/>
       <img alt="" srcSet={Ournament1} width="100%" height="auto" style={{
        position: 'absolute',
        top: 3900,
      }}/>
      <Header />
      <main style={{
        position: 'relative',
        zIndex: '100',
        background: 'transparent'
      }}>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <ScrollToTop />
      <Footer/>
    </div>
  )
}

export default App
