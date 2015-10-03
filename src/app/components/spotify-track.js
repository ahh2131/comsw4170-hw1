import React from 'react/addons';

class SpotifyTrack extends React.Component {

  displayTitle() {
    if (this.props.track.name.length > 50) {
      return this.props.track.name.slice(0, 45) + "...";
    } else {
      return this.props.track.name;
    }
  }

  render() {
    console.log(this.props.track);
    return (
      <div className="track-container">
        <div className="album-cover">
          <img src={this.props.track.album.images[0].url}/>
        </div>
          <div className="track-header">
            <p>{this.displayTitle()}</p>
            <br/>
            <span>{this.props.track.artists[0].name}</span>
          </div>
        <div className="track-player">
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
