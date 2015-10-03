import React from 'react/addons';
import SpotifyTrack from './spotify-track';

class SpotifyResults extends React.Component {

  displayTracks() {
    return this.props.tracks.map((track, i) => {
      return (
        <SpotifyTrack
          key={i+this.props.page}
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

  render() {
    return (
      <div className="results-container">
        {this.displayTracks()}
        <div className="results-footer">
          {this.displayNext()}
        </div>
      </div>
    );
  }
}

export default SpotifyResults;
