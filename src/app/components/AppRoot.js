import React from 'react/addons';
import axios from 'axios';
import config from '../../../config/app';
import SpotifySearch from './spotify-search';
import SpotifyResults from './spotify-results';
import 'babel-core/polyfill';


/*
* @class AppRoot
* @extends React.Component
*/
class AppRoot extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputs:{
        artist: "",
        track: "",
        album: "",
        year: "",
        genre: ""
      },
      advanced: false,
      page: 1,
      items: [],
      total: 0
    };
  }

  shouldComponentUpdate () {
    return React.addons.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
  }

  buildUrl(page) {
    var base = "https://api.spotify.com/v1/search?type=track&q=";
    var suffix = "";
    Object.keys(this.state.inputs).map(key => {
      if (this.state.inputs[key] != "") {
        suffix = suffix.concat(key + ":" + this.state.inputs[key] + "%20");
      }
    });
    var full_url = base.concat(suffix + "&limit=10" + "&offset=" + ((page*10)-10));
    return full_url;
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
    this.setState({page: 1});
    var value = false;
    Object.keys(this.state.inputs).map(key => {
      if (this.state.inputs[key] != "") {
        value = true;
      }
    });
    if (value) {
      var url = this.buildUrl(1);
      axios.get(url)
      .then((res) => {
        this.setState({
          items: res.data.tracks.items,
          total: res.data.tracks.total
        })
      });
    }
  }

  pageGet(page) {
    var value = false;
    Object.keys(this.state.inputs).map(key => {
      if (this.state.inputs[key] != "") {
        value = true;
      }
    });
    if (value) {
      var url = this.buildUrl(page);
      axios.get(url)
      .then((res) => {
        this.setState({
          items: res.data.tracks.items,
          total: res.data.tracks.total,
          page: page
        })
      });
    }
  }

  next() {
    this.pageGet(this.state.page+1);
    window.scrollBy(0, -4000);
  }

  previous() {
    this.pageGet(this.state.page-1);
    window.scrollBy(0, -4000);
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
       <SpotifyResults
         tracks={this.state.items}
         page={this.state.page}
         total={this.state.total}
         next={this.next.bind(this)}
         previous={this.previous.bind(this)}
       />
      </div>
    );
  }
}


export default AppRoot;
