import React, { setState } from "react";
import "./Box.css"

const Box = ({id, removeBox, width, height, backgroundColor}) => {
    const remove = () => removeBox(id);
    return (
        <div className="Box" style={{width:`${width}em`, height:`${height}em`, backgroundColor:backgroundColor}}>
            <button onClick={remove} className="Box-btn">Remove Box</button>
        </div>
    )
}

export default Box;