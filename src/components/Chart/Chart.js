import React from 'react';
import {
    Pie,
    Bar,
    Line,
    Radar,
    Doughnut,
    Polar
} from 'react-chartjs-2'
import PropTypes from 'prop-types'


 const chart = props => {
    switch (props.type) {
            case 'pie':
                return <Pie id="pie" data={props.data}
                    options={props.options} />
            case 'bar':
                return <Bar data={props.data}
                    options={props.options} />
            case 'line':
                return <Line data={props.data}
                    options={props.options} />
            case 'radar':
                return <Radar data={props.data}
                    options={props.options} />
            case 'doughnut':
                return <Doughnut data={props.data}
                    options={props.options} />
            case 'polar':
                return <Polar data={props.data}
                    options={props.options} />
            default:
                return <Pie data={props.data}
                        options={props.options} />
        }
}

export default chart;

chart.propTypes = {
    data: PropTypes.object.isRequired,
    options: PropTypes.object.isRequired
}

