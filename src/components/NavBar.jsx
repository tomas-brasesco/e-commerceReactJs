import { AppBar } from "@material-ui/core";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { Wrapper, Logo, MenuItem, Left, Center, Right } from './styledComponents';

const NavBar = () => {
    return (
        <AppBar position="relative">
            <Wrapper>
                <Left>
                    <Link to='/' style={{textDecoration: "none", color: "burlywood"}}><Logo>Cba Custom Hardware</Logo></Link>
                </Left>
                <Center>
                    <Link to='/category/9' style={{textDecoration: "none", color: "burlywood"}}><MenuItem>Auriculares</MenuItem></Link>
                    <Link to='/category/1' style={{textDecoration: "none", color: "burlywood"}}><MenuItem>Teclados</MenuItem></Link>
                    <Link to='/category/5' style={{textDecoration: "none", color: "burlywood"}}><MenuItem>Gabinetes</MenuItem></Link>
                    <Link to='/category/4' style={{textDecoration: "none", color: "burlywood"}}><MenuItem>Mouse</MenuItem></Link>                     
                </Center>
                <Right>
                    <MenuItem style={{textDecoration: "none", color: "burlywood"}}>REGISTRARSE</MenuItem>
                    <MenuItem style={{textDecoration: "none", color: "burlywood"}}>INGRESAR</MenuItem>
                    <MenuItem><Link to='/Cart'><CartWidget /></Link></MenuItem>
                </Right>
            </Wrapper>
        </AppBar>
    );
}

export default NavBar;