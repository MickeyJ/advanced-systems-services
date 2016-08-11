import {renderComponent, expect} from '../test_helper'
import ServiceDefault from '../../views/services_default.jsx'

describe('Services Default', () =>{

  const component = renderComponent(ServiceDefault, {title: 'Services'});

  it('should render route title correctly', () =>{
    expect(component.find('.page-title')).to.contain('Services');
  });

  it('should render sub-route title as default', () =>{
    expect(component.find('.sub-title')).to.contain('default');
  })

});