import React, { Component } from 'react'
import DefaultLayout from './default'

import SubNav from '../common/SubNav'

const links = [
  'one',
  'two',
  'three'
];

export default class Services extends Component{
  render(){
    return(
      <DefaultLayout
        title={this.props.title}
        description={this.props.description}>
        <section id="inner-content">

          <h5 className="page-title">{this.props.title}</h5>

          <SubNav links={links} basepath="/services"/>

          <section className="sub-content">
            {this.props.children}
          </section>

        </section>
      </DefaultLayout>
    )
  }
}

