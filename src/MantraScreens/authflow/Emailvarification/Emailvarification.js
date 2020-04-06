import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { View, Text, Image, TouchableOpacity, ImageBackground, placeholder, ScrollView } from 'react-native';
import { width, height, } from 'react-native-dimension';
import { appImages } from '../../../services'
// import { styles } from './loginStyles';


class Emailvarification extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView style={{ height: height(100), width: width(100), backgroundColor: '#f2f2f2', }}>
                    <View style={{ height: height(2), width: width(30), backgroundColor: 'transparant', alignSelf: 'flex-end', alignContent: 'center', marginTop: 60 }}>
                        <Image source={appImages.blackline} style={{ width: width(25), marginVertical: 6 }} />
                    </View>
                    <View style={{ height: height(4), width: width(90), backgroundColor: 'yellow', alignSelf: 'center', }}>
                        <Text style={{ fontSize: 25, color: 'black', fontWeight: 'bold', textAlign: 'right', marginVertical: 5 }}>Please Verify Email</Text>
                    </View>
                    <View style={{ height: height(20), width: width(45), borderRadius: 10, backgroundColor: '#f2f2f2', justifyContent: 'center', alignSelf: 'center', marginTop: 70 }}>
                        <Image source={appImages.checkemail} style={{ width: width(35), resizeMode: 'contain', alignSelf: 'center' }} />
                    </View>
                    <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', textAlign: 'center', marginTop: 30 }}>Confirm Your Email address</Text>
                    <Text style={{ fontSize: 13, color: 'grey', textAlign: 'center', marginTop: 50 }}> We have sent a Confirmation Email to:</Text>
                    <Text style={{ fontSize: 15, color: 'black', textAlign: 'center', marginTop: 10 }}>thomas_muller@gmail.com</Text>
                    <Text style={{ fontSize: 13, color: 'grey', textAlign: 'center', marginTop: 30 }}>Check your Email and tap on the</Text>
                    <Text style={{ fontSize: 13, color: 'grey', textAlign: 'center', marginTop: 5 }}>confirmation link to continuoue.</Text>
                    <TouchableOpacity style={{ height: height(4), width: width(60), alignSelf: 'center', borderRadius: 100, backgroundColor: '#99cc00', marginTop: 40 }}>
                        <Text style={{ fontSize: 20, color: 'white', textAlign: 'center', justifyContent: 'center', marginVertical: 5 }}>Sign up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ height: height(4), width: width(60), alignSelf: 'center', borderRadius: 100, borderWidth: 1.5, backgroundColor: 'transparant', borderColor: '#99cc00', marginTop: 10 }}>
                        <Text style={{ fontSize: 20, color: '#99cc00', textAlign: 'center', justifyContent: 'center', marginVertical: 5}}> Log in</Text>
                    </TouchableOpacity>

                </ScrollView>
            </View>
        );
    }
}

export default Emailvarification;