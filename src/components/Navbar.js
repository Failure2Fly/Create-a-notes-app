import React from 'react'
import Cards from './Cards'
import Welcome from './Welcome'
import CreateNote from './CreateNote'

class Navbar extends React.Component {

  render() {
    return <div className="columns is-gapless">
    <div className="column is-2">
    <nav className="panel">
              <p className="panel-heading">Repositories</p>
            <div className="panel-block">
              <p className="control has-icon">
                <input className="input is-small" type="text" placeholder="Search" />
                  <span className="icon is-small">
                    <i className="fa fa-search"></i>
                  </span>
              </p>
            </div>
              <p className="panel-tabs">
                <a className="is-active">All Notes</a>
                <a>Tags</a>
                <a>Notebooks</a>
              </p>
                <a className="panel-block is-active">
                  <span className="panel-icon">
                    <i className="fa fa-book"></i>
                  </span>
                  bulma
                </a>
                <a className="panel-block">
                  <span className="panel-icon">
                    <i className="fa fa-book"></i>
                  </span>
                  marksheet
                </a>
                <a className="panel-block">
                  <span className="panel-icon">
                    <i className="fa fa-book"></i>
                  </span>
                  minireset.css
                </a>
                <a className="panel-block">
                  <span className="panel-icon">
                    <i className="fa fa-book"></i>
                  </span>
                  jgthms.github.io
                </a>
                <a className="panel-block">
                  <span className="panel-icon">
                    <i className="fa fa-code-fork"></i>
                  </span>
                  daniellowtw/infBoard
                </a>
                <a className="panel-block">
                  <span className="panel-icon">
                    <i className="fa fa-code-fork"></i>
                  </span>
                  mojs
                </a>
                <label className="panel-block">
                  <input type="checkbox" />
                  Remember me
                </label>
              <div className="panel-block">
                <button className="button is-primary is-outlined is-fullwidth">
                  Reset all filters
                </button>
              </div>
            </nav>
        </div>
           
        <div className="tile is-ancestor is-gapless">
            <div className="tile is-vertical">
                <div className="tile">
                    <div className="tile is-parent is-vertical">
                        <article id="header" className="tile is-child notification">
                        <p className="title">Vertical...</p>
                        <p className="subtitle">Top tile</p>
                        </article>
                    </div>                  
                </div> 
                <Welcome />
            </div>
        </div>
    </div>
    
           
  }
}



export default Navbar