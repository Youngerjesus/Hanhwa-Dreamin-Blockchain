import React from 'react';
import styled from 'styled-components';
import x3 from '../../assets/x3.png';
import maokai from '../../assets/maokai.png';
import envelop from '../../assets/envelop.png';
import zeroWasteImage from '../../assets/zero-waste.png';
import {NavLink} from "react-router-dom";
const nft = () => {

    return (
        <NavLink to={"/donation"}>
            <Container>
                <NFTImage src={maokai} />
                <NFTDescriptionBox>
                    <NFTName>
                        MaoKai
                    </NFTName>
                    <InformationBox>
                        <HelperName>
                            Helper: 누룽이님
                        </HelperName>
                        <HelperName>
                            투자한 토큰 : 3000 ECO
                        </HelperName>
                        <HelperName>
                            성장 기간 : 2020.09.21~2020.12.19
                        </HelperName>
                        <ZeroImage src={zeroWasteImage} />
                    </InformationBox>
                </NFTDescriptionBox>
            </Container>
        </NavLink>
    )
}

export default nft;

const Container = styled.div`
    display:flex;
    background-image: url(${x3});
    height: 100vh;
    flex-direction:column;
    
`;

const NFTImage = styled.img`
    display:flex;  
    width: 80%;
    margin: auto;
    margin-top: 30px;
    margin-bottom: 0;
    background-size: cover;
`;

const NFTDescriptionBox = styled.div`
    display:flex; 
    background-image: url(${envelop});
    width:300px;
    height:300px;
    margin-left:auto;
    margin-right:auto; 
    flex-direction:column;
`;

const NFTName = styled.div`
    color:#A82424;
    font-family:Sinhala Sangam MN;
    font-size:17px;
    font-weight:bold;
    display:flex;
    margin-top: 60px;
    justify-content: center;
`

const HelperName = styled.div`
    color:#707070;
    justify-content: center;
    font-family:Comic Sans MS;
    font-size:13px;
    font-weight:bolder;
    display:flex;
    margin-top:3px;
`;

const InformationBox = styled.div`
    display:flex;
    flex-direction:column;
    margin-top: 5px;
`;

const ZeroImage = styled.img`
    display:flex;
    width: 100px;
    height: 100px;
    margin: auto;
`;
