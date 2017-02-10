import Book from '../../components/search/book'
import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'

test('should render title', t => {
  const title = 'my book'
  const wrapper = shallow(<Book key='1' id='1' title={title} authors={[ 'foo', 'bar' ]} language='en' thumbUrl='http://foo.com/bar.png' />)

  t.is(wrapper.find('.book-title').text().includes(title), true)
})

test('should render authors', t => {
  const wrapper = shallow(<Book key='1' id='1' title='my book' authors={[ 'foo', 'bar' ]} language='en' thumbUrl='http://foo.com/bar.png' />)


  t.deepEqual(wrapper.find('.book-authors').find('span').length, 2)
})
