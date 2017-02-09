import Book from '../../components/search/book'
import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'

test('should render book', t => {
  const wrapper = shallow(<Book key='1' id='1' title='my book' authors='foo, bar' language='en' thumbUrl='http://foo.com/bar.png' />)

  console.log(wrapper.text())

  t.is(wrapper.contains(<img src='http://foo.com/bar.png' alt='my book' />), true)
})
