import React from 'react'
import CardNotes from './CardNotes'

class Cards extends React.Component {

  render() {
    return <div className="tile is-parent">
            <CardNotes/>
            <CardNotes/>
            <CardNotes/>
      </div>
  }
}

export default Cards



