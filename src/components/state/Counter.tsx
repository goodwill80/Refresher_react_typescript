import { useReducer } from 'react';
// Typing of reducer

type counterState = {
  count: number;
};
// Discriminated Unions
// ********************
type UpdateAction = {
  type: 'INCREMENT' | 'DECREMENT';
  payload: number;
};

type ResetAction = {
  type: 'RESET';
};

type counterAction = UpdateAction | ResetAction;
// **********************

const initialState = {
  count: 0,
};

const reducer = (state: counterState, action: counterAction) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + action.payload };
    case 'DECREMENT':
      return { count: state.count - action.payload };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: 'INCREMENT', payload: 10 });
        }}
      >
        Increment by 10
      </button>
      <button onClick={() => dispatch({ type: 'DECREMENT', payload: 10 })}>
        Decrement by 10
      </button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  );
}

export default Counter;
