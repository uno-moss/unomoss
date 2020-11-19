import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <React.StrictMode>{2 + 2}</React.StrictMode>,
  document.getElementById('app')
);

module.hot.accept();
