import React, { useState, useEffect } from 'react';

export default function Timer() {
  const [time, setTime] = useState(0);
  useEffect(()=>{
      const intervalId = setInterval(()=>{setTime((prev)=>prev+1)}, 1000);
      return ()=> {clearInterval(intervalId);}
  })
  return (
    <>
      <h1>Time: {time}</h1>
    </>
  );
}


