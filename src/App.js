import { Suspense } from 'react'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import reducer from './store/rootReducer'
import MainRoute from './routes/MainRoute'
import { ErrorBoundary, Loader } from './components'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'font-awesome/css/font-awesome.min.css'
import AppStyle from './AppStyle'

function App() {
    const store = createStore(reducer, applyMiddleware(thunk))

    return (
        <Provider store={store}>
            <ErrorBoundary>
                <Suspense fallback={<Loader />}>
                    <MainRoute />
                    <AppStyle />
                </Suspense>
            </ErrorBoundary>
        </Provider>
    )
}

export default App
