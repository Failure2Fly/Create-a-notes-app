import React from 'react'
import { browserHistory } from 'react-router'
import store from 'store'

class CardNote extends React.Component {

  constructor (props){
    super (props)

    this.delete = this.delete.bind(this)
  }

  delete()  {
    let notes = store.get('notes', [])
    notes.splice(this.props.index, 1)
    store.set('notes', notes)
    this.props.loadNotes()
  }

  render() {
    return<div className="column is-3">
    <div className="card">
  <header className="card-header">
    <p className="card-header-title">
      {this.props.title}
    </p>
    <a className="card-header-icon">
      <span className="icon">
        <i className="fa fa-angle-down"></i>
      </span>
    </a>
  </header>
  <div className="card-content">
    <div className="content">
      {this.props.body}
      <p>{this.props.tags.split(' ').map((tag,index) => <a key={index}>{tag}</a>)}</p>
      <small>{this.props.updated_at}</small>
    </div>
  </div>
  <footer className="card-footer">
  <p className="card-footer-item">
      {this.props.url}
    </p>
  </footer>
  <footer className="card-footer">
    <p className="card-footer-item" onClick={this.delete}>
      <span>
        <i className="fa fa-trash-o" id="icon"></i> Delete Note
      </span>
    </p>
    <p className="card-footer-item" onClick={() => browserHistory.push('/edit-note/' + this.props.index)}>
      <span>
        <i className="fa fa-pencil is-medium" id="icon"></i> Edit note
      </span>
    </p>
  </footer>
</div>
</div>
  }
}

export default CardNote