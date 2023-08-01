import React from 'react';

const ChildComponent = (props) => {
  const { name, age } = props;

  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default ChildComponent;
