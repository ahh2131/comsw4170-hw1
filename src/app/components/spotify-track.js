import React from 'react/addons';

class SpotifyTrack extends React.Component {
  render() {
    return (
      <div className="track-container">
        <div className="album-cover">
        </div>
          <div className="track-header">
            {this.props.track.name}
          </div>
        <div className="track-player">
        </div>
      </div>
    )
  }
}

export default SpotifyTrack;
