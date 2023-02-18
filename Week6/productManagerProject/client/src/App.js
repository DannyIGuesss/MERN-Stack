import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Main from "./views/main"
import Details from './components/Details';
import UpdateProduct from './components/UpdateProduct';
import {useState} from "react"



function App() {

  const [products, setProducts] = useState([])

  const removeFromDom = id => {
    setProducts(products.filter(product => product._id !== id))
}

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main products={products} setProducts={setProducts}/>}/>
          <Route path='/product/:id' element={<Details removeFromDom={removeFromDom} products={products} setProducts={setProducts}/>}/>
          <Route path='/updateProduct/:id' element={<UpdateProduct products={products} setProducts={setProducts}/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
