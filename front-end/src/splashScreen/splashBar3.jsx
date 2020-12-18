import React from "react";
import styled from "styled-components";
import graphic from "./assets/graphic-onboarding3.png";
import green from "./assets/nav-dot-curr.png";
import gray from "./assets/nav-dot.png";
import {NavLink} from "react-router-dom";
import Skip from "../components/Skip";

class SplashBar3 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <NavLink to={"/login"}>
                <div className="page">
                    <Vector/>
                    <Text1>리워드로 제공되는 ECO를 모아 나무를 키워<br/>성장시킨 나무는 NFT 뱃지로 기록하고<br/>실제 묘묙 심기 기부에 참여해보세요!</Text1>
                    <Navdots>
                        <GrayDot/><GrayDot/><GreenDot/>
                    </Navdots>
                    <Skip />
                </div>
            </NavLink>
        );
    }
}

const Text1 = styled.p`
    position: absolute;
    text-align: center;
    letter-spacing: -0.20px;
    color: rgba(116, 138, 157, 1);
    -webkit-text-stroke: 1.00px rgba(0, 0, 0, 0);
    font-size: 17.00px;
    font-weight: 400;
    font-style: normal;
    font-family: 'Acumin Pro SemiCondensed', Arial;
    width: 100vw;
    height: 30vw;
    left: 50vw;
    margin-left: -50vw;
    top: 120vw;
`
const Vector = styled.div`
    position: absolute;
    background-image: url(${graphic});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin: 0;
    width: 80vw;
    height: 80vw;
    left: 10vw;
    top: 30vw;
`

const Navdots = styled.div`
    display: flex;
    position: absolute;
    width: 20vw;
    height: 4vw;
    left: 50vw;
    top: 155vw;
    margin-left: -10vw;
`
const GreenDot = styled.div`
    background-image: url(${green});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    margin-left: 2vw;
    margin-right: 2vw;
    width: 4vw;
    height: 4vw;
`
const GrayDot = styled.div`
    background-image: url(${gray});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    margin-left: 2vw;
    margin-right: 2vw;
    width: 4vw;
    height: 4vw;
`

SplashBar3.propTypes = {}

SplashBar3.defaultProps = {}


export default SplashBar3;
