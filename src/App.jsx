import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Cards from './Cards'
import cat1 from './assets/cat1.jpg'
import cat2 from './assets/cat2.jpg'
import cat3 from './assets/cat3.jpg'
import cat4 from './assets/cat4.jpg'
import cat5 from './assets/cat5.jpg'
import cat6 from './assets/cat6.jpg'
import cat7 from './assets/cat7.jpg'
import cat8 from './assets/cat8.jpg'
function App() {
  return(
    <>
    <Cards image={cat1} name="Orange Tabo Cat"/>
    <Cards image={cat2} name="Fluffy Persian Cat"/>
    <Cards image={cat3} name="White Ragdoll Cat"/>
    <Cards image={cat4} name="Norwegian Forest Cat"/>
    <Cards image={cat5} name="Gray Cat"/>
    <Cards image={cat6} name="White Long-Haired Cat"/>
    <Cards image={cat7} name="Dilute Calico Cat"/>
    <Cards image={cat8} name="Short-Haired White Cat"/>
    </>
  )
}

export default App
