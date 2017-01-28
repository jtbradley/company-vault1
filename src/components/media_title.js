import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class MediaTitle extends Component {
constructor(props) {
  super(props);
}

  render() {
    return (
      <div className="media-title">
    <h2>{this.props.name}</h2>

      </div>
    );
  }
/*
  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  };*/
}


export default MediaTitle;
