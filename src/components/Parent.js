import React from 'react';
import Child1 from './Child1';
import Child2 from './Child2';
import '../App.css';

// const ParentStyled = 

const Parent = () => {
  return (
    <div className="parent">
      <h2>Parent</h2>
        <Child1 />
        <Child2 />
    </div>
  );
}

export default Parent;