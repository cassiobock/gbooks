import test from 'ava'
import Favorites from '../../components/favorites/index'
import React from 'react'
import { shallow } from 'enzyme'

test('should render title', t => {
  const wrapper = shallow(<Favorites />)

  t.is(wrapper.contains(<h1>Favorites</h1>), true)
})
