import React from 'react';
import Theform from './component/form';
import Info from './component/info';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert'
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './component/weather'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationName: '',
      locationData: {},
     locationDetail: false,
      showMessage: false,
      message: '',
      imageData:"",
      weather: false,
      weatherInfo: {}
    
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
const ServerUrl =process.env.REACT_APP_SERVER_URL



const weatherUrl = `${ServerUrl}/weather?city_name=${this.state.locationName.toLowerCase()}`;
console.log(weatherUrl);
      let response = await axios.get(url);

      console.log( ServerUrl);
       const serverResponse = await axios.get(ServerUrl);
       console.log(serverResponse);
      let weatherData = await axios.get(weatherUrl);

      console.log(response.data);
      this.setState({
        locationData: response.data[0],
        locationDetail: true,
        message: '',
        message: false,
        weatherInfo: weatherData.data,
        weather: true,
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
        locationDetail: false,
        weather: false,

      });
      console.log(this.state.message);
    }
  }


  render() {
    return (
      <div>
        {
          this.state.showMessage &&

          <Alert variant="dark" style ={{width:"50%"}}>
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
        {
         this.state.weather &&
                        <Weather
                        weather={this.state.weatherInfo}
                       cityName= {this.state.locationName}
                        />
         }
        
      </div>
    );
  }
}

export default App;
