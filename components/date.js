import React, { Component } from 'react';
import logo from '../logo.svg';
export default class Header extends Component {
  render() {
    return (
      <div className="row">
        <div className="img">
          <img src={logo} width="100" height="50" />
        </div>
      </div>
    );
  }
} 