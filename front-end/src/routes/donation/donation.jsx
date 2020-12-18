import React, {Fragment} from 'react';
import styled from 'styled-components';
import donationImage from '../../assets/donation.svg';
import Navbar from "../../components/Navbar";
import {NavLink} from "react-router-dom";

class donation extends React.Component {

    goBitmax = () => {
        window.location.href="https://wallet.bitmax.me/coins"
    }

    render() {
        return (
            <Fragment>
                <Container onClick={this.goBitmax}  />
                <Navbar Account = {true} />
            </Fragment>
        )
    }
}

export default donation;

const Container = styled.div`
    background-image: url(${donationImage});
    width: 375px;
    height: 772px;
    margin: auto;
    display: flex;
    background-position: center;
    position: absolute;
    top: -10px;    
`;

