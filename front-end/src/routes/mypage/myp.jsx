import React from "react";
import styled from "styled-components";
import myptext1 from "./assets/mypt1.svg"

class Myp extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container>
                <EcoSaveText> Ecosystem Save </EcoSaveText>
                <Img src="https://9to5google.com/wp-content/uploads/sites/4/2015/04/mrjingles_earth_day_1.gif" alt=""/>
                <TextBox>
                    <DefaultText>
                        2020년 12월 19일 지금까지
                    </DefaultText>
                    <DefaultText>
                        누룽맘님은 온실가스 <HighlightText>3518g</HighlightText>을
                    </DefaultText>
                    <DefaultText>
                        감축하였습니다. ‍🔥
                    </DefaultText>
                </TextBox>
            </Container>
        )
    }
}

const Container = styled.div`
    display:flex;
    flex-direction:column;
`;

const Img = styled.img
`
    margin-left: 10px;
    display:flex;
`

const T1 = styled.div
`
    background-image: url(${myptext1});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 302px;
    height: 130px;
    margin-left: 35px;
    margin-top: 60px;
`

const TextBox = styled.div`
    display: flex;
    justify-content: center;
    margin-top:50px;
    flex-direction:column;
`;

const HighlightText = styled.div`
    display:flex;
    color:#548D7C; 
    font-size: 1.5rem;
    font-family:Acumin Pro SemiCondensed;
    justify-content: center;
    margin-right:5px;
    font-weight: bold;
    margin-left: 5px;
`;

const DefaultText = styled.div`
    font-family:Acumin Pro SemiCondensed;
    font-size: 1.5rem;
    color:#748A9D;
    display:flex;
    justify-content: center;
    margin-top: 5px;
    margin-bottom: 5px;
`;

const EcoSaveText = styled.div`
    color:#748A9D; 
    display:flex;
    font-family:Acumin Pro SemiCondensed;
    font-size: 2rem;
    justify-content: center;
    margin-top:100px;
`;






export default Myp;