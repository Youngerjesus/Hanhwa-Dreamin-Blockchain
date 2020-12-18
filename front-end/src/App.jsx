import React from "react";
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { createBrowserHistory } from 'history';

import Intro from "./routes/intro/intro";
import SplashBar1 from "./routes/splashScreen/splashBar1";
import SplashBar2 from "./routes/splashScreen/splashBar2";
import SplashBar3 from "./routes/splashScreen/splashBar3";
import Login from "./routes/login/login";
import Auth from "./routes/auth/Auth";
import pDetailed from "./routes/productdetailed/pdetailed";
import valueUp from "./routes/valueUp/valueUp";
import nft from "./routes/nft/nft";

import aftertransact from "./routes/mypage/aftertran";
import Mypa from "./routes/mypage/myp";
import Payment from "./routes/mypage/payment";

import Main from "./routes/main/main";
import Shop from "./routes/main/shop";
import Community from "./routes/main/community";
import MyPage from "./routes/main/mypage";
import fakeMyPage from "./routes/main/fakeMyPage";
import donation from "./routes/donation/donation";

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Intro} />
                    <Route path="/splash1" component={SplashBar1} />
                    <Route path="/splash2" component={SplashBar2} />
                    <Route path="/splash3" component={SplashBar3} />
                    <Route path="/login" component={Login} />
                    <Route path="/auth/callback" component={Auth} />
                    <Route path="/pDetailed" component={pDetailed} />
                    <Route path="/valueUp" component={valueUp} />
                    <Route path="/nft" component={nft} />
                    <Route path="/afterTran" component={aftertransact} />
                    <Route path="/myp" component={Mypa} />
                    <Route path="/pay" component={Payment} />

                    <Route path="/main" component={Main} />
                    <Route path="/shop" component={Shop} />
                    <Route path="/community" component={Community} />
                    <Route path="/mypage" component={MyPage}/>
                    <Route path="/mypage1" component={fakeMyPage}/>
                    <Route path="/donation" component={donation}/>
                </Switch>
            </BrowserRouter>
        );
    }
}