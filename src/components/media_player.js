import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import VidPlayer from './vid_player';
import MediaNav from './media_nav';

class MediaPlayer extends Component {
  constructor() {
    super();

  }
  render() {
    return(
<div>
<MediaNav />

  </div>
      );
  }
}


export default MediaPlayer;
