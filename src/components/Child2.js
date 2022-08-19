import React from 'react';
import Grand3 from './Grand3';
import Grand4 from './Grand4';

// const child2style = {
//     display: "flex",
//     padding: "20px",
//     margin: "20px",
//     background: "#f5f5f5",
//     border: "3px solid #827f7f",
//     width: "50%",
//     height: "70",
// }

const Child2 = () => {
    return (
        <div className="child2">
        <h3>Child 2</h3>
            <Grand3 />
            <Grand4 />
        </div>
    );
}

export default Child2;