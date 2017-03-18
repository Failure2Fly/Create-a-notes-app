import React from 'react'

class CardNotes extends React.Component {

  render() {
    return<div className="column is-3">
    <div className="card">
  <header className="card-header">
    <p className="card-header-title">
      Component
    </p>
    <a className="card-header-icon">
      <span className="icon">
        <i className="fa fa-angle-down"></i>
      </span>
    </a>
  </header>
  <div className="card-content">
    <div className="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
      <a>@bulmaio</a>. <a>#css</a> <a>#responsive</a>
      <br/>
      <small>11:09 PM - 1 Jan 2016</small>
    </div>
  </div>
  <footer className="card-footer">
    <p className="card-footer-item">
      <span>
        <i className="fa fa-trash-o" id="icon"></i> Delete Note
      </span>
    </p>
    <p className="card-footer-item">
      <span>
        <i className="fa fa-pencil is-medium" id="icon"></i> Edit note
      </span>
    </p>
  </footer>
</div>
</div>
  }
}

export default CardNotes