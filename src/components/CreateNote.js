import React from 'react'
import store from 'store'
import { browserHistory } from 'react-router' 
import moment from 'moment'

const now = moment().format('YYYY-MM-DD HH:mm:ss')

class CreateNote extends React.Component {

    constructor(props) {
        super(props)
        this.save = this.save.bind(this)

        this.state = {
            title: '',
            body: '',
            url: '',
            tags: '',
            created_at: now,
            updated_at: now,
        }
    }

    componentWillMount() {
      let notes = store.get('notes', [])
      if (this.props.params.index) {
        let note = notes[this.props.params.index]
        this.setState({
            title: note.title,
            body: note.body,
            url: note.url,
            tags: note.tags,
            created_at: note.create_at,
        }) 
      }
    }

    save() {
      let notes = store.get('notes', [])
        if ( ! this.props.params.index) {
            notes.push(this.state)
        }
        else {
            notes[this.props.params.index] = this.state
        }
        store.set('notes', notes)
        browserHistory.push('/')
    }
      
  render() {
    return <div className="column">
            <div className="card">
              <div id="createNote" className="card-content">
               <p className="control">
                  <input className="input" type="text" value={this.state.title} onChange={(e) => this.setState({title:e.target.value})} placeholder="Title" />
                </p>
                <label className="label">Note</label>
                  <p className="control">
                    <textarea id="writeNote" className="textarea" placeholder="Write Note Here..." value={this.state.body} onChange={(e) => this.setState({body:e.target.value})}></textarea>
                  </p>
                <div className="field">
                </div>
                <p className="control">
                  <input className="input is-info" type="text" placeholder="Input Tags" value={this.state.tags} onChange={(e) => this.setState({tags:e.target.value})} />
                  <input className="input is-info" type="text" placeholder="URL" value={this.state.url} onChange={(e) => this.setState({url:e.target.value})}/>
                </p>
              </div>
                <footer className="card-footer">
                  <p className="card-footer-item">
                    <span>
                      <i className="fa fa-trash-o" id="icon"></i> Delete Note
                    </span>
                  </p>
                  <p className="card-footer-item">
                    <span onClick={this.save}>
                      <i className="fa fa-floppy-o" aria-hidden="true" id="icon"></i> Save Note
                    </span>
                  </p>
                </footer>
            </div>
          </div>
  }
}

export default CreateNote
