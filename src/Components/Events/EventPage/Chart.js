import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: props.chartData
        }
    }

    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'left',
        location: 'City'
    }

    render() {
        return (
            <div className="chart">
                <Bar
                    data={this.state.chartData}
                    options={{


                        title: {
                            display: this.props.displayTitle,
                            text: '  ' + this.props.location,
                            position: 'bottom',
                            fontSize: 25
                        },
                        legend: {
                            display: false,
                            position: 'top',
                            labels: {
                                fontColor: 'rgb(0, 0, 0)',
                                fontSize: 25
                            }
                        },
                        scales: {

                            yAxes: [{

                                ticks: {
                                    min: 0,
                                    max: 150
                                }
                            }],



                        }

                    }}

                />


            </div>
        )
    }
}

export default Chart;