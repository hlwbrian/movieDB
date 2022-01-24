import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter, { history }  from './routers/AppRouter';

const jsx = (
    <div><h3><AppRouter /></h3></div>
  );
  
ReactDOM.render(jsx, document.getElementById('app'));