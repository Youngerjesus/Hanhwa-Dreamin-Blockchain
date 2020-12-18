import React from "react"
import Navbar from "../../components/Navbar";
import styled from "styled-components";
import x3 from "./assets/x3.png";
import header from "./assets/header.png";
import tabbednav from "./assets/tabbed-nav.svg";

import jigoo from "./assets/jigoo.jpg";
import thepicker from "./assets/thepicker.jpg";
import almaeng from "./assets/almaeng.jpg";
import {NavLink} from "react-router-dom";

export default class Main extends React.Component {
    render() {
        return (
            <>
            <Bg/>
            <MainContainer>
                <NavLink to="/shop"><Jigoo/></NavLink>
                <ShopStyle><b>지구샵</b><br/>주방, 욕실용품 등 친환경 생활용품 판매</ShopStyle>
                <Picker/>
                <ShopStyle><b>더 피커</b><br/>곡물, 과일 등 식재료 및 친환경 생활용품 판매</ShopStyle>
                <Almaeng    />
                <ShopStyle><b>알맹</b><br/>주방, 욕실용품 등 친환경 생활용품 판매</ShopStyle>
            </MainContainer>
            <Header>
                <TextStyle>
                    Zero-Waste Shop
                </TextStyle>
                <TabbedNav/>
            </Header>
            <Navbar store = {true}/>
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
const Jigoo = styled.div`
    margin-top: 213px;
    width: 319px;
    height: 215px;
    border-radius: 10px;
    background-image: url(${jigoo});
    background-position: center;
    background-repeat: no-repeat;
`
const ShopStyle = styled.div`
    border-radius: 10px;
    padding: 20px;
    background-color: rgb(255,255,255);
    font-size: 16px;
    font-family: 'Acumin Pro SemiCondensed', Arial;
    margin-bottom: 0;
    text-align: left;
    margin-top: 0px;
    width: 279px;
`
const Picker = styled.div`
    margin-top: 20px;
    width: 319px;
    height: 215px;
    border-radius: 10px;
    background-image: url(${thepicker});
    background-position: center;
    background-repeat: no-repeat;
`
const Almaeng = styled.div`
    margin-top: 20px;
    width: 319px;
    height: 215px;
    border-radius: 10px;
    background-image: url(${almaeng});
    background-position: center;
    background-repeat: no-repeat;
`