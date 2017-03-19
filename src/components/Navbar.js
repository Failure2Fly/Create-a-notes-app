import React from 'react'
import Cards from './Cards'
import Welcome from './Welcome'
import CreateNote from './CreateNote'

class Navbar extends React.Component {


  render() {
    return <div>
    <div className="columns is-gapless">
    <div className="column is-2">
    <nav id="side-bar" className="panel">
              <p id="random-quote" className="panel-heading">I think I did pretty well, considering I started out with nothing but a bunch of blank paper.<p><br/> - Steve Martin</p></p>
            <div className="panel-block">
              <p className="control has-icon">
                <input className="input is-small" type="text" placeholder="Search" />
                  <span className="icon is-small">
                    <i className="fa fa-search"></i>
                  </span>
              </p>
            </div>
              <p className="panel-tabs">
                <a className="is-active">Notebooks</a>
                <a>All Notes</a>
                <a>Tags</a>
              </p>
                <a className="panel-block">
                  <span className="panel-icon">
                    <i className="fa fa-plus-square-o" aria-hidden="true"></i>
                  </span>
                  Add Notebook
                </a>
                <a className="panel-block">
                  <span className="panel-icon">
                    <i className="fa fa-book"></i>
                  </span>
                  Songs
                </a>
                <a className="panel-block">
                  <span className="panel-icon">
                    <i className="fa fa-book"></i>
                  </span>
                  Stories
                </a>
                <a className="panel-block">
                  <span className="panel-icon">
                    <i className="fa fa-book"></i>
                  </span>
                  Grocery List
                </a>
                <a className="panel-block">
                  <span className="panel-icon">
                    <i className="fa fa-book"></i>
                  </span>
                  Poems
                </a>
                <a className="panel-block">
                  <span className="panel-icon">
                    <i className="fa fa-book"></i>
                  </span>
                  Ramblings
                </a>
                <label className="">
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
                        <article id="headerOutline" className="tile is-child notification">
                          <div id="header" className="tile">
                          <img id="logo" src="img/skyblue-quill.png" alt="logo" />
                            <p id="penToPaper" className="title">Pen To Paper</p>
                          </div>
                          <i id="newNoteButton" className="fa fa-keyboard-o" aria-hidden="true"><a id="newNoteButton" class="button">New Note</a></i>
                        </article>
                    </div>                  
                </div> 
                <Welcome />
            </div>
        </div>
    </div>
     <footer id="footer" className="footer">
  <div className="container">
    <div className="content has-text-centered">
      <p>
        Created by <strong>Devin Blankenship</strong> for <a href="https://www.theironyard.com/locations/indianapolis.html">The Iron Yard</a> week 7, weekend assignment. 
      </p>
      <p>
        <a className="icon" href="https://github.com/Failure2Fly/Create-a-notes-app">
          <i className="fa fa-github"></i>
        </a>
      </p>
    </div>
  </div>
</footer>
</div>
    



    
           
  }
}



export default Navbar