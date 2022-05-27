import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Header } from './App';

// const text = "Hello world";

// const elem = (
//   <div>
//       <h2 className='text'>Текст: {text} {2 + 2}</h2>
//       <input type="text" />
//       <label htmlFor=''></label>
//       <button tabIndex="0">Push me</button>
//       <button/>
//   </div>
// ); // react элемент

//const elem = React.createElement('h2', {className: 'greeteng'}, 'Hello world');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
);

const max = ReactDOM.createRoot(document.getElementById("max"));
max.render(
<Header/>
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
