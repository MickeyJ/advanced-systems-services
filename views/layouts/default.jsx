import React, { Component } from 'react'

import Head from './../common/Head'
import NavHeader from './../common/NavHeader'
import Footer from './../common/Footer'

const siteName = 'Advanced Systems Services';

export default class Layout extends Component{
  render(){
    return(
      <html lang="en">
        <Head 
          siteName={siteName}
          title={this.props.title}
          description={this.props.description}
        />
        <body>

          <div id="all-wrap">
    
            <NavHeader />
    
            <main id="main-wrap">
              {this.props.children}
            </main>
    
            <Footer siteName={siteName}/>
    
          </div>
          
        </body>
      </html>
    )
  }
}
