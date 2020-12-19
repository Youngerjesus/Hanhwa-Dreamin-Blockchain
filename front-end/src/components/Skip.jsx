import React from 'react';
import {NavLink} from "react-router-dom";
import styled from "styled-components";

const Skip = () => {
    return(
        <NavLink to={"/login"}>
            <SkipStyle>
                SKIP
            </SkipStyle>
        </NavLink>
    )
}

export default Skip;

const SkipStyle = styled.p`
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
    top: 150vw;
`

