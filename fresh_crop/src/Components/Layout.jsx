import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { takeCareOfCart } from "./zustandStore";
import {takeCareOfNav} from "./zustandToggle"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Layout() {
    const cartCount = takeCareOfCart((state) => state.cartItems.length)
    const toggleDarkMode = takeCareOfNav((state) => state.darkModeOn)
    const getAllProducts = takeCareOfCart((state) => state.allProductsList)
    const [formInput, setFormInput] = useState("")
    const navigate = useNavigate()

    const vegetablePage = (e) => {
        e.preventDefault()
        
        if(formInput.trim()) {
            navigate(`/about/${formInput.trim()}`)
            setFormInput("")
        }

    }

    return(
        <>
            <nav className="homepageButtons">
                <div className="addLogo">
                    <button className="darkMode" onClick={() => toggleDarkMode }>
                        <img src="src\Components\imgs\logoAgriculture.jpg" alt="store logo" className='logo' />
                    </button>

                    <form onSubmit={vegetablePage} className="searchForm">
                        <input 
                            type="text" 
                            name="searchValue" 
                            id="searchValue" 
                            list="searchOptions"
                            onChange={(e) => setFormInput(e.target.value)} />
                        <button type="submit" className="searchButton"> &#128269; </button>
                    </form>

                    <datalist id="searchOptions">
                        {
                            getAllProducts.map((product) => (
                                <option value={product.name}></option>
                            ))
                        }
                    </datalist>
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