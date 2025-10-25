import Box from './ProductBox'
import marar from './imgs/anna-evans-h7sIa4E5mIg-unsplash.jpg'
import varza from './imgs/anna-evans-SztWGpNJQEk-unsplash.jpg'
import ceapa from './imgs/christopher-previte-7CcXR5wIhEY-unsplash.jpg'
import vinete from './imgs/christy-hinko-nbbwiNujmxM-unsplash.jpg'
import cartofi from './imgs/engin-akyurt-O9p8KIv39gA-unsplash.jpg'
import rosii from './imgs/justus-menke-zRqRhIJqdnI-unsplash.jpg'
import ardeiRosu from './imgs/theo-crazzolara-gfmqaW_Pk20-unsplash.jpg'

export default function Homepage() {
    const productList = [
        {name: "Marar", price: 15, path: marar},
        {name: "Varza", price: 3, path: varza},
        {name: "Ceapa", price: 10, path: ceapa},
        {name: "Vinete", price: 8, path: vinete},
        {name: "Cartofi", price: 2, path: cartofi},
        {name: "Rosii", price: 20, path: rosii},
        {name: "Ardei Rosu", price: 10, path: ardeiRosu}
    ]

    const doubledProductList = [...productList, ...productList];


    return (
        <>
            <div className="homepageContainer">
                <div className="homepageButtons"></div>
                
                <div className="productsScroller">
                    <div className="productsContainer">
                        { doubledProductList.map((product, index) => (
                            <Box 
                            key = {index}
                            searchImage = {product.path}
                            imageName = {product.name}
                            productPrice = {product.price}
                            />
                        ))}
                    </div>
                </div>

                <div className="homepageBottomContainer"></div>
            </div>
        </>
    )
}