import React from 'react';
import ChildComponent from './child';

const ParentComponent = () => {
  const name = 'Shivam';
  const age = 22;

  return (
    <div>
      <ChildComponent name={name} age={age} />
    </div>
  );
};

export default ParentComponent;
