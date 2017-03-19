import React from 'react'
import CardNotes from './CardNotes'

class Cards extends React.Component {

  render() {
    return<div className="container-fluid">
            <div className="tile is-parent">
              <CardNotes />
              <CardNotes />
              <CardNotes />
              <CardNotes />
            </div>

            <div className="tile is-parent">
            <CardNotes />
            <CardNotes />
            <CardNotes />
            <CardNotes />
            </div>

            <div className="tile is-parent">
            <CardNotes />
            <CardNotes />
            <CardNotes />
            <CardNotes />
            </div>

            <div className="tile is-parent">
            </div>

            <div className="tile is-parent">
            </div>
      </div> 
  }
}

export default Cards



