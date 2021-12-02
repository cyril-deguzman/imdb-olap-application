import React, {Component} from 'react';
import './assets/styles/App.css';
import ChartService from './services/ChartService'
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
    ChartService.getSampleData()
      .then((res) => {
        const result = res.data
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      })
  }
  
  render() {
    return (
      <div className="container">
        <BarChart data={this.state.data}/>;
      </div>
    );
  }
};
