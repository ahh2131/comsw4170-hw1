import React from 'react/addons';
import SpotifyTrack from './spotify-track';

class SpotifyResults extends React.Component {

  displayTracks() {
    return this.props.tracks.map((track, i) => {
      return (
        <SpotifyTrack
          key={i}
          track={track}
        />
      );
    });
  }

  render() {
    return (
      <div className="results-container">
        {this.displayTracks()}
      </div>
    );
  }
}

export default SpotifyResults;
