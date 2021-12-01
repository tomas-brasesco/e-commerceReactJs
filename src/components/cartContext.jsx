import { createContext, useState } from "react";

export const CartContext = createContext();


const cartContextProvider = ({children}) => {
    const [cartList, setCartList]= useState([]);

    const addToCart= (item, qty) =>{
        let found= cartList.find(product => product.idItem === item.id);
        if(found === undefined){
            setCartList([
            ...cartList,
            {
                idItem: item.id,
                imgItem: item.image[0],
                nameItem: item.name,
                costItem: item.cost,
                qtyItem: qty,
            }
        ]);
    }else {
        found.qtyItem += qty ;
            }
    }
        

    const removeList= () =>{
        setCartList([]);
    }
    const deleteItem= (id) =>{
        let result= cartList.filter(item => item.idItem != id);
        setCartList(result);
    }

    const sumaPorItem = (idItem) => {
        let index= cartList.map(item => item.idItem).indexOf(idItem);
        return cartList[index].costItem * cartList[index].qtyItem;
    }

    const subTotal = () => {
        let subTot=cartList.map(item=>sumaPorItem(item.idItem));
        return subTot.reduce((previousValue, currentValue) => previousValue + currentValue);
    }

    const calcIva = () => {
        return subTotal() * 0.21;
    }
    const sumaTotal=()=>{
        return subTotal();
    }

    const qtyProductos=()=>{
        let qtys= cartList.map(item=>item.qtyItem);
        return qtys.reduce(((previousValue, currentValue)=>previousValue+currentValue),0);
    }

    return(
        <CartContext.Provider value= {{
            cartList,
            addToCart,
            removeList,
            deleteItem,
            sumaPorItem,
            subTotal,
            calcIva,
            sumaTotal,
            qtyProductos
            }}>
            {children}
        </CartContext.Provider>
    );
}


export default cartContextProvider;
