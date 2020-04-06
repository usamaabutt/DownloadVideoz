import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { View, Text, Image, TouchableOpacity, ImageBackground, placeholder, ScrollView } from 'react-native';
import { width, height, } from 'react-native-dimension';
import { appImages } from '../../../services'
import { SearchBar } from 'react-native-elements';

// import { styles } from './loginStyles';


class Editprofile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            arr: [{ name: 'Suppen1', number: 1 }, { name: 'Suppen2', number: 2 }, { name: 'Suppen3', number: 3 }, { name: 'Suppen4', number: 4 }, { name: 'Suppen5', number: 5 }, { name: 'Suppen6', number: 6 }, { name: 'Suppen7', number: 7 }, { name: 'Suppen8', number: 8 }, { name: 'Suppen9', number: 9 }, { name: 'Suppen10', number: 10 }],
        }
    }
    card(items, key) {
        // console.log("card is receiving", key)
        return (
            <View key={key} style={{ height: height(12), width: width(90), borderWidth: 1, borderColor: 'lightgrey', borderRadius: 5, marginBottom: height(2), justifyContent: 'center', alignSelf: 'center' }}>
                <View style={{ height: height(3), width: width(50), marginLeft: 36 }}>
                    <Text style={{ fontSize: 15, color: '#99cc00', fontWeight: 'normal', textAlign: 'left', justifyContent: 'center' }}>{items.name}<Text style={{ fontSize: 15, color: '#99cc00', fontWeight: 'bold', justifyContent: 'center' }}></Text></Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ height: height(6), width: width(9), alignItems: 'flex-start', justifyContent: 'center' }}>
                        <Image source={appImages.heart} style={{ height: height(5), width: width(6), alignSelf: 'center', resizeMode: 'contain' }} />
                    </View>
                    <View style={{ height: height(6), width: width(45), justifyContent: 'center' }}>
                        <Text style={{ fontSize: 17, color: 'black', fontWeight: 'normal', textAlign: 'left' }}>TOMATENSUPPE </Text>
                        <Text style={{ fontSize: 15, color: '#99cc00', fontWeight: 'normal', textAlign: 'left' }}>Indische Tomatensuppe</Text>
                    </View>
                    <View style={{ height: height(5), width: width(15), alignItems: 'flex-start', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>{items.number}</Text>
                    </View>
                    <View style={{ height: height(4), width: width(25), flexDirection: 'row' }}>
                        <View style={{ height: height(4), width: width(8), justifyContent: 'center' }}>
                            <Image source={appImages.minus} style={{ height: height(5), width: width(7), resizeMode: 'contain', alignSelf: 'center' }} />
                        </View>
                        <View style={{ height: height(4), width: width(4), justifyContent: 'center' }}>
                            <Text style={{ fontSize: 18, color: 'black', fontWeight: 'normal', textAlign: 'center' }}>0</Text>
                        </View>
                        <View style={{ height: height(4), width: width(8), justifyContent: 'center' }}>
                            <Image source={appImages.add} style={{ height: height(5), width: width(7), resizeMode: 'contain', alignSelf: 'center' }} />
                        </View>
                    </View>
                </View>
            </View>
        )
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ height: height(100), width: width(100), backgroundColor: '#f2f2f2', }}>
                    <View style={{ marginTop: 50 }}>
                        <SearchBar
                            placeholder="Find a Food"
                            containerStyle={{ height: height(5), width: width(80), backgroundColor: 'lightgrey', alignSelf: 'center', marginTop: 20, borderRadius: 30, justifyContent: 'center' }}
                            platform='android'
                            value={this.state.search}
                            onChangeText={(value) => {
                                this.setState({ 
                                    search: value
                                },()=>{
                                    console.log('reder func setState===:', this.state.search);
                                })
                            }}
                            inputStyle={{ fontSize: 15, }}
                            placeholderTextColor='black'
                            keyboardType='default'
                        />
                    </View>
                    <ScrollView>
                        <View style={{width: width(90), borderColor: 'lightgrey', borderRadius: 5, marginTop: 30, marginBottom: height(2),justifyContent: 'center', alignSelf: 'center' }}>
                            {
                                this.state.arr.map((items, key) => {
                                    return (this.card(items, key))
                                })
                            }
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

export default Editprofile;

//map function applies on arr.
// it has two parameters (),
//fat arrow 
//return