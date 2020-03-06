import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { configure, mount } from 'enzyme'

import { A, B } from '../part4'

describe('Part 4: React', () => {

    beforeAll(() => {
        configure({ adapter: new Adapter() })
    })

    test('a) Why does input not set value in the state? [04ea47cc]', () => {
        const wrapper = mount(<A />)
        const value = 'Hello world!'

        expect(wrapper.state('value')).toBe('')

        wrapper.find('input').simulate('change', {
            target: { value }
        })

        expect(wrapper.state('value')).toBe(value)
    })

    test('b) Why is new item not inserted in the list? [381b30d6]', () => {
        const wrapper = mount(<B />)

        expect(wrapper.find('li')).toHaveLength(3)
        expect(wrapper.find('li').last().text()).toBe('2')

        wrapper.find('button').simulate('click')

        expect(wrapper.find('li')).toHaveLength(4)
        expect(wrapper.find('li').last().text()).toBe('3')
    })

})
