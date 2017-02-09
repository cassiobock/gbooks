import test from 'ava'
import Search from '../../components/header/search'
import React from 'react'
import { shallow } from 'enzyme'
import { spy } from 'sinon'

test('should contain an input, a small and a link', t => {
  const wrapper = shallow(<Search search={() => { }} />)

  t.is(wrapper.containsAllMatchingElements([
    <input />,
    <small>press <a>enter</a> or click here</small>
  ]), true)
})

test('should update state when input changes', t => {
  const expectedValue = 'foo'
  const wrapper = shallow(<Search search={() => { }} />)
  const input = wrapper.find('input')

  input.simulate('change', { target: { value: expectedValue } })

  t.deepEqual(wrapper.state('query'), expectedValue)
})

test('should call `search` when `Enter` is pressed', t => {
  const searchSpy = spy()
  const expectedCalledValue = 'bar'
  const wrapper = shallow(<Search search={searchSpy} />)

  wrapper.instance().handleChange({ target: { value: expectedCalledValue } })

  const input = wrapper.find('input')
  input.simulate('keyPress', { key: 'Enter' })

  t.is(searchSpy.calledOnce, true)
  t.is(searchSpy.calledWith(expectedCalledValue), true)
})

test('should call `search` when the link receives a click', t => {
  const searchSpy = spy()
  const expectedCalledValue = 'foo'
  const wrapper = shallow(<Search search={searchSpy} />)

  wrapper.instance().handleChange({ target: { value: expectedCalledValue } })

  const link = wrapper.find('a')
  link.simulate('click')

  t.is(searchSpy.calledOnce, true)
  t.is(searchSpy.calledWith(expectedCalledValue), true)
})

test('should hide small if input is empty', t => {
  const wrapper = shallow(<Search search={() => { }} />)

  t.deepEqual(wrapper.find('small').props().style.display, 'none')
})

test('should show small if input has text', t => {
  const wrapper = shallow(<Search search={() => { }} />)

  wrapper.instance().handleChange({ target: { value: 'foo' } })

  t.deepEqual(wrapper.find('small').props().style.display, 'block')
})
