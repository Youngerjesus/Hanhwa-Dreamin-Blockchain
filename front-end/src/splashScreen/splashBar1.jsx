import React from "react";
import styled from "styled-components";
import graphic from "./assets/graphic-onboarding1.png";
import green from "./assets/nav-dot-curr.png";
import gray from "./assets/nav-dot.png";
class SplashBar1 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="page">
                <Vector/>
                <Text1>검증된 제로웨이스트샵에서<br/>믿을 수 있는 제품들을 구입해보세요</Text1>
                <Navdots>
                    <GreenDot/><GrayDot/><GrayDot/>
                </Navdots>
                <Skip>SKIP</Skip>
            </div>
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
const Skip = styled.p`
    position: absolute;
    cursor: default;
    text-align: center;
    line-height: 30.00px;
    letter-spacing: 0.00px;
    color: rgba(58, 202, 207, 1);
    -webkit-text-stroke: 1.00px rgba(0, 0, 0, 0);
    font-size: 14.00px;
    font-weight: 700;
    font-style: normal;
    font-family: 'Acumin Pro SemiCondensed', Arial;
    text-decoration: none;
    width: 10vw;
    height: 5vw;
    left: 50vw;
    margin-left: -5vw;
    top: 170vw;
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

SplashBar1.propTypes = {}

SplashBar1.defaultProps = {}


export default SplashBar1;
          