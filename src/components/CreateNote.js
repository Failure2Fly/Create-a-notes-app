import React from 'react'

class CreateNote extends React.Component {

  constructor(props) {
        super(props)
        this.onClick = this.onClick.bind(this)
        this.state = {
            title: '',
            note: '',
            url: '',
            tag: '',
            created_at: '',
            updated_at: ''
        }
    }

    // Handles the Add Todo button click, runs parent component addTodo method, and clears the state, causing a render()
    onClick(addNote) {
        // Call parent addTodo method
        addNote(this.state.title, this.state.note, this.state.url, this.state.tag)

        // Sets state of fields, and triggers render() again
        this.setState({
            title: '',
            note: '',
            url: '',
            tag: '',
            created_at: '',
            updated_at: ''
        })
    }

  render() {
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