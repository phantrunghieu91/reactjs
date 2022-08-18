import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Category from './components/Category';
import Product from './components/Product';
import Product2 from './components/Product-2';

const CAR_BRANDS = ['honda', 'suziki', 'mitsubishi', 'toyota'];

function App() {
  return (
    <div className="app">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/category">Category</Link>
        </li>
      </ul>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/category' element={<Category carBrands={CAR_BRANDS}/>}/>
        <Route path='/product/:productID' element={<Product carBrands={CAR_BRANDS}/>} />
        <Route path='/product-2' element= {<Product2 carBrands={CAR_BRANDS}/>} />
      </Routes>
    </div>
    
  );
}

export default App;
