import React from 'react';
import { useSelector } from 'react-redux';

const ConnectedList = () => {
  const articles = useSelector(state => state.articles);
  
  return (
    <ul>
      {articles.map(el => (
        <li key={el.id}>{el.title}</li>
      ))}
    </ul>
  );
};

export default ConnectedList;
