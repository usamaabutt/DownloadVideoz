import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { View, Text, Image, TouchableOpacity, Button, placeholder, } from 'react-native';
import { width, height, } from 'react-native-dimension';
import Icon from 'react-native-vector-icons/AntDesign';
import { appImages } from '../../../services'
import { NavigationContainer } from '@react-navigation/native';
// import { styles } from './loginStyles';


class Signin extends Component {
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
                        <Text style={{ fontSize: 25, color: 'grey', fontWeight: 'bold', fontStyle: 'italic', textAlign: 'right', marginVertical: 10 }}>Sign in</Text>
                    </View>
                    <View style={{ alignSelf: 'center' }}>
                        <Text style={{ fontSize: 30, color: '#99cc00', textAlign: 'center', marginTop: 70, fontWeight: 'bold', fontStyle: 'normal' }}> Welcome Back Foodie ! </Text>
                    </View>
                    <View style={{ height: height(5), width: width(90), backgroundColor: 'transparant', marginTop: 70, alignSelf: 'center', flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={appImages.name} style={{ height: height(2), width: width(15), resizeMode: 'contain', alignSelf: 'center' }} />
                        <View style={{ borderColor: '#99cc00', borderBottomWidth: 1, width: width(70) }}>
                            <TextInput
                                style={{ height:height(4), fontSize: 16 }}
                                placeholder='Email'
                                placeholderTextColor='#99cc00'
                            />
                        </View>
                    </View>

                    <View style={{ height: height(5), width: width(90), backgroundColor: 'transparant', marginTop: 20, alignSelf: 'center', flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={appImages.lock} style={{ height: height(2), width: width(15), resizeMode: 'contain', }} />
                        <View style={{ borderColor: '#99cc00', borderBottomWidth: 1, width: width(70), flexDirection: 'row' }}>
                            <TextInput
                                style={{ height:height(4), width: width(60), fontSize: 16 }}
                                placeholder='Password'
                                placeholderTextColor='#99cc00'
                                secureTextEntry={true}
                            />
                            <Image source={appImages.eye} style={{ height: height(2), width: width(15), resizeMode: 'contain', alignSelf: 'center', }} />
                        </View>
                    </View>
                    <TouchableOpacity style={{ height: height(3), width: width(50), backgroundColor: 'transparant', marginTop: 10, alignSelf: 'flex-end' }}>
                        <Text style={{ fontSize: 13, textAlign: 'center', color: 'grey' }}>forgot your Password?</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={{ flexDirection: 'row', height: height(5), width: width(40), alignSelf: 'flex-end', alignItems: 'center', justifyContent: 'center', marginRight:50, borderBottomStartRadius: 100, borderTopStartRadius: 100, borderWidth: 1.5, backgroundColor: 'black', marginTop: 150 }}>
                        <Text style={{ fontSize: 20, color: 'white', textAlign: 'center' }}>SING IN</Text>
                        <Image source={appImages.right} style={{ height: height(3), width: width(15), resizeMode: 'contain', }}></Image>
                    </TouchableOpacity>


                    <View style={{ height: height(7), width: width(100), justifyContent: 'center', flexDirection: 'row', backgroundColor: 'transparant', alignItems: 'center', marginTop: 30,}}>
                        <TouchableOpacity style={{ height: height(5), width: width(35), borderRadius: 15, borderWidth: 1.5, borderColor: '#003399', flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={appImages.fbicon} style={{ height: height(2.5), width: width(15), resizeMode: 'contain', }} />
                            <Text style={{ fontSize: 14, color: '#003399', textAlign: 'center', fontWeight: 'bold' }}>facebook</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ height: height(5), width: width(35), flexDirection: 'row', borderRadius:15, borderColor: 'red', borderWidth: 1.5, alignItems: 'center',marginLeft:20 }}>
                            <Image source={appImages.gicon} style={{ height: height(2.5), width: width(13), resizeMode: 'contain', }} />
                            <Text style={{ fontSize: 14, color: 'red', fontWeight: 'bold', }}>Google</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

export default Signin;