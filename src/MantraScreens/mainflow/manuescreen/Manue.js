import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { View, Text, Image, TouchableOpacity, Button, placeholder, ScrollView } from 'react-native';
import { width, height, } from 'react-native-dimension';
import Icon from 'react-native-vector-icons/AntDesign';
import { appImages } from '../../../services'
import { SearchBar } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
// import { styles } from './loginStyles';


class Manue extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            arr: [{ name: 'Tamato' }, { name: 'Abc' }, { name: 'Chips' }, { name: 'Drink' }, { name: 'water' }, { name: 'Wavy' }, { name: 'Biryani' }, { name: 'Rice' }]
        }
    }
    card = (item, key) => {
        return (
            <TouchableOpacity style={{ height: height(6), width: width(80), backgroundColor: '#fff', shadowOpacity: 0.1, borderRadius: 10, alignSelf: 'center', marginTop: 10, alignItems: 'center', flexDirection: 'row' }}>
                <View style={{ width: width(55) }}>
                    <Image source={appImages.fooditems} style={{ height: height(5), width: width(15), resizeMode: 'contain', marginLeft: 20 }} />
                </View>
                <View style={{ width: width(15), alignItems: 'flex-start' }}>
                    <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>{item.name}</Text>
                </View>
                <Image source={appImages.nextBtn} style={{ height: height(5), width: width(5), resizeMode: 'contain' }} />
            </TouchableOpacity>
        )
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View 
                    style={{ backgroundColor: '#f2f2f2', zIndex: 1 }}
                    >
                    <View style={{ height: height(25), width: width(100), backgroundColor: '#99cc00', }}>
                        <Text style={{ fontSize: 25, color: '#ffff', fontWeight: 'bold', fontStyle: 'italic', textAlign: 'right', marginRight: 20, marginTop: 70 }}>Was möchten</Text>
                        <Text style={{ fontSize: 25, color: '#ffff', fontWeight: 'bold', fontStyle: 'italic', textAlign: 'right', marginRight: 20, marginTop: 5 }}>Not Logged in Yet ?</Text>
                    </View>
                    <View style={{ height: height(80), width: width(100), backgroundColor: '#f2f2f2', shadowOpacity: 0.1, borderTopRightRadius: 40, borderTopLeftRadius: 40, zIndex: 2, marginTop: -35 }}>
                        <Text style={{ fontSize: 30, color: 'black', fontWeight: 'normal', textAlign: 'center', marginTop: 40 }}>MENÜ</Text>
                        <SearchBar
                            placeholder="Find a Food"
                            containerStyle={{ height: height(5), width: width(80), backgroundColor: 'lightgrey', alignSelf: 'center',marginTop:20, borderRadius: 30, justifyContent: 'center' }}
                            platform='android'
                            value={this.state.search}
                            onChangeText={(value) => {
                                this.setState({ search: value })
                            }}
                            inputStyle={{ fontSize: 15, }}
                            placeholderTextColor='black'
                            showLoading={false}
                        />
                        <Text style={{ fontSize: 15, color: 'black', fontWeight: 'normal', textAlign: 'center', marginTop: 20, marginBottom: height(2) }}>WAHLEN SIE IHREN ARTIKEL <Text style={{ fontSize: 12, color: 'grey', fontWeight: 'normal', textAlign: 'center', marginTop: 20 }}>            139 items</Text></Text>
                        <ScrollView
                            style={{ marginBottom: height(5)}}>
                            {
                                this.state.arr.map((item, key) => {
                                    return (
                                        this.card(item, key)
                                    )
                                }) 
                            }
                        </ScrollView>
                    </View>
                </View>
            </View>
        );
    }
}

export default Manue;