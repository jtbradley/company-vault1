import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MediaPlayer from './components/media_player';

class App extends Component {
  render() {
    return(
<div>

<MediaPlayer />
  </div>
      );
  }
}


// Take this components rendered HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
