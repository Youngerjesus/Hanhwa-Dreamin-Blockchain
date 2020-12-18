import React from "react";
import MediaQuery from "react-responsive";
import styled from "styled-components";
import x3 from "./assets/x3.png";
import x2 from "./assets/x2.png";
import x4 from "./assets/x4.png";

class Intro extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const IS_MOBILE = window.innerWidth <= 414;

        if(IS_MOBILE){
            return (
                <IntroContainer>
                    <Vector/>
                    <Text>“일상생활에서 제로웨이스트를 실천해보세요”</Text>
                    <Logo/>
                </IntroContainer>
            )
        }else {
            return(
                <IntroContainer>
                    <Vector/>
                    <NoticeText>“모바일 환경에서만 지원합니다!”</NoticeText>
                </IntroContainer>
            )
        }

    }
}

Intro.propTypes = {}

Intro.defaultProps = {}

const IntroContainer = styled.div`
    display:flex;
    flex-direction:column; 
    background-image: url(${x3});
    width:100%;
    height: 100vh;
`;

const Background = styled.div`
    position: absolute;
    box-sizing: content-box;
    background-image: url(${x3});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
    height: 100vh;
`
const Vector = styled.div`
    position: absolute;
    box-sizing: content-box;
    background-image: url(${x2});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin: 0;
    width: 100vw;
    height: 70vw;
    left: 0.00px;
    bottom: 0.00px;
`
const Text = styled.p`
    position: absolute;
    box-sizing: content-box;
    opacity: 0.7438330054283142;
    margin: 0;
    text-align: left;
    color: rgba(92, 74, 96, 1);
    -webkit-text-stroke: 1.00px rgba(0, 0, 0, 0);
    font-size: 15px;
    font-weight: 500;
    font-style: italic;
    font-family: Futura, Arial;
    white-space: pre;
    width: 80vw;
    height: 20vw;
    margin-left: -40vw;
    left: 50vw;
    top: 115vw;
`

const NoticeText = styled.div`
    box-sizing: content-box;
    opacity: 0.7438330054283142;
    margin:auto;
    text-align: left;
    color: rgba(92, 74, 96, 1);
    -webkit-text-stroke: 1.00px rgba(0, 0, 0, 0);
    font-size: 1.8rem;
    font-weight: 500;
    font-style: italic;
    font-family: Futura, Arial;
    white-space: pre;
    
`;


const Logo = styled.div`
    position: absolute;
    background-image: url(${x4});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 1;
    cursor: default;
    margin: 0;
    background-color: rgba(255, 255, 255, 0);
    width: 60vw;
    height: 60vw;
    left: 10%;
    top: 20%;
`


export default Intro;
          