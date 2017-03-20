import React from 'react'
import store from 'store'
import { connect } from 'react-router'
import { browserHistory } from 'react-router' 

class CreateNote extends React.Component {

  constructor(props) {
        super(props)
        this.addNote = this.addNote.bind(this)
        this.state = {
            title: title,
            note: note,
            url: url,
            tag: tag,
            created_at: now,
            updated_at: now
        }
    }
      
  render() {
    var store = require ('store')
    return <div className="column">
            <div className="card">
              <header className="card-header">
                <p className="control">
                  <input className="input" type="text" placeholder="Title" />
                </p>
              </header>
              <div  id="createNote" className="card-content">
                <label className="label">Note</label>
                  <p className="control">
                    <textarea id="writeNote" className="textarea" placeholder="Write Note Here..."></textarea>
                  </p>
                <div className="field">
                </div>
                <p className="control">
                  <input classNme="input is-info" type="text" placeholder="Input Tags" />
                  <input classNme="input is-info" type="text" placeholder="URL" />
                </p>
              </div>
                <footer className="card-footer">
                  <p className="card-footer-item">
                    <span>
                      <i className="fa fa-trash-o" id="icon"></i> Delete Note
                    </span>
                  </p>
                  <p className="card-footer-item">
                    <span onClick={()=> this.onClick(this.props.addNote)}>
                      <i className="fa fa-floppy-o" aria-hidden="true" id="icon"></i> Save Note
                    </span>
                  </p>
                </footer>
            </div>
          </div>
  }
}

export default CreateNote
