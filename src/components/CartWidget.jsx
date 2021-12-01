import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { useContext } from "react";
import { CartContext } from "./cartContext";

const CartWidget = () => {
    const test=useContext(CartContext);

    return (
        <Badge badgeContent={test.qtyProductos()} color="secondary">
            <ShoppingCartOutlined />
        </Badge>
    );
}

export default CartWidget;