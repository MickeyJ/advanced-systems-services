import React, { Component } from 'react'

import Head from './common/Head'
import NavHeader from './common/NavHeader'
import Footer from './common/Footer'

const siteName = 'Advanced Systems Services';

export default class Layout extends Component{
  render(){
    return(
      <html lang="en">

      <head>
        <title>{this.props.title} - {siteName}</title>
        <meta name="description" content={this.props.description}/>
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
        <link rel="stylesheet" href="bower_components/Materialize/dist/css/materialize.min.css"/>
        <link rel="stylesheet" href="css/main.css"/>
        <script src="bower_components/jquery/dist/jquery.min.js"></script>
        <script src="bower_components/Materialize/dist/js/materialize.min.js"></script>
        <script src="js/script.js"></script>
      </head>
        
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
