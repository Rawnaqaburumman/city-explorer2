import React from 'react';
import Table from 'react-bootstrap/Table';

import 'bootstrap/dist/css/bootstrap.min.css';


class Weather extends React.Component {
    render() {
        return (
            <>


                <Table style={{ width: '60rem' }} bordered hover>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Description</th>
                        </tr>
                    </thead>


                    <tr>
                        <td>{this.props.weather[0].date}</td>
                        <td>{this.props.weather[0].description}</td>
                    </tr>
                    <tr>
                        <td>{this.props.weather[1].date}</td>
                        <td>{this.props.weather[1].description}</td>
                    </tr>     <tr>
                        <td>{this.props.weather[2].date}</td>
                        <td>{this.props.weather[2].description}</td>
                    </tr>
                    <tbody>

                        {this.props.weather.map((item) => {
                            return (
                                <tr>
                                    <td>{item.date}</td>
                                    <td>{item.description}</td>
                                </tr>
                            )
                        })}

                    </tbody>


                </Table>

            </>
        )
    }
}
export default Weather;