import React, {Component} from 'react';
import Mountains from '../Images/Mountains.jpg';

class Appimg extends React.Component {
   render() {
      return (
         <img class = "img-fluid image" src={Mountains} alt="Mountains" />
      );
   }
}

export default Appimg;