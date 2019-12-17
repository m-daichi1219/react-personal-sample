import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  const { text } = props;

  return (
    <header className="App-header">
      <h2>{text}</h2>
    </header>
  );
};

Header.propTypes = {
  text: PropTypes.string,
};

Header.defaultProps = {
  text: 'text',
};

export default Header;
