import React, { useState } from "react";
import Box from "./Box";
import { v4 as uuid } from 'uuid';
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
    const INITIAL_STATE = [
        // test values
        // {id: uuid(), width: 10, height:10, backgroundColor: "red"},
        // {id: uuid(), width: 10, height:10, backgroundColor: "green"},
        // {id: uuid(), width: 10, height:10, backgroundColor: "blue"},
    ];
    const [boxes, setBoxes] = useState(INITIAL_STATE);

    const addBox = (newBox) => {
        setBoxes(boxes => [...boxes, {...newBox, id: uuid()}]);
    }
    const removeBox = id => {
        setBoxes(boxes => boxes.filter((box) => box.id !== id));
        console.log(boxes);
    }

    return (
        <div className="BoxList">
            <h1><i>Boxes!</i></h1>
            <NewBoxForm addBox={addBox} />
            <div>
                {boxes.map(box => <Box removeBox={removeBox} id={box.id} key={box.id} width={box.width} height={box.height} backgroundColor={box.backgroundColor}/>)}
            </div>

        </div>
    )
}

export default BoxList;
