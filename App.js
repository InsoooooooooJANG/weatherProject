import React from 'react';
import Loading from './Loading';
import * as Location from 'expo-location';
import { Alert } from 'react-native';
import axios from 'axios';

const API_KEY="69df311ee77cc5593f78c86342047d99";

export default class extends React.Component {
  state = {
    isLoading :true
  };
  getWeather = async(latitude, longitude)=>{
    const {data} = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    );
    console.log(data);
  }
  getLocation = async() => {
    try{
      const response =await Location.requestPermissionsAsync();
      const {
        coords:{latitude, longitude}
      } = await Location.getCurrentPositionAsync();
      console.log(latitude, longitude);
      this.getWeather(latitude, longitude);
      //this.setState ({isLoading:false});
    }catch(error){
      Alert.alert('test');
    }
  }
  componentDidMount(){
    this.getLocation();
  }
  render(){
    const {isLoading} = this.state;
    return isLoading ? <Loading/> : null;
  }
}
