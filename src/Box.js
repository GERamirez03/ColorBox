import React from 'react';

const Box = ({ backgroundColor, width, height, id, removeBox }) => { // removeBox, key 

    const styles = {
        backgroundColor: backgroundColor,
        width: `${width}px`,
        height: `${height}px`
    };

    return (
        <div>
            <div
                className="Box"
                style={styles}
            />
            <button onClick={() => removeBox(id)}>X</button>
        </div>
    );
};

export default Box;