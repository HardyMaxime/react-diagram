import React, { Component } from 'react';
import Chart from './components/Chart/Chart'
import Form from './components/Form/Form'
import Select from './components/UI/Select/Select'

import './App.css'

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            inputContent: '',
            inputNumber: 0,
            inputBackgroundColor: '#fff',
            selectValue: '',
            selectValueToRemove: '',
            data: {
              labels: [],
              datasets: [{
                label: '# of Votes',
                data: [],
                backgroundColor: []
              }]
            },
            options: {
              title: {
                display: true,
                text: 'Custom Chart Title'
              },
              scales: {
                yAxes: [{
                  stacked: true,
                  ticks: {
                    beginAtZero: true,
                  }
                }]
              },
              animation : {
                onComplete: this.onAnimationCompleted
              }

            }
          }
    }

    onAnimationCompleted = () => {
      const link = document.querySelector('#btn-dw')
      const canvas = document.querySelector('.chartjs-render-monitor')
      link.addEventListener('click', () => {
        link.setAttribute('download', 'diagram.jpg');
        link.setAttribute('href', canvas.toDataURL("image/jpg").replace("image/jpg", "image/octet-stream"));
      })
    }


  onInputChangeHandler = (e) => {
    const content = e.target.value
      this.setState({
        inputContent : content
      })
  }
  onNumberChangeHandler = (e) => {
    const number = parseInt(e.target.value)
      this.setState({
        inputNumber: number
      })
  }

  handleChangeComplete = (color) => {
    this.setState({
      inputBackgroundColor: color.hex
    });
  }

  handleSelectChange = (e) => {
    this.setState({selectValue : e.target.value})
  }

  onChangeChartTitle = (e) => {
    this.setState({
      options : {
        title : {
          text: e.target.value
        }
      }
    })
  }


  onClickHandler = (e) => {
    e.preventDefault()
    this.setState(prevState => ({
      data: {
         ...prevState.data,
        labels: [...prevState.data.labels, this.state.inputContent],
        datasets : 
        [
          {
            ...prevState.data.datasets[0], 
            data: [...prevState.data.datasets[0].data, this.state.inputNumber],
            backgroundColor: [...prevState.data.datasets[0].backgroundColor, this.state.inputBackgroundColor]
          }
        ]
      }
    }))
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-align-center" >Diagram Editor</h1>
        <div className="row">
          <div className="row-diagram">
            <Chart type={this.state.selectValue} data={this.state.data} options={this.state.options} />
          </div>
          <div className="row-form">   
            <Select value={this.state.selectValue} change={this.handleSelectChange}>
                <option defaultValue>Select your diagram</option>
                <option value="pie">Pie</option>
                <option value="bar">Bar</option>
                <option value="line">Line</option>
                <option value="radar">Radar</option>
                <option value="doughnut">Doughnut</option>
                <option value="polar">Polar</option>
            </Select>
            <Form onInputChangeHandler={this.onInputChangeHandler} onNumberChangeHandler={this.onNumberChangeHandler} 
              background={this.state.inputBackgroundColor} complete={this.handleChangeComplete}
              click={this.onClickHandler} onChangeChartTitle={this.onChangeChartTitle}
              onChangeCheckBox={this.onChangeCheckBoxHandler} checkBoxValue={this.state.checkBox} / >

             
          </div>
        </div>
      </div>
    );
  }
}

export default App;
