import React from 'react/addons';
import axios from 'axios';
import config from '../../../config/app';
import SpotifySearch from './spotify-search';
/*
* @class AppRoot
* @extends React.Component
*/
class AppRoot extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Spotify",
      inputs:{
        artist: "",
        track: "",
        album: "",
        year: "",
        genre: ""
      },
      advanced: false,
    };
  }

  shouldComponentUpdate () {
    return React.addons.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
  }

  handleAdvanced() {
    if (this.state.advanced) {
      this.setState({
        advanced: !this.state.advanced,
        inputs: {
          track: "",
          year: "",
          genre: "",
          album: "",
          artist: this.state.inputs.artist
        }
      })
    } else {
      this.setState({
        advanced: !this.state.advanced
      });
    }
  }

  handleInputChange(type, evt) {
    var obj = Object.assign({}, this.state);
    obj.inputs[type] = evt.target.value;
    this.setState(obj.inputs);
  }

  handleButtonClick() {
    console.log(this.state);
  }
  /*
  * @method render
  * @returns {JSX}
  */
  render () {
    return (
      <div className="spotify-search-container">
        <SpotifySearch
          inputs={this.state.inputs}
          handleAdvanced={this.handleAdvanced.bind(this)}
          handleInputChange={this.handleInputChange.bind(this)}
          handleButtonClick={this.handleButtonClick.bind(this)}
          advanced={this.state.advanced}
         />
      </div>
    );
  }
}


export default AppRoot;
