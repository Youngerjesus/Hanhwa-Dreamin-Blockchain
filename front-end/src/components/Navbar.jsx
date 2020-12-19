import React from 'react';
import {NavLink} from "react-router-dom";
import styled from "styled-components";
import account from "./assets/icon-account.png";
import cart from "./assets/icon-cart.png";
import like from "./assets/icon-like.png";
import plus from "./assets/icon-quick-shop.png";
import store from "./assets/icon-store.png";

import accounta from "./assets/icon-account-active.png";
import carta from "./assets/icon-cart-active.png";
import likea from "./assets/icon-like-active.png";
import storea from "./assets/icon-store-active.png";

const Navbar = (props) => {
    return(
        <Nav>
            <NavLink to={"/main"}>{props.store ? <StoreA /> : <Store/>}</NavLink>
            <NavLink to={"/shop"}>{props.cart ? <CartA /> : <Cart/>}</NavLink>
            <Plus />
            <NavLink to={"/community"}>{props.like ? <LikeA /> : <Like/>}</NavLink>
            <NavLink to={"/mypage"}>{props.account ? <AccountA /> : <Account/>}</NavLink>
        </Nav>
    );
}

export default Navbar;

Navbar.defaultProps={
    store: false,
    cart: false,
    like: false,
    account: false
};

const Nav = styled.div`
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 375px;
    height: 82px;
    background-color: rgb(255,255,255,255);
`

const Store = styled.div`
    background-image: url(${store});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 30px;
    height: 30px;
`

const StoreA = styled.div`
    background-image: url(${storea});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 30px;
    height: 30px;
`

const Cart = styled.div`
    background-image: url(${cart});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 30px;
    height: 30px;
`

const CartA = styled.div`
    background-image: url(${carta});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 30px;
    height: 30px;
`

const Plus = styled.div`
    background-image: url(${plus});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 50px;
    height: 50px;
`

const Like = styled.div`
    background-image: url(${like});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 30px;
    height: 30px;
`
const LikeA = styled.div`
    background-image: url(${likea});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 30px;
    height: 30px;
`

const Account = styled.div`
    background-image: url(${account});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 30px;
    height: 30px;
`
const AccountA = styled.div`
    background-image: url(${accounta});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 30px;
    height: 30px;
`
