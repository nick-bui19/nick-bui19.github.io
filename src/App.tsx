import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import BlogPost from './components/BlogPost'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </Router>
  )
}

export default App
