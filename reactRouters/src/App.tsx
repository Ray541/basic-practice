import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import About from "./Components/About"
import Services from "./Components/Services"
import Profile from './Components/Profile';
function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/about' Component={About} />
        <Route path='/services' Component={Services} />
      </Routes>
        <Profile />
    </Router>
  )
}

export default App
