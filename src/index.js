import React from 'react';
import ReactDOM from 'react-dom';


// import { SimpleForm } from './components/02-useEffect/SimpleForm';
// import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
// import { CounterApp } from './components/01-useState/CounterApp';
// import {HookApp} from './HookApp';
// import {CounterWithCustomHook} from './components/01-useState/CounterWithCustomHook'

ReactDOM.render(
  <React.StrictMode>
    <MultipleCustomHooks />
  </React.StrictMode>,
  document.getElementById('root')
);
