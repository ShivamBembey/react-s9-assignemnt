import React from "react";
import { useState } from 'react'
const Background = () => {
    const [isBlack, setState] = useState(false)
    const buttons = () => {
        if (isBlack) {
            setState(false);
        }
        else {
            setState(true);
        }
        }
    return (
    <div style={{ backgroundColor: isBlack ? "black" : "white" , height:"100vh"}}  >
        <button onClick={buttons} style={{ backgroundColor: isBlack ? "white" : "yellow"}}>Change color</button>
    </div>
    );  
};
export default Background;