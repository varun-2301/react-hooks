import { screen, render } from '@testing-library/react'
import user from '@testing-library/user-event'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

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

test('validate login screen input validation', () => {
    renderComponent()

    const EmailInputError = screen.getByTestId('email-login-error')
    const PasswordInputError = screen.getByTestId('password-login-error')
    const button = screen.getByRole('button')

    user.click(button)

    expect(EmailInputError).toBeInTheDocument()
    expect(PasswordInputError).toBeInTheDocument()
})
