import React from 'react';

let userAccessToken;

const Spotify = {
    getAccessToken(){
        if(userAccessToken){
            return userAccessToken;
        }
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const  expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

        if(accessTokenMatch && expiresInMatch){
            userAccessToken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);
            window.setTimeout(()=>{userAccessToken=''},  expiresIn * 1000);
            window.history.pushState('Access Token', null, '/'); 
        }

    }

};

export default Spotify;