import {renderComponent, expect} from '../test_helper'
import ServiceOne from '../../views/services_one.jsx'

describe('Services One', () =>{

  const component = renderComponent(ServiceOne, {sub: 'one'});

  it('should render sub-route title correctly', () =>{
    expect(component.find('.sub-title')).to.contain('one');
  })

});