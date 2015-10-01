import React from 'react/addons';

class SpotifyResults extends React.Component {

  displayTracks() {
    return this.props.tracks.map((track, i) => {
      return (
        <div key={i} className="track-container">
          <div className="album-cover">
          </div>
          <div className="track-header">
            {track.name}
          </div>
          <div className="track-player">
          </div>
        </div>
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
