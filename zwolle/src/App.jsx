import './App.css'
import Blog from './Components/Blog'
import Header from './Components/Header'
import Homepage from './Components/Homepage'
import Map from './Components/Map'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {

  return (
    <>
      <Router>
        <nav className="bg-white p-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img
              src="https://hierinsalland.nl/wp-content/uploads/2022/11/Deltion-logo-221108.jpg"
              alt="Deltion Logo"
              className="h-10 rounded-sm"
            />
            <div className="text-2xl font-bold text-indigo-900">Deltion - Split</div>
          </div>
          <ul className="flex space-x-4">
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/map'}>Map</Link>
            </li>
            <li>
              <Link to={'/blog'}>Blog</Link>
            </li>
            <li>
              <a
                href="signupform.php"
                className="bg-gray-200 text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-300"
              >
                Sign In / Sign Up
              </a>
            </li>
          </ul>
        </nav>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
