import React from 'react'
import { shallow } from 'enzyme'
import Button from '../Button'

test('renders with text', () => {
    const text = 'text'
    const button = shallow(<Button text={text} />)
    expect(button.type()).toBe('button')
    expect(button.text()).toBe(text)
})

test('fires onClick', () => {
    const onClick = jest.fn()
    const button = shallow(<Button onClick={onClick} />)
    button.simulate('click')
    expect(onClick).toBeCalled()
})