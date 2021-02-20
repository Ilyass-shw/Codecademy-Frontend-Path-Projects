import React from 'react';
import CopyCat from './CopyCat';

const images = {
  copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
  quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
};


class CopyCatContainer extends React.Component {
    constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.state = { 
      copying: true,
      input: '',
    };

    this.toggleTape = this.toggleTape.bind(this);
  }

  toggleTape() {
    this.setState({copying: !this.state.copying})
  }

  handleChange(e){
    this.setState({input: e.target.value});
  }
  
  render() {
    const copying = this.state.copying;
    const toggleTape = this.toggleTape
    
    return (
      <div>
        <CopyCat copying={copying}  toggleTape={toggleTape} input={this.state.input} handleChange={this.handleChange} />
      </div>
    );
  };
}

export default CopyCatContainer;
