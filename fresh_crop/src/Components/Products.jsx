import { takeCareOfCart } from "./zustandStore"
import Box from './ProductBox'
import { takeCareOfNav } from "./zustandToggle"


export default function Products() {
    const getAllProducts = takeCareOfCart((state) => state.allProductsList)
    const buying = takeCareOfCart((state) => state.addToCart )
    const toggleTheme = takeCareOfNav((state) => state.toggle)

    return (
        <>
            <div className={"allProductContainer"}>
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