import React from "react";
import styled from "styled-components";
import paypic from "./assets/pay2.png"
import gr5 from "./assets/g5.png";
import {NavLink} from "react-router-dom";

class Payment extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render() {
        return (
            <>
            <G2/>
            <NavLink to={"/afterTran"}>
                <G5/>
            </NavLink>
            </>
        )
    }
}

const G2 = styled.div
`
    background-image: url(${paypic});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 375px;
    height: 700px;
`


const G5 = styled.div
`
    background-image: url(${gr5});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 375px;
    height: 111px;
`

export default Payment;