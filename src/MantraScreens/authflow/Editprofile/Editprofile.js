import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { View, Text, Image, TouchableOpacity, ImageBackground, placeholder, ScrollView } from 'react-native';
import { width, height, } from 'react-native-dimension';
import { appImages } from '../../../services'
// import { styles } from './loginStyles';


class Editprofile extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <ScrollView style={{ flex: 1 }}>
                <View style={{ height: height(100), width: width(100), backgroundColor: '#f2f2f2', }}>
                    <View style={{ height: height(2), width: width(30), backgroundColor: 'transparant', alignSelf: 'flex-end', alignContent: 'center', marginTop: 60 }}>
                        <Image source={appImages.headerlinegreen} style={{ width: width(25), marginVertical: 6 }} />
                    </View>
                    <View style={{ height: height(4), width: width(90), backgroundColor: 'transparant', alignSelf: 'center', }}>
                        <Text style={{ fontSize: 25, color: '#99cc00', fontWeight: 'bold', textAlign: 'right', marginVertical: 5 }}>Edit Profile</Text>
                    </View>
                    <View style={{ height: height(12), width: width(30), borderRadius: 10, backgroundColor: 'lightgrey', bottom: -40, zIndex: 2, alignSelf: 'center', alignContent: 'flex-end', borderWidth: 2, borderColor: 'white', justifyContent: 'center' }}>
                        <ImageBackground source={appImages.testProfile} style={{ height: height(10), width: width(18), resizeMode: 'contain', alignSelf: 'center', alignItems: 'flex-end' }}>
                            <View style={{ height: height(5), width: width(11), borderRadius: 100, backgroundColor: '#99cc00', zIndex: 3, right: -40, bottom: -60, justifyContent: 'center', borderWidth: 2, borderColor: 'white' }}>
                                <Image source={appImages.CameraIcon} style={{ height: height(3), width: width(10), resizeMode: 'contain', alignSelf: 'center' }} />
                            </View>
                        </ImageBackground>
                    </View>

                    <View style={{ height: height(60), width: width(80), zIndx: 1, alignSelf: 'center', borderRadius: 10, backgroundColor: '#fff', shadowOpacity: 2, shadowColor: 'lightgrey' }}>
                        <View style={{ borderColor: 'lightgrey', borderBottomWidth: 1, width: width(55), marginTop: 50, alignSelf: 'center' }}>
                            <TextInput
                                style={{ height: height(7), fontSize: 13 }}
                                placeholder='Full Name'
                                placeholderTextColor='lightgrey'
                                keyboardType='default'
                            />
                        </View>
                        <View style={{ borderColor: 'lightgrey', borderBottomWidth: 1, width: width(55), alignSelf: 'center' }}>
                            <TextInput
                                style={{ height: height(7), fontSize: 13 }}
                                placeholder='Email'
                                placeholderTextColor='lightgrey'
                                keyboardType='email-address'
                            />
                        </View>
                        <View style={{ borderColor: 'lightgrey', borderBottomWidth: 1, width: width(55), alignSelf: 'center' }}>
                            <TextInput
                                style={{ height: height(7), fontSize: 13 }}
                                placeholder='Phone'
                                placeholderTextColor='lightgrey'
                                keyboardType='phone-pad'
                            />
                        </View>
                        <View style={{ borderColor: 'lightgrey', borderBottomWidth: 1, width: width(55), alignSelf: 'center', flexDirection: 'row' }}>
                            <TextInput
                                style={{ height: height(7), fontSize: 13 }}
                                placeholder='Location'
                                placeholderTextColor='lightgrey'
                                keyboardType='default'
                            />
                        </View>
                        <View style={{ borderColor: 'lightgrey', borderBottomWidth: 1, width: width(55), alignSelf: 'center', flexDirection: 'row', alignItems: 'center' }}>
                            <TextInput
                                style={{ height: height(7), fontSize: 13 }}
                                placeholder='Change Password'
                                placeholderTextColor='lightgrey'
                                keyboardType='phone-pad'
                            />
                            <TouchableOpacity style={{ height: height(3), width: width(20), borderRadius: 10, marginLeft: 30 }}>
                                <Text style={{ fontSize: 12, color: 'black', fontWeight: 'bold', textAlign: 'center', marginTop: 5 }}>Tap Here</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ borderColor: 'lightgrey', borderBottomWidth: 1, width: width(55), alignSelf: 'center', flexDirection: 'row', alignItems: 'center', marginTop: 80 }}>
                            <TextInput
                                style={{ height: height(7), fontSize: 13 }}
                                placeholder='Change Password'
                                placeholderTextColor='lightgrey'
                                keyboardType='phone-pad'
                            />
                            <TouchableOpacity style={{ height: height(3), width: width(8), borderRadius: 10, marginLeft: 30, flexDirection: 'row', }}>
                                <Image source={appImages.fbicon} style={{ height: height(3), width: width(8), resizeMode: 'contain', alignSelf: 'center' }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ height: height(3), width: width(8), borderRadius: 10, marginLeft: 3, flexDirection: 'row', }}>
                                <Image source={appImages.whatsapp} style={{ height: height(3), width: width(8), resizeMode: 'contain', alignSelf: 'center' }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ height: height(3), width: width(8), borderRadius: 10, marginLeft: 3, flexDirection: 'row', }}>
                                <Image source={appImages.twitter} style={{ height: height(3), width: width(8), resizeMode: 'contain', }} />
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default Editprofile;