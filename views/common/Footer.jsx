import React, {Component} from 'react'


export default class Footer extends Component{
  render(){
    return(
      <footer id="footer">
        <div id="inner-footer" >
          <span>Copyright &copy;</span>
          <span>{this.props.siteName}</span>
        </div>
      </footer>
    )
  }
}