import React from 'react';
import ReactDOM from 'react-dom';
import { CopyCat } from '../components/CopyCat'

const images = {
  copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
  quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
};


class CopyCatContainer extends React.Component {
    constructor(props) {
    super(props);

    this.state = { 
      copying: true
      input: []
    }

    this.toggleTape = this.toggleTape.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    setState({...this.state, input: e.target.value})
  }

  toggleTape() {
    this.setState({copying: !this.state.copying})
  }
  
  render() {
    const copying = this.state.copying;
    const toggleTape = this.toggleTape
    
    return (<CopyCat copying={this.state.copying} toggleTape={toggleTape} input={this.state.input} handleChange={handleChange}/>);
  };
}


ReactDOM.render(<CopyCatContainer />, document.getElementById('app'));
