//Load React
import React from 'react'

// Load React Router
import { Router, Route, IndexRoute, browserHistory } from 'react-router'


// Load page view components
import Navbar from './components/Navbar'
import Welcome from './components/Welcome'
import CreateNote from './components/CreateNote'
import Cards from './components/Cards'

// Configure routes
class Routes extends React.Component {
    render() {
        return <Router history={browserHistory}>
                <Route path="/" component={Navbar}>
                    <IndexRoute component={Welcome} />
                    <Route path="write-note" component={CreateNote} />    
                    <Route path="all-notes" component={Cards} />     
                    <Route path="edit-note/:index" component={CreateNote} />
                </Route>       
            </Router>
    }
}

export default Routes