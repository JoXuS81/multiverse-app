import React, {Component} from 'react';
import Appcontent from './components/app_content';
import './App.css';

class App extends React.Component {
   render() {
      return (
         <div className = "app">
            <Appcontent />
         </div>
      );
   }
}

export default App;