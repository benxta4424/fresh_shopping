import { create } from "zustand";

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
    }
}))