import React from 'react';

const FetchButton = (props) => {
  return (
    <button onClick={props.onFetch}>{'Fetch!'}</button>
  );
};

FetchButton.propTypes = {
  onFetch: React.PropTypes.func.isRequired,
};

export default FetchButton;
