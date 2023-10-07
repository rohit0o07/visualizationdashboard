import { useState } from 'react'
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
  const [mode,setMode] =useState("dark");

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container' style={{backgroundColor:mode === "dark" ? "rgb(61 64 66)":"",
    color:mode === "dark" ? "white":""}} onClick={()=>setOpen(true)}>
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Home />
    </div>
  )
}

export default App
