import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import ShowSubscribers from './ShowSubscribers';
import AddSubscriber from './AddSubscriber';
import './common/common.css';
import reportWebVitals from './reportWebVitals';
import PhoneDirectory from './PhoneDirectory';

ReactDOM.render(
  <PhoneDirectory  />, 
  document.getElementById('root')
  );


reportWebVitals();
