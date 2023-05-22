import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

const BoxList = () => {
    const [boxes, setBoxes] = useState([]);

    const renderBoxes = () => (
        <>
            {boxes.map(box => (
                <Box
                    backgroundColor={box.backgroundColor}
                    width={box.width}
                    height={box.height}
                    id={box.id}
                    key={box.id}
                    removeBox={removeBox}        
                />
            ))}        
        </>
    );

    const addBox = box => {
        let newBox = { ...box, id: uuid() };
        setBoxes(boxes => [...boxes, newBox]);
    };

    const removeBox = id => {
        setBoxes(boxes => boxes.filter(box => box.id !== id))
    }

    return (
        <div className="BoxList">
            <NewBoxForm addBox={addBox}/>
            <div className="BoxList-Boxes">
                {renderBoxes()}
            </div>
        </div>
    );
};

export default BoxList;