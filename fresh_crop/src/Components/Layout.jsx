import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { takeCareOfCart } from "./zustandStore";
import {takeCareOfNav} from "./zustandToggle"

export default function Layout() {
    const cartCount = takeCareOfCart((state) => state.cartItems.length)
    const toggleDarkMode = takeCareOfNav((state) => state.darkModeOn)

    return(
        <>
            <nav className="homepageButtons">
                <div className="addLogo">
                    <button className="darkMode" onClick={() => toggleDarkMode }>
                        <img src="src\Components\imgs\logoAgriculture.jpg" alt="store logo" className='logo' />
                    </button>
                </div>
                
                <div className="nav-links">
                    <Link to="/" className="upperButton">Home</Link>
                    <Link to="/products" className="upperButton">Shop</Link>
                    <Link to="/about" className="upperButton">About</Link>
                    <Link to="/contact" className="upperButton">Contact</Link>
                    
                    <Link to="/cart" className="cart-link upperButton" >
                        Cart {cartCount > 0 && <span className="badge">{cartCount}</span>}
                    </Link>
                </div>
            </nav>

            <main className="content">
                <Outlet/>
            </main>
        </>
    )
}