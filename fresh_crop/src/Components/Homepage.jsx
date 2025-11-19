import Box from './ProductBox'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { takeCareOfCart } from "./zustandStore"

export default function Homepage() {
    
    const productList = takeCareOfCart((state) => state.allProductsList)
    
    const [count, setCounter] = useState(0)
    const doubledProductList = [...productList, ...productList];
    
    const handleClick = () => {
        setCounter(c => c + 1)
    }

    const buyingItem = takeCareOfCart((state) => state.addToCart)
    const cartCount = takeCareOfCart((state) => state.cartItems.length)

    return (
        <>
            <div className="homepageContainer">
                <div className="productsScroller">
                    <div className="productsContainer">
                        { doubledProductList.map((product, index) => (
                            <Box 
                            key = {index}
                            searchImage = {product.path}
                            imageName = {product.name}
                            productPrice = {product.price}
                            onButtonBuy = {() => buyingItem(product)}
                            />
                        ))}
                    </div>
                </div>

            </div>
            
            <div className="homepageBottomContainer">
                <Link to={"/products"} className='shopButton'> Shop </Link>
            </div>
        </>
    )
}