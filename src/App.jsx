import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import NavbarTop from './components/NavbarTop/NavbarTop'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'
import Section3 from './components/Section3/Section3'
import FAB from './components/FAB/FAB'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavbarTop />
      <Section1 />
      <Section2 />
      <Section3 />
      <FAB />
    </>
  )
}

export default App
