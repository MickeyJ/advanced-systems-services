import React from 'react'

const Footer = (props) =>(
  <footer id="footer">
    <div id="inner-footer" >
      <span> &copy; 2016 </span>
      <span> {props.siteName} </span>
    </div>
  </footer>
);

export default Footer