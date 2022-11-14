import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom'
import Products from './components/products';
import Product from './components/product';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/products' element={ <Products />} />
        <Route path='/' element={<Home />} />
        <Route path='/products/:id' element={<Product/>} />
       
       </Routes>
    
    </div>
  );
}

export default App;
