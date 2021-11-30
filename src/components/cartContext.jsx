import { createContext, useState } from "react";

export const CartContext = createContext();


const cartContextProvider = ({children}) => {
    const [cartList, setCartList]= useState([]);

    const addToCart= (item, qty) =>{
        setCartList([
            ...cartList,
            {
                idItem: item.id,
                imgItem: item.image[0],
                nameItem: item.name,
                costItem: item.cost,
                qtyItem: qty
            }
        ]);
    }

    const removeList= () =>{
        setCartList([]);
    }
    const deleteItem= (id) =>{
        let result= cartList.filter(item => item.idItem != id);
        setCartList(result);
    }

    return(
        <CartContext.Provider value= {{cartList, addToCart, removeList, deleteItem}}>
            {children}
        </CartContext.Provider>
    );
}


export default cartContextProvider;
