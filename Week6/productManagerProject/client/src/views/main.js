
import ProductForm from "../components/ProductForm"
import DisplayProduct from "../components/DisplayProduct"

const Main = (props) => {
    const {products, setProducts} = props

    const removeFromDom = id => {
        setProducts(products.filter(product => product._id !== id))
    }
    
    return(
        <div>
            <ProductForm products = {products} setProducts={setProducts} />
            <hr/>
            <DisplayProduct products = {products} setProducts={setProducts} removeFromDom={removeFromDom} />
        </div>
    )
}

export default Main