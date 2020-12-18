import React from 'react';
import {useLocation} from 'react-router-dom'
import {apiTest, getAccessToken} from "../../api/loginApi";


const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}


const Auth = () => {
    const query =useQuery();

    if(query.get('code')){
        localStorage.setItem('code', query.get('code'));
        localStorage.setItem('state', query.get('state'));

        if(localStorage.getItem('UserId') === null){
            getAccessToken(query.get('code'));
            // apiTest(query.get('code'));
        }
    }

    return(
        <div>
            {query.get('code')}
        </div>
    )
}

export default Auth;