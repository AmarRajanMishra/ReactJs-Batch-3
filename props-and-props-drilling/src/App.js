
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NavBar from './component/NavBar';
import Error from './Error/Error';
import Footer from './component/Footer';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/about' element={<About />} ></Route>
        <Route path='/contact' element={<Contact />} ></Route>
        <Route path='*' element={<Error />} ></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
