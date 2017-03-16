import React from 'react'

class CardNotes extends React.Component {

  render() {
    return<article className="tile is-4 is-child notification is-info">
          <p className="title">Middle tile</p>
          <p className="subtitle">With an image</p>
          <figure className="image is-1by1">
          </figure>
        </article>
  }
}

export default CardNotes