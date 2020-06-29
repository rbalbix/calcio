import React from 'react';
import ReactLoading from 'react-loading';

const Loading = ({ loading }) => {
  return loading ? (
    <ReactLoading type="spokes" color="#1E7A0E" height="2rem" width="2rem" />
  ) : (
    ''
  );
};

export default Loading;
