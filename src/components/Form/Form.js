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
              <input className="form-control" type="text" name="" placeholder="Add data" onChange={props.onInputChangeHandler} />
              <input className="form-control" type="number" onChange={props.onNumberChangeHandler} placeholder="Choose a number" name="" />
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
    onChangeChartTitle: PropTypes.func.isRequired,
    onInputChangeHandler: PropTypes.func.isRequired,
    onNumberChangeHandler: PropTypes.func.isRequired,
    click: PropTypes.func.isRequired,
    background: PropTypes.string.isRequired,
    complete: PropTypes.func.isRequired
}


export default form
