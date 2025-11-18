import Box from './ProductBox'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { takeCareOfCart } from "./zustandStore"
import { takeCareOfNav } from './zustandToggle'

export default function Homepage() {
    
    const productList = takeCareOfCart((state) => state.allProductsList)
    const doubledProductList = [...productList, ...productList];
    const buyingItem = takeCareOfCart((state) => state.addToCart)
    const toggleDarkMode = takeCareOfNav((state) => state.toggle)

    return (
        <>
            <div className={toggleDarkMode === false ?  "darkContainer" : "homepageContainer"}>
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
            
            <div className="homepageBottomContainer">
                <Link to={"/products"} className='shopButton'> Shop </Link>
            </div>

            </div>
            
        </>
    )
}