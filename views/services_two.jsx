import React, { Component } from 'react'
import ServiceLayout from './layouts/services'

export default class ServiceTwo extends Component{
  render(){
    return(
      <ServiceLayout
        title={this.props.title}
        description={this.props.description}>

        <h6 className="sub-title">{this.props.sub}</h6>

      </ServiceLayout>
    )
  }
}

