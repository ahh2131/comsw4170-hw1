import React from 'react/addons';
import SpotifyTrack from './spotify-track';

class SpotifyResults extends React.Component {

  displayTracks() {
    return this.props.tracks.map((track, i) => {
      var key = i + ((this.props.page-1)*10);
      return (
        <SpotifyTrack
          key={key}
          track={track}
        />
      );
    });
  }

  displayNext() {
    var remaining = this.props.total - (this.props.page*10);
    if (remaining/10 >= 1) {
      return (
        <div onClick={this.props.next} className="next-button">
          Next >>
        </div>
      );
    }
  }

  displayPrevious() {
    if (this.props.page > 1) {
      return (
        <div onClick={this.props.previous} className="previous-button">
          Previous
        </div>
      );
    }
  }

  render() {
    return (
      <div className="results-container">
        {this.displayTracks()}
        <div className="results-footer">
          {this.displayPrevious()}
          {this.displayNext()}
        </div>
      </div>
    );
  }
}

export default SpotifyResults;
