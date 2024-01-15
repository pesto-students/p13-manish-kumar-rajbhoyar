import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../features/counterSlice';

/**
 * Counter component that displays a simple counter app.
 * Uses useSelector hook to get the current count from the Redux store.
 * Uses useDispatch hook to dispatch the increment and decrement actions to the Redux store.
 */
function Counter() {
  const count = useSelector(state => state.counter); // Get the current count from the Redux store
  const dispatch = useDispatch(); // Get the dispatch function from the useDispatch hook

  return (
    <div>
      <h1>Simple Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button> {/* Dispatch the increment action when the button is clicked */}
      <button onClick={() => dispatch(decrement())}>Decrement</button> {/* Dispatch the decrement action when the button is clicked */}
    </div>
  );
}

export default Counter;