import React from 'react'
import Navbar from './Navbar'

class Notes extends React.Component {

  static propTypes = {
        id: React.PropTypes.any.isRequired,    
        quote: React.PropTypes.string.isRequired,
        author: React.PropTypes.string.isRequired,
        category: React.PropTypes.string.isRequired,
        toggleComplete: React.PropTypes.func
    }
    addTodo(description, category) {
            fetch('/api/v1/Quotes', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    // quote: quotes,
                    // author: author,
                })
            })
    }

  render() {
    return <Navbar />         
  }
}


export default Notes