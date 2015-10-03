import React from 'react/addons';

class SpotifyTrack extends React.Component {

  displayTitle() {

  }

  render() {
    return (
      <div className="track-container">
        <div className="album-cover">
          <img src={this.props.track.album.images[0].url}/>
        </div>
          <div className="track-header">
            {this.props.track.name}
          </div>
        <div className="track-player">
          <audio src={this.props.track.preview_url}/>
            <audio controls>
              <source src={this.props.track.preview_url+".mp3"} type="audio/mpeg"/>
              Your browser does not support the audio element.
            </audio>
        </div>
      </div>
    )
  }
}

export default SpotifyTrack;
