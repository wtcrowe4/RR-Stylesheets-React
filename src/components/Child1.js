import React from 'react';
import Grand1 from './Grand1';
import Grand2 from './Grand2';

// const child1style = {
//     display: "flex",
//     padding: "20px",
//     margin: "20px",
//     background: "#f5f5f5",
//     border: "3px solid #827f7f",
//     width: "50%",
//     height: "70",
// }

const Child1 = () => {
  return (
    <div className="child1">
      <h3>Child 1</h3>
        <Grand1 />
        <Grand2 />
    </div>
  );
}

export default Child1;