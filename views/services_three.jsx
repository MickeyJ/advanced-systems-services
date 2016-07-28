import React, { Component } from 'react'
import ServiceLayout from './layouts/services'

export default class ServiceThree extends Component{
  render(){
    return(
      <ServiceLayout
        title={this.props.title}
        description={this.props.description}>

        <h4>{this.props.sub}</h4>

      </ServiceLayout>
    )
  }
}

