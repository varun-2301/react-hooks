import React from 'react'
import { Redirect, Route, withRouter } from 'react-router-dom'
import _ from 'lodash'
import PropTypes from 'prop-types'

import { getLoggedInUserData } from '../utils/helper'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) => {
            const user = getLoggedInUserData()
            return !_.isEmpty(user) ? (
                <Component {...props} />
            ) : (
                <Redirect to={{ pathname: '/', state: { from: props.location } }} />
            )
        }}
    />
)

PrivateRoute.propTypes = {
    component: PropTypes.objectOf(PropTypes.any),
    location: PropTypes.objectOf(PropTypes.any),
}

export default withRouter(PrivateRoute)
