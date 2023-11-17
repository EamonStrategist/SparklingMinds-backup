import React, {useEffect, useState} from 'react';
import AuthManager from './auth-helper.js';
import {readjwt} from './api-auth.js';


const Test = () =>{

    const [message, setMessage] = useState('');

    const [user, setUser] = useState(
        {
            token: sessionStorage.getItem("jwt")
        }
       );
     

    useEffect(() => {

        readjwt(user).then(response => response.json())
        .then(data => setUser(data)) 

        let auth = new AuthManager();
        if(auth.isAuthenticated(user.token)){
            setMessage('You are authenticated');
        }else{
            setMessage('You are not authenticated');
        }


    },[])

    return <p>{message}</p>

}

export default Test;