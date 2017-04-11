import React from 'react'
import CardNote from './CardNote'
import store from 'store'
class Cards extends React.Component {

  constructor (props) {
    super(props)
    this.loadNotes = this.loadNotes.bind(this)

    this.state = {
      notes: []
    }
  }  

  componentWillMount () {
    this.loadNotes()
  }

  loadNotes() {
    let notes = store.get('notes', [])
    this.setState({notes: notes}) 
  }

  render() {
    let notes = this.state.notes.map((note,index) => <CardNote key={index} index={index} {...note} loadNotes={this.loadNotes} />)
    return<div className="container-fluid">
            <div className="tile is-parent">
              {notes}
            </div>
      </div> 
  }
}

export default Cards
