import React from 'react';

const Timer = ({ date }) => {
  return (
    <p>
      {/* {console.log('rendering timer')} */}
      {date?.toLocaleTimeString()}
    </p>
  );
};

export default Timer;
