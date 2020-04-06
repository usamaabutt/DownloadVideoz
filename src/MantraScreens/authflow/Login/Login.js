import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { View, Text, Image, TouchableOpacity, Button, placeholder, } from 'react-native';
import { width, height, } from 'react-native-dimension';
import Icon from 'react-native-vector-icons/AntDesign';
import { appImages } from '../../../services'
import { NavigationContainer } from '@react-navigation/native';
// import { styles } from './loginStyles';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ height: height(100), width: width(100), backgroundColor: '#f2f2f2', }}>
                    <View style={{ height: height(6), width: width(90), backgroundColor: 'transparant', marginTop: 60, alignSelf: 'center' }}>
                        <Text style={{ fontSize: 25, color: 'grey', fontWeight: 'bold', fontStyle: 'italic', textAlign: 'right', marginVertical: 10 }}>Not Logged in Yet ?</Text>
                    </View>
                    <View style={{ height: height(35), width: width(100), backgroundColor: 'transparant  ', justifyContent: 'center', marginTop: 15 }}>
                        <Image source={appImages.logo} style={{ height: height(30), width: width(100), resizeMode: 'contain' }} />
                    </View>
                    <Text style={{ fontSize: 15, color: 'grey', textAlign: 'center', marginTop: 10 }}> Be our Guest and log in to get started</Text>
                    <View style={{ alignSelf: 'center', }}>
                        <Text style={{ fontSize: 25, color: 'black', textAlign: 'center', marginVertical: 5, fontWeight: 'bold', fontStyle: 'italic' }}> WELCOME TO MANTRA</Text>
                        <Image source={appImages.welcomeline} style={{ height: height(3), width: width(50), resizeMode: 'contain', alignSelf: 'center' }} />
                    </View>
                    <TouchableOpacity style={{ height: height(5), width: width(60), alignSelf: 'center', borderRadius: 100, borderWidth: 1.5, backgroundColor: 'transparant', borderColor: '#99cc00', marginTop: 30 }}>
                        <Text style={{ fontSize: 20, color: '#99cc00', textAlign: 'center', justifyContent: 'center', marginVertical: 10 }}> Log in</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ height: height(5), width: width(60), alignSelf: 'center', borderRadius: 100, backgroundColor: '#99cc00', marginTop: 10 }}>
                        <Text style={{ fontSize: 20, color: 'white', textAlign: 'center', justifyContent: 'center', marginVertical: 10 }}>Sign up</Text>
                    </TouchableOpacity>
                    <View style={{ height: height(7), width: width(100), justifyContent: 'center', flexDirection: 'row', backgroundColor: 'transparant', alignItems: 'center', marginTop: 20 }}>
                        <TouchableOpacity style={{ height: height(5), width: width(40), alignSelf: 'center', borderRadius: 15, borderWidth: 1.5, backgroundColor: 'transparant', borderColor: '#003399', flexDirection: 'row' }}>
                            <Image source={appImages.fbicon} style={{ height: height(4), width: width(15), resizeMode: 'contain', alignSelf: 'center' }} />
                            <Text style={{ fontSize: 20, color: '#003399', textAlign: 'center', justifyContent: 'center', marginVertical: 8, fontWeight: 'bold' }}>facebook</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ height: height(5), width: width(40), alignSelf: 'center', flexDirection: 'row', borderRadius: 15, backgroundColor: 'transparant', marginLeft: 15, borderColor: 'red', borderWidth: 1.5 }}>
                            <Image source={appImages.gicon} style={{ height: height(4), width: width(15), resizeMode: 'contain', alignSelf: 'center' }} />
                            <Text style={{ fontSize: 20, color: 'red', fontWeight: 'bold', textAlign: 'center', justifyContent: 'center', marginVertical: 8 }}>Google</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        );
    }
}

export default Login;