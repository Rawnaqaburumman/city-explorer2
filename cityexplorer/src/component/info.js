import React from 'react';
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';

class Info extends React.Component {

  render(){
    return(
 <div>
<Card className="ListR" style={{ width: '18rem' }}>
<Card.Img variant="top" src={this.props.imageData}/>
  <Card.Body>
    <Card.Title> The City Name : {this.props.locationData.display_name}</Card.Title>
    <Card.Text> Here the latitude  :{this.props.locationData.lat}
    </Card.Text>
    <Card.Text> Here the  longitude  :{this.props.locationData.lon}
    </Card.Text>
  
  </Card.Body>
</Card>
 </div>
    );
  }
}

export default Info;