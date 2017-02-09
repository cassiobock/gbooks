import test from 'ava'
import Header from '../../components/header/index'
import React from 'react'
import Search from '../../components/header/search'
import { shallow } from 'enzyme'
import Title from '../../components/header/title'

test('should contain a Title, a Search and a Link', t => {
  const wrapper = shallow(<Header handleSearch={() => { }} />)

  t.is(wrapper.containsAllMatchingElements([
    <Title />,
    <Search />
  ]), true)
})
