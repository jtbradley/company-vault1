import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import VidPlayer from './vid_player';

class MediaPlayer extends Component {
  constructor() {
    super();

  }
  render() {
    return(
<div>
<VidPlayer />

  </div>
      );
  }
}

export default MediaPlayer;
