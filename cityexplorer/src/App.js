import React from 'react';
import Theform from './component/form';
import Info from './component/info';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationName: '',
      locationData: {},
     locationDetail: false,
      showMessage: false,
      message: '',
      imageData:""
    }
  }

  handleName = async (name) => {
    await this.setState({
      locationName: name
    })
    console.log(this.state.locationName);
    this.takeData();
  }

  takeData = async () => {
    try {
   
    const url = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&q=${this.state.locationName}&format=json`
console.log(url)
      let response = await axios.get(url);
      console.log(response.data[0]);
      this.setState({
        locationData: response.data[0],
        locationDetail: true,
        message: '',
        message: false
      });
    




 const url2 = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&center=${[this.state.locationData.lat,this.state.locationData.lon]}&zoom=17&format=jpg`
    console.log(url2);
   const responsetwo = await axios.get(url2);
  console.log(responsetwo);
    
this.setState(
    {
         imageData:responsetwo.request.responseURL
        
     });


    }



    catch (err) {
      
      this.setState({
        showMessage: true,
        message: err.message,
        locationDetail: false

      });
      console.log(this.state.message);
    }
  }


  render() {
    return (
      <div>
        {
          this.state.showMessage &&

          <Alert variant="dark">
            {this.state.message}
          </Alert>
        }
        <Theform handleName={this.handleName} />
        {
          this.state.locationDetail &&
          <Info locationData={this.state.locationData}
          imageData={this.state.imageData}
          
          />
        }
      </div>
    );
  }
}

export default App;
