import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Player from '@vimeo/player';
import MediaTitle from './media_title';
const playVid = (e) => {
  e.preventDefault();
  console.log('vid played!');
  player.play();
}

class MediaNav extends Component {
  constructor() {
    super();
    this.state = {
      vidTitle: "LOREM title, just need ID 4 API"
    };
  }

  render() {
    return(
      <div>
      <MediaTitle name={this.state.vidTitle}/>
      <button className="next-btn btn btn-primary" onClick={() => this.setState({vidTitle: 'TITLE changed through click event!'})}>
        NEXT
      </button>
      <button className="play-btn btn btn-success" onClick={playVid()} >
        PLAY
      </button>
      </div>
  );
}
}

export default MediaNav;
