import React from 'react/addons';
import TextInput from './text-input';
class AdvancedForm extends React.Component {
  render() {
    return (
      <div className="advanced-form-container">
        <div className="advanced-form-inputs">
          <div className="form-row">
            <TextInput
             name="Search by Artist"
             placeholder="Type an artist name"
             type="artist"
             onChange={this.props.handleInputChange}
             value={this.props.inputs.artist}
            >
            </TextInput>
            <TextInput
             name="Search by Song"
             placeholder="Type a song name"
             type="track"
             onChange={this.props.handleInputChange}
             value={this.props.inputs.track}
            >
            </TextInput>
          </div>
          <div className="form-row">
            <TextInput
               name="Search by Album"
               placeholder="Type an album name"
               type="album"
               onChange={this.props.handleInputChange}
               value={this.props.inputs.album}
              >
            </TextInput>
            <TextInput
             name="Search by Genre"
             placeholder="Type a genre"
             type="genre"
             onChange={this.props.handleInputChange}
             value={this.props.inputs.genre}
            >
            </TextInput>
          </div>
          <div className="form-row">
            <TextInput
              name="Search by Year"
              placeholder="Enter a year"
              onChange={this.props.handleInputChange}
              type="year"
              value={this.props.inputs.year}
            />
          <TextInput
            name="hidden"
            visibility="hidden"
            onChange={this.props.handleInputChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default AdvancedForm;
