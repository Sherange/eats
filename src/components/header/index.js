import React,  { Component } from 'react';
import Logo from './Logo';
import Navigation from './Navigation';

export default class Header extends Component {
  render () {
    return(
      // <!-- Main Header -->
      <header className="main-header">
    
        {/* Logo */}
        <Logo></Logo>
    
        {/* Header Navbar */}
        <Navigation></Navigation>
       
      </header>
    );
  }
}