import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import LoginStyle from './style'
import { login } from '../../store'
import { EmailField, PasswordField, Submit } from '../../../../components'

export const Login = (props) => {
    const [fields, setFields] = useState({})
    const [errors, setErrors] = useState({})
    const [location, setLocation] = useState({})

    /**fetched data from redux store */
    const dispatch = useDispatch()

    /**hook equivalent to componentdidmount lifecycle */
    useEffect(() => {
        setLocation({ ...props })
    }, [])

    /* validate form */
    const _validateForm = () => {
        let formFields = fields
        let errors = {}
        let formIsValid = true

        if (!formFields['email'] || formFields['email'].trim() === '') {
            formIsValid = false
            errors['email'] = '*Please enter your email'
        }

        if (!formFields['password'] || formFields['password'].trim() === '') {
            formIsValid = false
            errors['password'] = '*Please enter your password'
        }

        setErrors(errors)
        return formIsValid
    }

    /* handle input field changes */
    const _handleChange = (event) => {
        let field = fields
        field[event.target.name] = event.target.value
        setFields(field)
    }

    /* submit form */
    const handleSubmit = (event) => {
        event.preventDefault()
        if (_validateForm()) {
            const { email, password } = event.target.elements
            const userData = {
                email: email.value,
                password: password.value,
            }

            dispatch(login(userData, location))
        }
    }

    return (
        <LoginStyle>
            <div className="background-design">
                <div id="logreg-forms">
                    <form className="form-signin" onSubmit={(event) => handleSubmit(event)}>
                        <h1 className="h3 mb-3 font-weight-normal" style={{ textAlign: 'center' }}>
                            {' '}
                            Sign in
                        </h1>
                        <div className="form-group">
                            <EmailField
                                name="email"
                                onChange={_handleChange}
                                placeholder="Email Address"
                                //required={true}
                                data-testid="email-login"
                            />
                            <div className="errorMsg" data-testid="email-login-error">
                                {errors.email}
                            </div>
                        </div>
                        <div className="form-group">
                            <PasswordField
                                name="password"
                                placeholder="Password"
                                onChange={_handleChange}
                                //required={true}
                                data-testid="password-login"
                            />
                            <div className="errorMsg" data-testid="password-login-error">
                                {errors.password}
                            </div>
                        </div>

                        <Submit className="btn btn-success btn-block center" text="Sign in" />
                    </form>
                </div>
            </div>
        </LoginStyle>
    )
}
