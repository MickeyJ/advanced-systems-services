import React, {Component} from 'react'

export default class NavHeader extends Component{
  render(){
    return (
      <div id="top-contain">

        <header id="top-header">
          <a id="header-logo-link" href="/" type="text/html">
            <img id="header-logo" src="images/LOGOlrg.png" alt="logo" />
          </a>
        </header>

        <nav id="navigation">
          <a href="/">Home</a>
          <span>|</span>
          <a href="/services">Services</a>
          <span>|</span>
          <a href="/contact">Contact</a>
        </nav>

      </div>
    )
  }
}