# React Redux Toolkit

#### Start a New React Project
https://react.dev/learn/start-a-new-react-project

#### npm packages to install
```sh
npm i @reduxjs/toolkit
npm i react-redux
```
#### app/store.jsx
```javascript
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
```
#### index.jsx
```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { store } from './app/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
```

#### app/counter/counterSlice.jsx
```javascript
import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += Number(action.payload);
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
```
#### components/Counter.jsx
```javascript
import { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  incrementByAmount,
} from '../redux/counter/counterSlice';

function Counter() {
  const [amount, setAmount] = useState(3);
  const countValue = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Redux Toolkit</h1>
      <h1>{countValue}</h1>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(increment())}>Increment</button>

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={() => dispatch(incrementByAmount(amount))}>
        Increment by Amount
      </button>
    </div>
  );
}

export default Counter;
```
