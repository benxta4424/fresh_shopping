import { create } from "zustand";
import marar from './imgs/anna-evans-h7sIa4E5mIg-unsplash.jpg'
import varza from './imgs/anna-evans-SztWGpNJQEk-unsplash.jpg'
import ceapa from './imgs/christopher-previte-7CcXR5wIhEY-unsplash.jpg'
import vinete from './imgs/christy-hinko-nbbwiNujmxM-unsplash.jpg'
import cartofi from './imgs/engin-akyurt-O9p8KIv39gA-unsplash.jpg'
import rosii from './imgs/justus-menke-zRqRhIJqdnI-unsplash.jpg'
import ardeiRosu from './imgs/theo-crazzolara-gfmqaW_Pk20-unsplash.jpg'
import spanac from "./imgs/rachel-clark-rehLLLNNP94-unsplash.jpg"

export const takeCareOfCart = create((set) => ({
    cartItems: [],
    
    addToCart: (product) => {
        set((state) => ({
            cartItems: [...state.cartItems, product]
        }))
    },

    addAnotherItemInTheCart: (product_name) => {
        set((state) => ({
            
        }))
    } ,
    
    deleteCart: () => {
        set((state) => ({
            cartItems: []
        })) 
    } ,

    allProductsList: [
                {name: "Marar", price: 15, path: marar},
                {name: "Varza", price: 3, path: varza},
                {name: "Ceapa", price: 10, path: ceapa},
                {name: "Vinete", price: 8, path: vinete},
                {name: "Cartofi", price: 2, path: cartofi},
                {name: "Rosii", price: 20, path: rosii},
                {name: "Ardei Rosu", price: 10, path: ardeiRosu},
                {name: "Spanac", price:10, path: spanac }
    ] ,
    
}))