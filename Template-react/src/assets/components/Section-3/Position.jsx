import React from 'react'
import { useState } from 'react';

export default function Position() {
    const [position, setPosition]=useState({
        c: 0, r: 0
      });
  return (

    <div  onPointerMove={b => {
        setPosition({
          c: b.clientX,
          r: b.clientY
        });
      }}
      style={{
        position: "relative",
        width: "10vw",
        height: "10vh"
      }}>
        <div  style={{
        position: 'absolute',
        backgroundColor: 'green',
        borderRadius: '50%',
        transform: `translate(${position.c}px, ${position.r}px)`,
        left: -10,
        top: -10,
        width: 20,
        height: 20,
      }} />
      
    </div>
  )
}
