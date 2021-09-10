import React from 'react';
import Table from 'react-bootstrap/Table';

import 'bootstrap/dist/css/bootstrap.min.css';


class Weather extends React.Component {
    render() {
        return (
            <>
<h2> Weather status in city</h2>

                <Table style={{width: '40rem', position:"absolute", top:"200px"}} striped bordered hover variant="dark" size="sm">
                    
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Description</th>
                        </tr>
                    </thead>

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