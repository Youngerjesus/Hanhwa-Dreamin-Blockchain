import React, {Fragment} from 'react';
import styled from 'styled-components';
import donationImage from '../../assets/donation.svg';
import Navbar from "../../components/Navbar";
import {NavLink} from "react-router-dom";

const donation = () => {

    return (
        <Fragment>
            <Container />
            <Navbar Account = {true}/>
        </Fragment>
    )
};

export default donation;

const Container = styled.div`
    background-image: url(${donationImage});
    width: 375px;
    height: 812px;
    margin: auto;
    display: flex;
    background-position: center;
    position: absolute;
    top: -10px;    
`;

