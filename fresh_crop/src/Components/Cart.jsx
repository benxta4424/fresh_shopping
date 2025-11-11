import { takeCareOfCart } from "./zustandStore"
import { Link } from "react-router-dom"
import CommandWindow from "./CommandWindow"

export default function Cart() {
    const items = takeCareOfCart((state) => state.cartItems)
    const addProduct = takeCareOfCart((state) => state.addToCart)
    const emptyCart = takeCareOfCart((state) => state.deleteCart)
    const processItems = new Map()
    let suma = 0

    items.forEach(element => {
        const exists = processItems.get(element.name)

        if(exists) {
            exists.quantity += 1
            exists.price += element.price
        } 
        else {
            processItems.set(element.name, {
                product: element,
                price: element.price,
                quantity: 1
            })
        }

    });
    
    Array.from(processItems).forEach(([itemName, itemValues]) => (
        suma += itemValues.price)
    )

     
   

    return (
        <>
            <Link to="/" className="goBack">Back</Link>
        
            <div className="cartContainer">
                {
                    Array.from(processItems).map(([itemName, itemData]) => (
                        <div className="productBox" key={itemName}>
                            <div className="itemName">{itemName}</div>
                            <div className="itemPrice">{itemData.price} RON</div>
                            <div className="quantityProducts">{itemData.quantity}</div>
                            <div className="addingAdditional"><button onClick={() => addProduct(itemData.product)}>+</button></div>
                        </div>
                    ))
                }

                <div className="cartButtons">
                    <div className="totalCartValue">Total: {suma} RON</div>
                    <div className="placeCommand"> <Link to={"/command"}>Place</Link> </div>

                    <div className="emptyCart">
                        <button onClick={() => emptyCart()}> Empty Cart </button>
                    </div>
                </div>
            </div>
    
        
        </>
    )
}