import {Link} from 'react-router-dom';
import { useContext } from "react";
import { CartContext } from "./cartContext";
import {WrapperCart, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail, ProductAmountContainer, ProductAmount, ProductPrice} from './styledComponents';

import styled from 'styled-components';

const Top=styled.div`
display:flex;
aling-items:center;
justify.content: space-between;
padding:20px;`;

const TopButton=styled.button`
padding:10px;
font-weight:600;
cursor:pointer;
border:${(props)=>props.type === "filled" && "none"};
background-color: ${(props)=> props.type === "filled" ? "black" : "transparent"};
color: ${(props) => props.type === "filled" && "white"};
`;

const TopText=styled.div`
margin: 0px 10px;`;

const Bottom= styled.div`
display:flex;
justify-content:space-between`;

const Info=styled.div`
flex:3;`;

const Summary= styled.div`
flex:1;
border:0.5px solid lightgray;
border-radius:10px;
padding:20px;
height:50vh;
`;

const SummaryTitle=styled.h1`
font-weight:200;
`;

const SummaryItem=styled.div`
margin:30px 0px;
display:flex;
justify-content:space-between;
font-weight:${(props)=>props.type==="total" && "500"};
font-size:${(props)=>props.type=== "total" && "24px"};
`;

const SummaryItemText=styled.span`
`;

const SummaryItemPrice=styled.span`
`;

const Buttonn=styled.button`
width:100%;
padding:10px;
backround-color:black;
color:white;
font-weight:600;
`;










const Cart = () => {
    const test= useContext(CartContext);
    return (

        <WrapperCart>
            <Top>
                <Link to="/"><TopButton>Continuar Comprando</TopButton></Link>
                {
                    (test.cartList.length > 0)
                    ? <TopButton type="filled" onClick={test.removeList}>Vaciar carrito</TopButton>
                    : <TopText>Tu carrito esta vacío</TopText>
                }
            </Top>
        <ContentCart>
        <Bottom>
            <Info>
                {
                    test.cartList.length > 0 &&
                        test.cartList.map(item =>
                        <Product key={item.idItem}>
                        <ProductDetail>
                            <ImageCart src={item.imgItem}/>
                            <Details>
                                <span>
                                    <b>Producto: </b>{item.nameItem}
                                </span>
                                <TopButton type="filled" onClick={()=> test.deleteItem(item.idItem)}>Borrar item</TopButton>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                            <ProductAmount>{item.qtyItem} Producto(s)</ProductAmount>
                            /
                            <ProductAmount>$ {item.costItem} cada unidad</ProductAmount>
                            </ProductAmountContainer>
                            <ProductPrice>$ {test.sumaPorItem(item.idItem)}</ProductPrice>
                        </PriceDetail>
                        </Product>
                    )
                }
            </Info>
            {
                test.cartList.length > 0 &&
                <Summary >
                    <SummaryTitle>Resumen</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$ {test.subTotal()}</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Iva</SummaryItemText>
                        <SummaryItemPrice>${test.calcIva()}</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Descuento en Efectivo-Transferencia</SummaryItemText>
                        <SummaryItemPrice>${-test.calcIva()}</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText>Total a abonar</SummaryItemText>
                        <SummaryItemPrice>${test.sumaPorItem()}</SummaryItemPrice>
                    </SummaryItem>
                    <Buttonn>Finalizar</Buttonn>
                </Summary>
            }
        </Bottom>
        </ContentCart>
    </WrapperCart>
    );
}

export default Cart;
