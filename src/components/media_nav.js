import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class MediaNav extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return(
      <div>

      <button className="next-btn btn btn-primary" onClick={this.props.next}>
        NEXT
      </button>
      <button className="play-btn btn btn-success" onClick={this.props.play}>
        PLAY
      </button>
      </div>
  );
}
}

export default MediaNav;
