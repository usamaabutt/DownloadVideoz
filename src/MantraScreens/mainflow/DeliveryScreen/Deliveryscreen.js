import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { View, Text, Image, TouchableOpacity, Button, placeholder, } from 'react-native';
import { width, height, } from 'react-native-dimension';
import { appImages } from '../../../services'
// import { styles } from './loginStyles';


class Deliveryscreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ height: height(100), width: width(100), backgroundColor: '#f2f2f2', }}>
                    <View style={{ height: height(8), width: width(90), backgroundColor: 'transparant', marginTop: 60, alignSelf: 'center' }}>
                        <Text style={{ fontSize: 25, color: '#99cc00', fontWeight: 'bold', textAlign: 'right', marginVertical: 5 }}>Lieferdetails</Text>
                        <Text style={{ fontSize: 12, color: 'black', fontWeight: 'normal', textAlign: 'right', marginVertical: 5 }}>Please Enter your Delivery Details</Text>
                    </View>
                    <View style={{height:height(10),width:width(22), borderRadius:100,backgroundColor:'transparant',bottom:-40,zIndex:2,alignSelf:'center',alignContent:'flex-end'}}>
                    <Image source={appImages.deliveryRiderImage} style={{ height: height(8),position:'absolute', width: width(15), resizeMode: 'contain', alignSelf: 'center' }} />
                    </View>
                    <View style={{ height: height(50), width: width(80), zIndex:1, alignSelf: 'center', borderRadius: 10, backgroundColor: 'white',shadowOpacity:3,shadowColor:'lightgrey' }}>
                        <View style={{ height: height(4), width: width(70), backgroundColor: 'transparant', marginTop: 20, flexDirection: 'row', }}>
                            <Image source={appImages.name} style={{ height: height(2), width: width(15), resizeMode: 'contain', alignSelf: 'center' }} />
                            <View style={{ borderColor: '#99cc00', borderBottomWidth: 1, width: width(55) }}>
                                <TextInput
                                    style={{ height: height(3), fontSize: 15 }}
                                    placeholder='Name'
                                    placeholderTextColor='#99cc00'
                                    keyboardType='default'
                                />
                            </View>
                        </View>
                        <View style={{ height: height(4), width: width(70), backgroundColor: 'transparant', marginTop: 20, flexDirection: 'row', }}>
                            <Image source={appImages.email} style={{ height: height(2), width: width(15), resizeMode: 'contain', alignSelf: 'center' }} />
                            <View style={{ borderColor: '#99cc00', borderBottomWidth: 1, width: width(55) }}>
                                <TextInput
                                    style={{ height: height(3), fontSize: 15 }}
                                    placeholder='Email'
                                    placeholderTextColor='#99cc00'
                                    keyboardType='email-address'
                                />
                            </View>
                        </View>
                        <View style={{ height: height(4), width: width(70), backgroundColor: 'transparant', marginTop: 20, flexDirection: 'row', }}>
                            <Image source={appImages.phone} style={{ height: height(2), width: width(15), resizeMode: 'contain', alignSelf: 'center' }} />
                            <View style={{ borderColor: '#99cc00', borderBottomWidth: 1, width: width(55) }}>
                                <TextInput
                                    style={{ height: height(3), fontSize: 15 }}
                                    placeholder='Contact Number'
                                    placeholderTextColor='#99cc00'
                                    keyboardType='number-pad'
                                />
                            </View>
                        </View>
                        <View style={{ height: height(3), width: width(50), backgroundColor: 'transparant', marginTop: 30, alignSelf: 'center' }}>
                            <Text style={{ fontSize: 13, textAlign: 'center', color: '#99cc00', fontWeight: 'bold' }}>Delivery Address</Text>
                        </View>
                        <View style={{ height: height(4), width: width(70), backgroundColor: 'transparant', marginTop: 20, flexDirection: 'row', }}>
                            <Image source={appImages.phone} style={{ height: height(2), width: width(15), resizeMode: 'contain', alignSelf: 'center' }} />
                            <View style={{ borderColor: '#99cc00', borderBottomWidth: 1, flexDirection: 'row' }}>
                                <TextInput
                                    style={{ height: height(3), fontSize: 15 ,  width: width(55)}}
                                    placeholder='Location'
                                    placeholderTextColor='#99cc00'
                                    keyboardType='default'
                                />
                                <Image source={appImages.gps} style={{ height: height(2), width: width(4), resizeMode: 'contain', alignSelf: 'center', }} />
                            </View>
                        </View>
                        <View style={{ height: height(4), width: width(70), marginTop: 20, flexDirection: 'row',alignSelf:'center' }}>
                            <View style={{ borderColor: '#99cc00', borderBottomWidth: 1, width: width(25),marginLeft:40 }}>
                                <TextInput
                                    style={{ height: height(3), fontSize: 15 }}
                                    placeholder='200092'
                                    placeholderTextColor='#99cc00'
                                    keyboardType='numeric'
                                />
                            </View>
                            <View style={{ borderColor: '#99cc00', borderBottomWidth: 1, width: width(25),marginLeft:25 }}>
                                <TextInput
                                    style={{ height: height(3), fontSize: 15 }}
                                    placeholder='dacota'
                                    placeholderTextColor='#99cc00'
                                    keyboardType='default'
                                />
                            </View>
                        </View>
                        <View style={{height:height(5),width:width(40),backgroundColor:'#99cc00',justifyContent:'center', borderRadius:10, marginTop:35,alignSelf:'center',}}>
                        <Text style={{ fontSize: 15, textAlign: 'center', color: 'white', }}>Submit</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={{ height: height(5), width: width(40), borderRadius: 20,alignItems:'center', borderColor: '#99cc00', borderWidth: 1.5, marginTop:30, alignSelf:'center' }}>
                            <Text style={{ fontSize: 12, color: '#99cc00', fontWeight: 'bold',marginTop:15 }}>Sign in / Sign up</Text>
                        </TouchableOpacity>
                    <View style={{ height: height(7), width: width(100), justifyContent: 'center', flexDirection: 'row', backgroundColor: 'transparant', alignItems: 'center', marginTop: 30, }}>
                        <TouchableOpacity style={{ height: height(5), width: width(40), borderRadius: 20, borderWidth: 1.5, borderColor: '#003399', flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontSize: 12, color: '#003399',marginHorizontal:5 }}>Continuoue with facebook</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ height: height(5), width: width(40), flexDirection: 'row', borderRadius: 20, borderColor: 'red', borderWidth: 1.5, alignItems: 'center', marginLeft: 20 }}>
                            <Text style={{ fontSize: 12, color: 'red',marginHorizontal:10 }}>Continuoue with Google</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

export default Deliveryscreen;