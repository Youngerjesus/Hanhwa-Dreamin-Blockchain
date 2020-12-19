import React from "react";
import bg from "./assets/bg-shadow.png";
import btn from "./assets/button.png";
import email from "./assets/email.png";
import password from "./assets/password.png";

import LineLoginImage from './assets/btn_base.png';
import LineLoginButtonImage from './assets/btn_login_base.png'
import styled from "styled-components";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idx: null,
            email: "",
            pw: "",
            nickname: "",
            isLogin: null
        };
    }

    handleEmail = e => {
        this.setState({
            email: e.target.value
        });
    };
    handlePW = e => {
        this.setState({
            pw: e.target.value
        });
    };
    handleSubmit = e => {
        e.preventDefault();
        /*
                const login_info = {
                    method: "POST",
                    body: JSON.stringify(this.state),
                    headers: {
                        "Content-Type": "application/json"
                    }
                };
                fetch("http://localhost:9089/login", login_info)
                    .then(res => {
                        return res.json();
                    })
                    .then(json => {
                        //json형식 {idx: 8, nickname: "noh", email: "noh@gmail.com", success: true}
                        if (json.success === true) {
                            alert("로그인되었습니다");
                            // 서버로 부터 받은 JSON형태의 데이터를 로컬스토리지에 우선 저장한다.
                            window.localStorage.setItem('userInfo', JSON.stringify(json))
                            //스테이트에 유저정보를 저장한다.
                            this.setState({
                                idx: json.idx,
                                email: json.email,
                                nickname: json.nickname,
                                isLogin: json.success
                            });
                            this.props.history.push("/main")
                        } else {
                            alert("아이디 혹은 비밀번호를 확인하세요");
                        }
                    });*/
    };

    lineLogin = () => {
        window.location.href = 'https://access.line.me/oauth2/v2.1/authorize?' +
            'response_type=code&' +
            'client_id=1655387804&' +
            'redirect_uri=http://18.214.194.190/main&' +
            'state=12348abcde&' +
            'scope=profile%20openid';
    }

    render() {
        return (
            <div className="login">
                <form onSubmit={this.handleSubmit}>
                    <Container>
                        <Button type="submit" onClick={this.lineLogin} />
                    </Container>
                </form>
            </div>

        );
    }
}

Login.propTypes = {}

Login.defaultProps = {}

const Container = styled.div`
    display:flex;
    width:100%;
    height:667px;
`;
const Bg = styled.div`
    position: absolute;
    background-image: url(${bg});
    background-size: contain;
    width: 100vw;
    height: 200vw;
    top: 0;
    margin: 0;
`

const LingLogin = styled.div`
    background-image: url(${LineLoginImage});
    width:88px;
    display:flex;
    margin:auto;
    margin-top: 100px;
    height:88px;
`;


const InputEmail = styled.input`
    position: absolute;
    background-image: url(${email});
    background-size: contain;
    padding-left: 16vw;
    width: 64vw;
    height: 16vw;
    top: 80vw;
    left: 10vw;
    border:none;
`
const InputPass = styled.input`
    position: absolute;
    background-image: url(${password});
    background-size: contain;
    padding-left: 16vw;
    width: 64vw;
    height: 16vw;
    top: 100vw;
    left: 10vw;
    border:none;
`

const Button = styled.button`
    background-image: url(${LineLoginButtonImage});
    width: 84vw;
    height: 16vw;
    border: 0;
    top:60%;
    background-color: rgb(255,0,0,0);
    bottom: 35vw;
    background-size: cover;
    width: 250px;
    height: 70px;
    display: flex;
    margin: auto;
`
const CreateAccount = styled.p`
    position: absolute;
    text-align: center;
    line-height: 30.00px;
    letter-spacing: 0.00px;
    color: rgba(166, 188, 208, 1);
    -webkit-text-stroke: 1.00px rgba(0, 0, 0, 0);
    font-size: 14.00px;
    font-weight: 700;
    font-style: normal;
    font-family: 'Acumin Pro SemiCondensed', Arial;
    white-space: pre;
    width: 100vw;
    height: 10vw;
    left: 50vw;
    margin-left: -50vw;
    bottom: 5vw;
`


export default Login;
          