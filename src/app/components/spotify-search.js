import React from 'react/addons';
import TextInput from './text-input';
import AdvancedForm from './advanced-form';
class SpotifySearch extends React.Component {

  shouldComponentUpdate () {
    return React.addons.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
  }

  displayForm() {
    if (this.props.advanced) {
      return (
        <AdvancedForm
          handleInputChange={this.props.handleInputChange}
          inputs={this.props.inputs}
         />
      );
    } else {
      return (
        <TextInput
         type="artist"
         name="Search by Artist"
         placeholder="e.g. Kanye West, Lorde, Diplo"
         onChange={this.props.handleInputChange}
         value={this.props.inputs.artist}
        />
      );
    }
  }

  displayToggle() {
    if (this.props.advanced) {
      return (
        <a href="#" onClick={this.props.handleAdvanced}>Less advanced</a>
      );
    } else {
      return (
        <a href="#" onClick={this.props.handleAdvanced}>Advanced</a>
      );
    }
  }

  getSearchHeight() {
    if (this.props.advanced) {
      return {
        height: "347px"
      };
    }
  }

  render () {
    return (
      <div className="spotify-search">
        <h1>Spotify</h1>
        <div style={this.getSearchHeight()} className="search-container">
          {this.displayForm()}
          <div className="advanced-container">
            {this.displayToggle()}
          </div>
          <div className="button-container">
            <div onClick={this.props.handleButtonClick} className="button">
              <span>SEARCH</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default SpotifySearch;
