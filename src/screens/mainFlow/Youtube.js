import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { View, Text, Image, TouchableOpacity, Button, placeholder } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import Icon from 'react-native-vector-icons/AntDesign';
import { appImages } from '../../services'
import { NavigationContainer } from '@react-navigation/native';


class Youtube extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ height: height(8), width: width(100), backgroundColor: '#eb4034', marginTop: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name='clouddownload' size={40} color={'white'} />
                    <Text style={{ fontSize: 25, justifyContent: 'center', color: 'white' }}>downloadvideoz.com</Text>
                </View>
                <View style={{ height: height(50), width: width(90), alignSelf:'center',backgroundColor:'white', justifyContent: 'center', marginTop: 50, borderWidth:0.5 ,borderColor:'lightgrey' }}>
                    <View >
                        <Text style={{ fontSize: 25, justifyContent: 'center', color: 'black',textAlign:'center' }}>Download High Quailty Videos from YouTube</Text>
                        <Text style={{ fontSize: 12, justifyContent: 'center', color: 'black', marginTop: 20,textAlign:'center', marginLeft: 2 }}>Copy here the URL of your video (Youtube) OR Search anything you want!</Text>
                    </View>
                    <TextInput
                        placeholder=" Surch anything or paste a vedio link here.."
                        style={{ height: height(4), width: width(80), alignSelf: 'center',marginTop:20 ,borderColor: 'gray', borderWidth: 1 }}
                    />
                    <View style={{ height: height(5), width: width(80), backgroundColor: '#eb4034', marginTop: 20, alignSelf: 'center', borderRadius: 2 }}>
                        <Button
                            title="Start Searching"
                            color='white'
                            alignItems='center'
                            accessibilityLabel="Learn more about this purple button"
                        />
                    </View>
                    <Text style={{ fontSize: 15, justifyContent: 'center', color: 'black', textAlign:'center', marginTop:20 }}>By using our service you are accepting our<Text style={{ fontSize: 17, justifyContent: 'center', color: 'blue', textAlign:'center', marginTop:20 }}> terms of use. </Text> </Text>
                    <Text style={{ fontSize: 15, justifyContent: 'center', color: 'red', textAlign:'center', marginTop:20,textDecorationLine: 'underline', }}>Note: download of any Copyright content and Music videos is restricted.</Text>
                </View>
            </View>
        );
    }
}

export default Youtube;