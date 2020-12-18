import React from "react"
import Navbar from "../../components/Navbar";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import x3 from "./assets/x3.png";
import header from "./assets/header.png";
import tabbednav from "./assets/shop-nav.svg";
import products from "./assets/products.svg";

export default class Shop extends React.Component {
    render() {
        return (
            <>
                <Bg/>
                <MainContainer>
                    <NavLink to = "/pDetailed"><Products/></NavLink>
                </MainContainer>
                <Header>
                    <TextStyle>
                        지구샵
                    </TextStyle>
                    <TabbedNav/>
                </Header>
                <Navbar cart = {true}/>
            </>
        );
    }
}
const Bg = styled.div`
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${x3});
    opacity: 0.4;
    padding: 0;
    width:100vw;
    height:720px;
`
const MainContainer = styled.div`
    position: absolute;
    display:flex;
    flex-direction:column; 
    align-items: center;
    width: 100vw;
    padding: 0;
    top: 0;
`
const Header = styled.div`
    display:flex;
    flex-direction:column; 
    align-items: center;
    position: fixed;
    background-image: url(${header});
    background-position: center;
    background-repeat: no-repeat;
    top:0;
    left:0;
    margin: 0;
    width: 375px;
    height: 200px;
`
const TabbedNav = styled.div`
    margin-top:41px;
    background-image: url(${tabbednav});
    background-position: center;
    background-repeat: no-repeat;
    height: 52px;
    width: 375px;
`
const TextStyle = styled.p`
    font-size: 20px;
    font-family: 'Acumin Pro SemiCondensed', Arial;
    margin-bottom: 0;
    margin-top: 50px;
    color: rgb(116, 138, 157);
`
const Products = styled.div`
    margin-top: 213px;
    width: 345px;
    height: 440px;
    border-radius: 10px;
    background-position: center;
    background-image: url(${products});
    background-repeat: no-repeat;
`