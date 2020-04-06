import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { View, Text, Image, TouchableOpacity, Button, placeholder, } from 'react-native';
import { width, height,  } from 'react-native-dimension';
import Icon from 'react-native-vector-icons/AntDesign';
import { appImages } from '../../../services'
import { NavigationContainer } from '@react-navigation/native';
import { styles } from './splashStyles';


class Splash extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{height: height(100), width: width(100),backgroundColor: 'red',justifyContent:'center',}}>
                    <Image source={appImages.splash} style={{ height:height(100), width:width(100) }} />
                </View>
            </View>
        );
    }
}

export default Splash;