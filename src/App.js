import React from 'react';
import Theform from './component/form';
import Info from './component/info';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert'
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './component/weather';
import Move from './component/movies';
import Header from './component/header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationName: "",
      data: "",
      locationData: {},
      maps_show: false,
      location_show: false,
      showMessage: false,
      message: '',
      imageData: "",
      weather_show: false,
      weatherInfo: {},
      movies_show: false,
      moviesInfo: []

    }
  }

  handleName = (name) => {

    this.setState({
      locationName: name

    })
    console.log(this.state.locationName);
    this.takeData(name);
  }

  takeData = async (name) => {


    const url = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&q=${name}&format=json`
    console.log(url)
    const ServerUrl = process.env.REACT_APP_SERVER_URL

    const weatherUrl = `${ServerUrl}/weather?city_name=${name.toLowerCase()}`;
    console.log(weatherUrl);

    const url2 = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&center=${this.state.locationData.lat},${this.state.locationData.lon}&zoom=17&format=jpg`
    console.log(url2);

    const moviesUrl = `${ServerUrl}/movie?city_name=${name.toLowerCase()}`;
    console.log(moviesUrl)





    try {



      let response = await axios.get(url);
      console.log(response.data);
      
      let weatherData = await axios.get(weatherUrl);
      console.log(weatherData)
      let moviesData = await axios.get(moviesUrl);
      // const responsetwo = await axios.get(url2);
      console.log(moviesData);




      this.setState({
        locationData: response.data[0],
        location_show: true,
        weatherInfo: weatherData.data,
        maps_show: true,
        weather_show: true,
        moviesInfo: moviesData.data,
        movies_show: true,
        error: false,

      });


console.log(this.state.moviesInfo);
    }


    catch (err) {
      console.log("there is an error")

      this.setState({
        maps_show: false,
        error: true,
        weather_show: false,
        movies_show: false,

      });

    }
  }


  render() {
    return (
      <div>


        <Header/>
        {
          this.state.showMessage &&

          <Alert variant="dark" style={{ width: "50%" }}>
            {this.state.message}
          </Alert>
        }



        <Theform handleName={this.handleName} />
        {




          this.state.location_show &&
          <Info locationData={this.state.locationData}
            imageData={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&center=${this.state.locationData.lat},${this.state.locationData.lon}&zoom=17&format=jpg`}

          />
        }
        {
          this.state.weather_show &&
          <Weather
            weather={this.state.weatherInfo}
            cityName={this.state.locationName}
          />
        }



        {


           this.state.movies_show &&
          <Move
          moviesInfo={this.state.moviesInfo}
            locationName={this.state.locationName}

          />
        }









      </div>
    );
  }
}

export default App;
