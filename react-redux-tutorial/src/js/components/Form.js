import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ADD_ARTICLE } from '../constants/action-types';

const ConnectedFrom = props => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setTitle(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: ADD_ARTICLE, payload: { title } });
    setTitle('');
  };

  return (
    <form>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleChange}
        />
      </div>
      <button onClick={handleSubmit}>SAVE</button>
    </form>
  )
};

export default ConnectedFrom;
