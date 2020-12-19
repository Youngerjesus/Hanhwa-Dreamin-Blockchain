import React from "react";
import styled from "styled-components";
import ecopic from "./assets/eco.svg";
import text1 from "./assets/t1.png";
import text2 from "./assets/t2.svg";
import {NavLink} from "react-router-dom";

class afterTran extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <NavLink to={"/main"}>
                <Container>
                    <Pic/>
                    <TextBox>
                        <HighlightText spellcheck={false}>
                            500 ECO
                        </HighlightText>
                        <DefaultText2>
                            Token이
                        </DefaultText2>
                    </TextBox>
                    <DefaultText>
                        적립되었습니다.
                    </DefaultText>
                    <DescriptionText>
                        대나무 칫솔 사용으로 온실가스 배출량
                    </DescriptionText>
                    <DescriptionText>
                        52g을 감축할 수 있습니다.
                    </DescriptionText>
                </Container>
            </NavLink>
        )
    }
}

const Container = styled.div`
    display:flex;
    flex-direction:column;
`;
const Pic = styled.div
`
    background-image: url(${ecopic});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 300px;
    height: 300px;
    margin-left: 40px;
    margin-top: 60px;
`

const T1 = styled.div
`
    background-image: url(${text1});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 257px;
    height: 91px;
    margin-top: 60px;
    margin-left: 55px;
`

const T2 = styled.div
`
    background-image: url(${text2});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 348px;
    height: 62px;
    margin-top: 60px;
    margin-left: 14px;
`

const DescriptionText =styled.div`
    font-family:Acumin Pro SemiCondensed;
    font-size:20px;
    color:#748A9D;
    display:flex;
    justify-content: center;
`

const TextBox = styled.div`
    display: flex;
    justify-content: center;
    margin-top:50px;
`;

const HighlightText = styled.div`
    display:flex;
    color:#548D7C; 
    font-size:20px;
    font-family:Acumin Pro SemiCondensed;
    justify-content: center;
    margin-right:5px;
    font-weight:bold;
    text-decoration:none !important;
`;

const DefaultText = styled.div`
    font-family:Acumin Pro SemiCondensed;
    font-size:20px;
    color:#748A9D;
    display:flex;
    justify-content: center;
    margin-top: 5px;
    margin-bottom: 5px;
`;

const DefaultText2 = styled.div`
    font-family:Acumin Pro SemiCondensed;
    font-size:20px;
    color:#748A9D;
    display:flex;
    justify-content: center;
`;

export default afterTran