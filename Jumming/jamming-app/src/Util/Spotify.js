let userAccessToken;
const clientId = d78b99e781f14bfdb6148b282c4dd921;
const redirectedUri = "http://localhost:3000/";


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
            return userAccessToken;
        }else{
            window.location = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectedUri}`
        }

    }

};

export default Spotify;