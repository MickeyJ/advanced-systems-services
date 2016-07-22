import React, { Component } from 'react'
import DefaultLayout from './layout'


export default class Index extends Component{
  render(){
    return(
      <DefaultLayout
        title={this.props.title}
        description={this.props.description}>
        <section id="inner-content">

          <h1>Home</h1>

        </section>
      </DefaultLayout>
    )
  }
}

