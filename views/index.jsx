import React, { Component } from 'react'
import DefaultLayout from './layouts/default'


export default class Index extends Component{
  render(){
    return(
      <DefaultLayout
        title={this.props.title}
        description={this.props.description}>
        <section id="inner-content">

          <h3>Home</h3>

        </section>
      </DefaultLayout>
    )
  }
}

