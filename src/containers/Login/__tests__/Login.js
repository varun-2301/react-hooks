import { screen, render } from '@testing-library/react'
import user from '@testing-library/user-event'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import * as redux from "react-redux"

import { Login } from '../view'

const renderComponent = () => {
    const initialState = {}
    const mockStore = configureStore()
    let store = mockStore(initialState)
    render(
        <Provider store={store}>
            <Login />
        </Provider>
    )
}

test('renders login screen', () => {
    renderComponent()

    const EmailInput = screen.getByTestId('email-login')
    const PasswordInput = screen.getByTestId('password-login')
    const button = screen.getByRole('button')

    expect(EmailInput).toBeInTheDocument()
    expect(PasswordInput).toBeInTheDocument()
    expect(button).toBeInTheDocument()
})

describe('validation of login form', () => {
    test('validate input fields', () => {
        renderComponent()
    
        const EmailInputError = screen.getByTestId('email-login-error')
        const PasswordInputError = screen.getByTestId('password-login-error')
        const button = screen.getByRole('button')
    
        user.click(button)
    
        expect(EmailInputError).toBeInTheDocument()
        expect(PasswordInputError).toBeInTheDocument()
    })
})

test('validate when the form is submitted', async() => {
    const useDispatchSpy = jest.spyOn(redux, 'useDispatch'); 
    const mockDispatchFn = jest.fn()        
    useDispatchSpy.mockReturnValue(mockDispatchFn)

    // Try to render my component
    renderComponent()

    // Find the two inputs
    const emailInput = screen.getByTestId('email-login')
    const passwordInput = screen.getByTestId('password-login')

    // Simulate typing in an email
    user.click(emailInput)
    user.keyboard('jane@jane.com')

    // Simulate typing in password
    user.click(passwordInput)
    user.keyboard('123456')

    // Find the button and click it
    const button = screen.getByRole('button')
    user.click(button)

    // Assertion to make sure function gets called
    expect(mockDispatchFn).toHaveBeenCalled()
    useDispatchSpy.mockClear()
})