import Box from './ProductBox'
import marar from './imgs/anna-evans-h7sIa4E5mIg-unsplash.jpg'
import varza from './imgs/anna-evans-SztWGpNJQEk-unsplash.jpg'
import ceapa from './imgs/christopher-previte-7CcXR5wIhEY-unsplash.jpg'
import vinete from './imgs/christy-hinko-nbbwiNujmxM-unsplash.jpg'
import cartofi from './imgs/engin-akyurt-O9p8KIv39gA-unsplash.jpg'
import rosii from './imgs/justus-menke-zRqRhIJqdnI-unsplash.jpg'
import ardeiRosu from './imgs/theo-crazzolara-gfmqaW_Pk20-unsplash.jpg'
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
                <div className="homepageButtons">
                    <div className="addLogo">
                        <img src="src\Components\imgs\logoAgriculture.jpg" alt="store logo" className='logo' />
                    </div>

                    <div className="spaceLogoButtons">
                        <Link to={"/about"}> <button className='homepageUpperButtons'>About</button> </Link>
                        <Link to="/contact"><button className='homepageUpperButtons'>Contact</button></Link>
                        <Link to="/cart"><button className='homepageUpperButtons'>Cart 
                            { cartCount > 0 && ` ${cartCount}` }  
                        </button></Link>
                    </div>
                </div>
                
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