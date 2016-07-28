import React, { Component } from 'react'
import ServiceLayout from './layouts/services'

export default class ServiceDefault extends Component{
  render(){
    return(
      <ServiceLayout
        title={this.props.title}
        description={this.props.description}>

        <h4>default</h4>

      </ServiceLayout>
    )
  }
}