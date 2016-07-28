import React from 'react'

const SubNav = props => (
  <section className="sub-nav">
    {props.links.map((x, i) =>(
      <a key={i} href={`${props.basepath}_${x}`} className='sub-nav-link'>
        <span className="link-title">{x}</span>
        <span className="link-arrow">&#10148;</span>
      </a>
    ))}
  </section>
);

export default SubNav
