import React from 'react';
import ReactDOM from 'react-dom/client';
import './menubar.css';

class MenuBar extends React.Component {
  render() {
    return(
      <div className='menuBar'>
        <MenuButton label='Home'/>
        <MenuButton label='Photo'/>
        <MenuButton label='Graph'/>
        <MenuButton label='ToDo'/>
      </div>
    );
  }
}

class MenuButton extends React.Component {
  render() {
    return(
      <button className="menuButton">{this.props.label}</button>
    );
  }
}

export default MenuBar;
