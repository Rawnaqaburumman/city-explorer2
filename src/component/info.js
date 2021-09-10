import React from 'react';
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';

class Info extends React.Component {

  render() {
    return (
      <>
      
      <div style ={{position:"absolute" ,left:"970px" , top:"180px"}}>
      <h2> Location Information </h2>
        <Card className="ListR" style={{ width: '22rem', fontWeight:"bolder" }}>
          <Card.Img variant="top" src={this.props.imageData} />
          <Card.Body>
            <Card.Title>  City Name:  {this.props.locationData.display_name}</Card.Title>
            <Card.Text>  Latitude:  {this.props.locationData.lat}
            </Card.Text>
            <Card.Text> Longitude:  {this.props.locationData.lon}
            </Card.Text>

          </Card.Body>
        </Card>
      </div>
      </>
    );
  }
}

export default Info;