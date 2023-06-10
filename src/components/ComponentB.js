import React from 'react';
import { useDispatch } from 'react-redux';
import { setInputValue } from '../actions/inputActions';

const ComponentB = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const value = e.target.value;
    dispatch(setInputValue(value));
  };

  return (
    <div style={{ backgroundColor: '#e6f7ff', padding: '10px', margin: '10px' }}>
      <input
        type="text"
        onChange={handleChange}
        style={{ width: '200px', height: '40px', fontSize: '16px' }}
      />
    </div>
  );
};

export default ComponentB;
