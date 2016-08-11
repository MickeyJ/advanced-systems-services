import React, { Component } from 'react'
import ServiceLayout from './layouts/services'

export default class ServiceDefault extends Component{
  render(){
    return(
      <ServiceLayout
        title={this.props.title}
        description={this.props.description}>

        <h6 className="sub-title">default</h6>

      </ServiceLayout>
    )
  }
}