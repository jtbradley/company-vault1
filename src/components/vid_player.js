import React, { Component } from 'react';
import Player from '@vimeo/player';
import MediaNav from './media_nav';
import MediaTitle from './media_title';
const playVid = (e) => {
  e.preventDefault();
  console.log('vid played!');
  player.play();
}

const player = new Player('handstick', {
    id: 195714685,
    width: 640,
});

const next = () =>{
  this.setState({vidTitle: 'TITLE changed through click event!'})
};

player.on('play', function() {
    console.log('played the video!');
    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });
});

class VidPlayer extends Component {
constructor(props) {
  super(props);

  this.state = { vidID: '76979871',
vidTitle: "LOREM title, just need ID 4 API"};
}

  render() {
    return (
      <div>
      <MediaTitle name={this.state.vidTitle}/>
      <MediaNav next={() => this.setState({vidTitle: 'TITLE changed through click event!'})} play={playVid}/>
      </div>
    );
  }
}

export default VidPlayer;
