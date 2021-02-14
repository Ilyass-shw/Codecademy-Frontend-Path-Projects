let userAccessToken;
let userId;
const clientId = 'd78b99e781f14bfdb6148b282c4dd921';
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

    },

    getCurrentuserId(){
        if(userId){
            return new Promise(resolve=>{resolve(userId)});
        }
        const accessToken = this.getAccessToken();
        const headers = { Authorization: `Bearer ${accessToken}`};
         return fetch('https://api.spotify.com/v1/me', {
            headers: headers
        }).then(response=> {
            return response.json()
        }).then(jsonResponse=>{
            return userId = jsonResponse.id;
        })

    },

    search(term){
        const url = `https://api.spotify.com/v1/search?type=track&q=${term}`;
        const accessToken = Spotify.getAccessToken();
        return fetch(url,{headers: {Authorization: `Bearer ${accessToken}`}}).then(response=>{
            return response.json();
        }).then(jsonResponse=>{
            if(!jsonResponse){
                return [];
            }
            return jsonResponse.tracks.items.map(track=>({
                id: track.id,
                name: track.name,
                artist: track.artists[0].name,
                album: track.album.name,
                uri: track.uri
            }))
        })
    },

    savePlaylist(playlist, trackUris){
        if(!playlist || !trackUris){
            return;
        }
        const accessToken = this.getAccessToken();
        const headers = { Authorization: `Bearer ${accessToken}`};
        return this.getCurrentuserId().then(userId=>{
            return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({name: playlist})
                        }).then(response=>{return response.json()
                                }).then(jsonResponse=>{
                                            const playlistID=jsonResponse.id;
                                           return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistID}/tracks`, {
                                            method: 'POST',
                                            headers: headers,
                                         body: JSON.stringify({uris: trackUris})
                                        })
                                        })
        })
        

    },

    getUserPlaylists(){

    }

};

export default Spotify;