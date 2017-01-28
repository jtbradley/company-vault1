import React, { Component } from 'react';
import Player from '@vimeo/player';


const player = new Player('handstick', {
    id: 195714685,
    width: 640
});

player.on('play', function() {
    console.log('played the video!');
});

class VidPlayer extends Component {

constructor(props) {
  super(props);

  this.state = { vidID: '76979871'};
}

  render() {
    return (
      <div>
    <h5></h5>
      </div>
    );
  }
}

export default VidPlayer;
