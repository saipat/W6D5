import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tabs from './tabs';


const panes = [
  {title: 'one', content: 'Hello'},
  {title: 'two', content: 'Ok'},
  {title: 'three', content: 'See you'}
];


const Root = (props) => (
  <div className = "rootWidget">
    <Clock />
    <Tabs panes={panes} lookAt={"me"}/>
  </div>
);

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(
    <Root />, 
    root
  );
  
  
});
