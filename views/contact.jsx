import React, { Component } from 'react'
import DefaultLayout from './layouts/default'


export default class Contact extends Component{
  render(){
    return(
      <DefaultLayout
        title={this.props.title}
        description={this.props.description}>
        <section id="inner-content">

          <h3>{this.props.title}</h3>

        </section>
      </DefaultLayout>
    )
  }
}

