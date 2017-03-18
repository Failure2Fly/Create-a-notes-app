import React from 'react'

// Load React Router
import Notes from './components/Notes'
import Welcome from './components/Welcome'
import CreateNote from './components/CreateNote'
import Cards from './components/Cards'


// Configure routes
class Routes extends React.Component {
    render() {
        return <Notes />
    }
}

export default Routes
