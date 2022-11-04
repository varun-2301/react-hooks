import React, { Fragment, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

import PrivateRoute from './PrivateRoute'
import NotFound from '../pages/NotFound/index'
import { Loader, CustomRouter } from '../components'
import { history } from '../utils/helper'
const Login = lazy(() => import('../containers/Login/view').then((module) => ({ default: module.Login })))
const User = lazy(() => import('../containers/User').then((module) => ({ default: module.UserList })))
const UserForm = lazy(() => import('../containers/User').then((module) => ({ default: module.UserForm })))
const Dashboard = lazy(() => import('../containers/Dashboard').then((module) => ({ default: module.Dashboard })))

function MainRoute() {
    return (
        <Fragment>
            <Loader />
            <CustomRouter history={history}>
                <Routes>
                    <Route exact path="/" element={<Login />} />
                    <Route exact path="/login" element={<Login />} />

                    <Route path="/" element={<PrivateRoute />}>
                        <Route exact path="dashboard" element={<Dashboard />} />
                        <Route exact path="user" element={<User />} />
                        <Route exact path="user/create" element={<UserForm />} />
                        <Route exact path="user/edit/:id" element={<UserForm />} />
                        {/*Page Not Found*/}
                        <Route element={<NotFound />} />
                    </Route>
                </Routes>
            </CustomRouter>
        </Fragment>
    )
}

export default MainRoute
