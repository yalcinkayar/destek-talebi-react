import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App';
import {BrowserRouter} from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container); 

root.render(
  <BrowserRouter basename="/">
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();


//const container = document.getElementById('index');
//const root = createRoot(container); 

//root.render(<Index/>, document.getElementById('index'));
/*root.render(
  
  <React.StrictMode>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </React.StrictMode>
  
  );*/