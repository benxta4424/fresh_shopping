import { takeCareOfCart } from "./zustandStore"
import Box from './ProductBox'
import { Link } from "react-router-dom"


export default function Products() {
    const getAllProducts = takeCareOfCart((state) => state.allProductsList)
    const buying = takeCareOfCart((state) => state.addToCart )

    return (
        <>
            <Link to={"/"} className="exitButton">exit</Link>
            <div className="allProductContainer">
                { getAllProducts.map((product, index) => (
                                            <Box 
                                            key = {index}
                                            searchImage = {product.path}
                                            imageName = {product.name}
                                            productPrice = {product.price}
                                            onButtonBuy = {() => buying(product)}
                                            />
                                        ))}
            </div>
        </>
    )
}