import {renderComponent, expect} from '../test_helper'
import NavHeader from '../../views/common/NavHeader.jsx'

describe('NavHeader', () =>{

  const component = renderComponent(NavHeader);

  it('should contain a header element', () =>{
    expect(component.find('header')).to.exist;
  })

  it('should contain a nav element', () =>{
    expect(component.find('nav')).to.exist;
  })

});