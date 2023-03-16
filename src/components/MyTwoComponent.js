import React from 'react';

/**
 * 函数式组件
 */
const MyTwoComponent = (props) => {
  const [state, setState] = React.useState({
    name: 'My Two Component',
  });

  return (
    <div>
      <button
        onClick={() => {
          setState({
            name: 'My Two Component Update',
          });
        }}
      >
        点我
      </button>
      <div>{state.name}</div>
      <div>{props.propsName}</div>
    </div>
  );
};

export default MyTwoComponent;