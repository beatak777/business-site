import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyNav from './components/Navbar';
import { About, Blog, Home, Book, Contact } from './components/Pages';
import './App.css'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <Router basename={``}>
      <MyNav />
      <Routes>
        <Route path='/blog' element={<Blog />} />
        <Route path='/about' element={<About />} />
        <Route path='/book' element={<Book />} />
        <Route path='/' element={<Home />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App