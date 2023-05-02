import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FaBars, FaRegWindowClose} from 'react-icons/fa';
import Header from './components/Header';
function App() {
  const [count, setCount] = useState(0)
  let [show, setShow] = useState(true)
  return (
   <div>
    <Header></Header>
   </div>
  )
}

export default App
