import React from 'react'

class Welcome extends React.Component {

  render() {
    return <div id="welcome">
    <div className="tile is-ancestor">
  <div className="tile is-vertical is-8">
    <div className="tile is-parent">
      <article className="message is-info">
                    <div className="message-header">
                        <p>How To Start A New Note?</p>
                        <button className="delete"></button>
                    </div>
                    <div className="message-body">
                      Firstly, welcome to <strong>Pen to Paper</strong> where you can write to your hearts content. To start a new note make sure to click on the <strong>New Note</strong> button in the top right hand corner of the screen. Note sure what to write about? Don't think, just write. Put <strong>Pen to Paper</strong>, or rather fingers to keyboard and write whatever comes to mind. 
                    </div>
                </article>
  </div>
      <div className="tile is-parent">
        <article className="message is-warning">
                    <div className="message-header">
                        <p>Create Notebooks To Better Organize Your Notes</p>
                        <button className="delete"></button>
                    </div>
                    <div className="message-body">
                    The best way to keep everything organized is by creating separate notebooks for each note that you write. To do this make sure to click on <strong>Notebooks</strong> in the left hand navigation bar and click on <strong>Add Notebook</strong>. You can create as many notebooks as you like in order keep your thoughts, stories, poems, ramblings, or grocery lists as neat as possible. 
                    </div>
                </article>
      </div>
    </div>
    <div className="tile is-parent">
      <article className="message is-danger">
                    <div className="message-header">
                        <p>Don't Forget To Add Tags</p>
                        <button className="delete"></button>
                    </div>
                    <div className="message-body">
                    You can add tags to your notes in order to make searching for them easier. When writing a new note make sure to add tags at the bottom in the <strong>Tags section</strong> that correlate to the topic being written. Like if you were writing about a dream you had you might use the tags <strong>#dream #sleep #rem #nightnight #zzzzzz #snooze</strong> That way in the future (say 6 months form now) it will make finding that specific note all the more easy to find. <strong> In conlucion Tags = good.</strong>
                    </div>
                </article>
    </div>
  </div>
  </div>
  }
}



export default Welcome