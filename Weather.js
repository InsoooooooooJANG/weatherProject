import React from "react";
import {StyleSheet, Text, View, StatusBar} from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Clouds:{
        iconName:"weather-cloudy",
        gradient:["#000000", "#434343"],
        title:"Cloudy",
        subtitle:"Don't wear sunglasses"
    },
    Thunderstorm:{
        iconName:"weather-lightning",
        gradient:["#000000", "#434343"],
        title:"Cloudy",
        subtitle:"Don't wear sunglasses"
    },
    Drizzle:{
        iconName:"weather-rainy",
        gradient:["#000000", "#434343"],
        title:"Cloudy",
        subtitle:"Don't wear sunglasses"
    },
    Rain:{
        iconName:"weather-pouring",
        gradient:["#000000", "#434343"],
        title:"Cloudy",
        subtitle:"Don't wear sunglasses"
    },
    Snow:{
        iconName:"weather-snowy",
        gradient:["#000000", "#434343"],
        title:"Cloudy",
        subtitle:"Don't wear sunglasses"
    },
    Clear:{
        iconName:"weather-sunny",
        gradient:["#000000", "#434343"],
        title:"Cloudy",
        subtitle:"Don't wear sunglasses"
    }
}

export default function Weather({temp, condition}){
    return (
            <LinearGradient
                colors={weatherOptions[condition].gradient}
                style={styles.container}
                >
                    <StatusBar barStyle="light-content"/>
                <View style={styles.halfContainer}>
                    <MaterialCommunityIcons size={96} name={weatherOptions[condition].iconName} color="white"></MaterialCommunityIcons>
                    <Text style={styles.temp}>{temp}°</Text>
                </View>
                <View style={{...styles.halfContainer, ...styles.textcontainer}}>
                    <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                    <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
                </View> 
            </LinearGradient>
    );
}

Weather.propTypes = {
    temp : PropTypes.number.isRequired,
    condition: PropTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Clear", "Clouds"]).isRequired
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent : "center",
        alignItems:"center"
    },
    temp:{
        fontSize:42,
        color:"white"
    },
    halfContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    title:{
        color: "white",
        fontSize: 44,
        fontWeight:"300",
        marginBottom: 10
    },
    subtitle:{
        fontWeight:"600",
        color: "white",
        fontSize:24
    },
    textcontainer:{
        paddingHorizontal:20,
        alignItems:"flex-start"
    }
})