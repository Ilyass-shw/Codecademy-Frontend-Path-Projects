const xhr = new XMLHttpRequest();
const url = "https://api-to-call.com/endpoint";
const data = JSON.stringify({id : '200'});

xhr.responseType = 'json';
xhr.onreadystatechange= ()=>{
    if(xhr.readyState === XMLHttpRequest.DONE){
  
    }
  };