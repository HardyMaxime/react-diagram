import React from 'react'
import {
    TwitterPicker
} from 'react-color';
import PropTypes from 'prop-types'

import './Form.css'

const form = props => {
    return (
       <form action="#" >
              <input className="form-control" type="text" name="" placeholder="Custom Chart Title" onChange={props.onChangeChartTitle} />
              <input className="form-control" value={props.inputContentValue} type="text" name="" placeholder="Add data" onChange={props.onInputChangeHandler} />
              <input className="form-control" value={props.inputNumberValue} type="number" onChange={props.onNumberChangeHandler} placeholder="Choose a number" name="" />
              <div className="form-picker">
                <TwitterPicker color={ props.background }
                  onChangeComplete={ props.complete } 
                /> 
              </div>
              <button style={{display: 'inline-block'}} className="btn btn-primary" onClick={props.click} >Add data</button>
               <a className="btn btn-primary" id="btn-dw" >Generate diagram (jpg)</a>
        </form>
    )
}

form.propTypes = {
    onChangeChartTitle: PropTypes.func,
    onInputChangeHandler: PropTypes.func,
    onNumberChangeHandler: PropTypes.func,
    click: PropTypes.func,
    background: PropTypes.string,
    complete: PropTypes.func,
    inputContentValue: PropTypes.string,
    inputNumberValue: PropTypes.number
}


export default form
