import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import UrlShortenerPage from './components/UrlShortenerPage';
import UrlStatisticsPage from './components/UrlPage';
import RedirectHandler from './components/RedirectHeandler';
import './App.css';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<UrlShortenerPage />} />
        <Route path="/stats" element={<UrlStatisticsPage />} />
        <Route path="/:shortcode" element={<RedirectHandler />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
