import { Link, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './routes/HomeRoute';
import Contact from './routes/ContactRoute';
import About from './routes/AboutRoute';

function App() {
  return (
    <>
    <nav>
      <div>
        <Link to='/'><h3>Home</h3></Link>
      </div>

      <div style={{display : 'flex', width : '10%', justifyContent : 'space-between'}}>
        <Link to='/contact'><h3>Contact</h3></Link>
        <Link to='/about'><h3>About</h3></Link>
      </div>
    </nav>

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/about' element={<About />} />
    </Routes>
    </>
  );
}

export default App;
