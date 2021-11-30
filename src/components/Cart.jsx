import { useContext } from "react";
import { CartContext } from "./cartContext";
import { Button } from '@material-ui/core';
import {WrapperCart, TitleCart, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail, ProductAmountContainer, ProductAmount, ProductPrice} from './styledComponents';



const Cart = () => {
    const test= useContext(CartContext);
    console.log( test);
    return (

        <WrapperCart>
        <Button variant="contained" onClick={test.removeList}>Vaciar Carrito</Button>
        <ContentCart>
            {
                test.cartList.length > 0 ?
                test.cartList.map(item =>
                <Product key={item.idItem}>
                <ProductDetail>
                    <ImageCart src={item.imgItem}/>
                    <Details>
                    <span>
                        <b>Producto: </b> {item.nameItem}
                    </span>
                    <Button variant="contained" onClick={()=> test.deleteItem(item.idItem)}>Quitar producto del carrito</Button>
                    </Details>
                </ProductDetail>
                <PriceDetail>
                    <ProductAmountContainer>
                    <ProductAmount>{item.qtyItem} Unidad(es)</ProductAmount>
                    </ProductAmountContainer>
                    <ProductPrice>$ {item.costItem} Por unidad</ProductPrice>
                </PriceDetail>
                </Product>
                )
                : <TitleCart>Tu carrito esta vacío</TitleCart>
            }
        </ContentCart>
        </WrapperCart>
    );
}

export default Cart;
