import { takeCareOfCart } from "./zustandStore"

export default function Cart() {
    const items = takeCareOfCart((state) => state.cartItems)


    return (
        <>
        
            <div className="cartContainer">
                <div className="cart">
                    {
                        items.map((item, index) => (
                            <div key={index}>
                                <p>{item.name}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        
        </>
    )
}