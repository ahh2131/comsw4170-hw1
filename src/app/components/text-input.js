import React from 'react/addons';

class TextInput extends React.Component {

  getVisibility() {
    if (this.props.visibility) {
      return {
        visibility: "hidden"
      };
    }
  }


  render() {
    return (
      <div style={this.getVisibility()} className="input-container">
        <h2>{this.props.name}</h2>
        <input
         onChange={this.props.onChange.bind(null, this.props.type)}
         type="text"
         placeholder={this.props.placeholder}
         defaultValue=""
         value={this.props.value}
        />
      </div>
    );
  }

}

export default TextInput;
