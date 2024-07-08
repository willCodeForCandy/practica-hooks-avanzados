import React from 'react';

const List = ({ title, list }) => {
  return (
    <div>
      {console.log('rendering list')}
      <h2>{title}</h2>
      <ul>
        {list.map((item, index) => {
          if(item) {
            return <li key={index}>{item}</li>
          }
        })}
      </ul>
    </div>
  );
};

export default List;
