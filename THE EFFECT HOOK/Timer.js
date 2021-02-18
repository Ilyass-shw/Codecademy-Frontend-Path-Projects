import React, { useState, useEffect } from 'react';

export default function Timer() {
  const [time, setTime] = useState(0);

  return (
    <>
      <h1>Time: {time}</h1>
    </>
  );
}


