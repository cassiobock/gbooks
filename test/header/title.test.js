import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'
import Title from '../../components/header/title'

test('should contain a h1', t => {
  const wrapper = shallow(<Title />)

  t.is(wrapper.contains(<h1>gBooks</h1>), true)
})
