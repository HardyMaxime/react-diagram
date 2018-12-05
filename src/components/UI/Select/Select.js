import React from 'react';
import PropTypes from 'prop-types'

import './Select';
 
const select = props => (
        <select style={{marginTop:0}}  value={props.value} onChange={props.change} className="form-control">
                {props.children}
        </select>
    )
 
select.propTypes = {
    value : PropTypes.string.isRequired,
    change : PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
}

export default select;