import React from 'react'
import {render, screen, fireEvent} from '@testing-library/react'
import {Provider} from 'react-redux'

const store = {
    dispatch: jest.fn(),
    getState: jest.fn(),
    subscribe: jest.fn()
}

import AddTodo from './AddTodo'

describe('<AddTodo />', () => {
    test.skip("submitting an input dispatches saveTodo action", () => {
        render(<Provider store={store}><AddTodo /></Provider>)
    })
})