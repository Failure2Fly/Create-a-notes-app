//Load React
import React from 'react'

// Load React Router
import { Router, Route, browserHistory } from 'react-router'

// Load React Router Redux
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import store from './Reducers'
const history = syncHistoryWithStore(browserHistory, store)

// Load page view components
import Notes from './components/Notes'
import Welcome from './components/Welcome'
import CreateNote from './components/CreateNote'
import Cards from './components/Cards'

// Configure routes
class Routes extends React.Component {
    render() {
        return <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={Notes} />
                <Route path="/welcome" component={Welcome} />
                <Route path="/write-note" component={CreateNote} />      
                <Route path="/all-notes" component={Cards} />                         
            </Router>
        </Provider>
    }
}

export default Routes