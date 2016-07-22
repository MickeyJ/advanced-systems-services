import React, { Component } from 'react'
import DefaultLayout from './layout'


export default class About extends Component{
  render(){
    return(
      <DefaultLayout
        title={this.props.title}
        description={this.props.description}>
        <section id="inner-content">

          <h1>{this.props.title}</h1>

        </section>
      </DefaultLayout>
    )
  }
}

