import React from "react";
import styled from "styled-components";
import back from "./assets/icon-arrow.svg";
import sharebttn from "./assets/icon-share.svg";
import toothpic from "./assets/toothimg.svg";
import bambootoothpic from "./assets/b1.svg";
import b2 from "./assets/ingredients.svg";
import b3 from "./assets/difficulty.svg";
import f1 from "./assets/g1.svg";
import f2 from "./assets/p1.svg";
import t1 from "./assets/Txt10.svg";
import dif from "./assets/img9.svg";
import dif2 from "./assets/img10.svg";
import rc1 from "./assets/img11.svg";
import btn from "./assets/btncart.svg";
import {NavLink} from "react-router-dom";

class pDetailed extends React.Component{

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <>
            <Header>
                <Arrow/>
                <B1text/>
                <Share/>
            </Header>
            <Pic/>
            <Feature>
                <T1/>
                <T2/>
            </Feature>
            <Feature2>
                <F1/>
                <F2/>
            </Feature2>
                <InfoText>
                    블록체인에 원재료와 친환경제품인증이 기록된 제품입니다.
                </InfoText>
                <InfoText>
                    허위 제품일시 금전적 보상이 제공됩니다.
                </InfoText>

                <T4>
                <Ta href = "https://explorer.blockchain.line.me/cashew/address/tlink1a8gqm3avaytsanwka07362y2h28l6fxtssgevt?tab=transaction#" target = "_blank">
                <b><i>https://explorer.blockchain.line.me/cashew/address/tlink1a8gqm3avaytsanwka07362y2h28l6fxtssgevt?tab=transaction#</i></b>
                <br/>
                </Ta>
                <br />
                링크 클릭시 블록체인 트랜잭션 기록을 확인할 수 있습니다.
            </T4>
            <DifImg/>
            <DifImg2/>
            <Rc1/>
            <NavLink to={"/pay"}>
                <Btn/>
            </NavLink>
            </>
        );
    }
}

const Header = styled.div`
    margin-top: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    text-align: center;
    justify-items: center;
`

const B1text = styled.div`
    background-image: url(${bambootoothpic});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100px;
    height: 20px;
`

const Arrow = styled.div`

    background-image: url(${back});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 20px;
    height: 15px;
`

const Share = styled.div`
    background-image: url(${sharebttn});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 15px;
    height: 20px;
`
const Pic = styled.div`
    background-image: url(${toothpic});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 300px;
    height: 300px;
    margin-left: 40px;
    margin-top: 30px;
    border-radius: 30px;
`
const Feature = styled.div
`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 30px;
    justify-items: center;
    align-items: center;
`
const T1 = styled.div`
    background-image: url(${b2});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 135px;
    height: 170px;
`

const T2 = styled.div
`
    background-image: url(${b3});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 148px;
    height: 112px;
`

const Feature2 = styled.div
`
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: center;
    justify-items: center;
    padding:20px;
`

const F1 = styled.div
`
    background-image: url(${f1});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 117px;
    height: 117px;
`

const F2 = styled.div
`
    background-image: url(${f2});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 200px;
    height: 66px;
    margin-top: 20px;
`

const T3 = styled.div
`
    background-image: url(${t1});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 299px;
    height: 94px;
    margin-left: 40px;
    margin-top: 20px;
    margin-bottom: -60px;
`

const T4 = styled.div
`
    width: 300px;
    margin: auto;
    overflow: hidden;
    margin-top: 10px;
    text-align: center;
    color: black;
    text-decoration: none;
    font-size: 10px;
    padding-left: 10px;
    padding-right: 10px;
`

const Ta = styled.a
`
    color: black;
    text-decoration:none;
`

const DifImg = styled.div
`
    background-image: url(${dif});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-left: 15px;
    margin-top: 20px;
    width: 350px;
    height: 400px;
`

const DifImg2 = styled.div
`
    background-image: url(${dif2});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-left: 15px;
    margin-top: 20px;
    width: 350px;
    height: 300px;
`

const Rc1 = styled.div
`
    background-image: url(${rc1});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 350px;
    height: 300px;
    margin-top: 20px;
    margin-left: 15px;
`

const Btn = styled.div
`
    background-image: url(${btn});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: 20px;
    margin-left: 30px;
    width: 300px;
    height: 55px;
    position: fixed;
    bottom: 8px;
`

const InfoText = styled.div`
    color:#1A4D81;
    display:flex;
    font-family:Helvetica Neue;
    font-size: 12px;
    justify-content: center;
`;

export default pDetailed;