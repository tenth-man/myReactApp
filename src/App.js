import React from 'react';
import ReactDOM from 'react-dom/client';
import MenuBar from './components/menuBar/MenuBar';
import Header from './components/header/Header';
import Viewer from './components/mainviewer/Viewer';

class App extends React.Component {
  render() {
    return(
      <div>hello
        <Header/>
        <Viewer/>
        <MenuBar />
      </div>
    );
  }
}

export default App;
