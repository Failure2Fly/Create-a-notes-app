import React from 'react'
import Navbar from './Navbar'
import { connect } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { default as storeJS } from 'store'

// Initial shared state
const initialSharedState = {
    notes: [],
    searchTerm: ''
}

class Notes extends React.Component {

  // constructor(props) {
  //       // Call the React.Component constructor() method
  //       // Pass the props onto the constructor
  //       super(props)

  //       // Bind custom methods to this object context
  //       this.getNotes = this.getNotes.bind(this)
  //       this.addNote = this.addNote.bind(this)

  //       // Initial state
  //       // We no longer use the local state object, instead Redux shared state object
  //       // this.state = {
  //       //     todos: []
  //       // }
  //   }
  //   addNote(description, category) {
  //           fetch('./localStorage', {
  //               method: 'POST',
  //               headers: {
  //                   'Content-Type': 'application/json'
  //               },
  //               body: JSON.stringify({
  //                   title: '',
  //                   note: '',
  //                   url: '',
  //                   tag: '',
  //                   created_at: '',
  //                   updated_at: ''
  //               })
  //           })
  //           .then(this.getTodos)
  //       }
  //   }
        getNotes() {
        fetch('./localStorage')
        .then(window.internetConnectionCheck)
        .then(response => response.json())
        .then(todos => this.props.dispatch({type: 'TODOS', body: todos}))
    }

  render() {
    return <Navbar />         
  }
}


export default Notes