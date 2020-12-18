import React from 'react';
import styled from 'styled-components';
import fruits from '../../assets/fruits.svg';
import {NavLink} from "react-router-dom";

const valueUp = () => {

    return (
        <NavLink to={"/mypage1"}>
            <Container>
            </Container>
        </NavLink>
    )
}

export default valueUp;

const Container = styled.div`
    display:flex;
    background-image: url(${fruits});
    height: 100vh;
    background-size:cover;
`






