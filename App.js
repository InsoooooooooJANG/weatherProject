import React from 'react';
import Loading from './Loading';
import * as Location from 'expo-location';
import { Alert } from 'react-native';
import axios from 'axios';
import Weather from "./Weather";

const API_KEY="69df311ee77cc5593f78c86342047d99";

export default class extends React.Component {
  state = {
    isLoading :true
  };
  getWeather = async(latitude, longitude)=>{
    const {
      data:{
        main:{temp},
        weather
      }
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    console.log(weather[0].main);
    this.setState({isLoading:false, condition : weather[0].main,  temp});
  }
  getLocation = async() => {
    try{
      const response =await Location.requestPermissionsAsync();
      const {
        coords:{latitude, longitude}
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    }catch(error){
      Alert.alert('test');
    }
  }
  componentDidMount(){
    this.getLocation();
  }
  render(){
    const {isLoading, condition,  temp} = this.state;
    return isLoading ? <Loading/> : <Weather temp={Math.round(temp)} condition={condition}></Weather>;
  }
}
