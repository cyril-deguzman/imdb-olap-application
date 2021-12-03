import React, {Component} from 'react';
import './assets/styles/App.css';

import BarChart from './components/BarChart'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      maleCount: [],
      femaleCount: [],
    };
  }

  componentDidMount() {
    
  }
  
  render() {
    return (
      <div className="container">
        <BarChart data={this.state.data}/>;
      </div>
    );
  }
};
