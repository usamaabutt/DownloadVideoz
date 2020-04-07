import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { View, Text, Image, TouchableOpacity, Button, placeholder, ScrollView } from 'react-native';
import { width, height, } from 'react-native-dimension';
import Icon from 'react-native-vector-icons/AntDesign';
import { appImages } from '../../../services'
import { SearchBar } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
// import { styles } from './loginStyles';


class SelectedManue extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            categories: [{ name: 'Tamato', isOpen: false }, { name: 'Abc', isOpen: false }, { name: 'Chips', isOpen: false }, { name: 'Drink', isOpen: false }, { name: 'water', isOpen: false }, { name: 'Wavy', isOpen: false }, { name: 'Biryani', isOpen: false }, { name: 'Rice', isOpen: false }],
            dishes: [{ name: 'Tamato', isOpen: false }, { name: 'Abc', isOpen: false }, { name: 'Chips', isOpen: false }, { name: 'Drink', isOpen: false }]
        }
    }

    handleClick = (item) => {
        const { categories } = this.state;
        // console.log('[handleClick func]', item);
        // console.log('============================================================');
        this.state.categories.forEach(obj => {
            // console.log('[handleClick forEach]', obj);
            if (item.name == obj.name) {
                // obj.isOpen = true
                obj.isOpen = !obj.isOpen
                // console.log('[handleClick forEach Match]', obj);
                // console.log('[handleClick forEach]', this.state.arr);
            }
            else {
                obj.isOpen = false;
            }
            this.setState({ categories })
        });
    }

    card = (item, key) => {
        return (
            <View key={key}>
                <TouchableOpacity style={{ height: height(6), width: width(70), zIndex: 2, backgroundColor: '#fff', shadowOpacity: 0.1, borderRadius: 10, alignSelf: 'center', marginTop: 10, alignItems: 'center', flexDirection: 'row' }}
                    onPress={() => this.handleClick(item)}
                >
                    <View style={{ width: width(45) }}>
                        <Image source={appImages.fooditems} style={{ height: height(5), width: width(15), resizeMode: 'contain', marginLeft: 20 }} />
                    </View>
                    <View style={{ width: width(15), alignItems: 'flex-start' }}>
                        <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>{item.name}</Text>
                    </View>
                    <Image source={appImages.nextBtn} style={{ height: height(5), width: width(5), resizeMode: 'contain' }} />
                </TouchableOpacity>
                {
                    item.isOpen == true ?
                        <View style={{ width: width(80), borderRadius: 10, backgroundColor: 'lightgrey', alignSelf: 'center', zIndex: 1, marginTop: -25 }}>
                            <View
                                style={{ marginBottom: height(5) }}>
                                {
                                    this.state.dishes.map((item, key) => {
                                        return (
                                            this.itemCard(item, key)
                                        )
                                    })
                                }
                            </View>
                        </View>
                        :
                        null
                }
            </View>
        )
    }
    itemCard = (item, key) => {
        return (
            <View key={key} style={{ height: height(4), width: width(80), marginTop: 40, flexDirection: 'row' }}>
                <View style={{ height: height(4), width: width(8), alignItems: 'flex-start', justifyContent: 'center', }}>
                    <Image source={appImages.fav} style={{ height: height(5), width: width(4), resizeMode: 'contain', alignSelf: 'center' }} />
                </View>
                <View style={{ height: height(4), width: width(35), alignItems: 'flex-start', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 12, color: 'black', fontWeight: 'normal', textAlign: 'center' }}>TOMATENSUPPE </Text>
                    <Text style={{ fontSize: 12, color: '#99cc00', fontWeight: 'normal', textAlign: 'center' }}>Indische Tomatensuppe</Text>
                </View>
                <View style={{ height: height(4), width: width(15), alignItems: 'flex-start', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', textAlign: 'center' }}> 3.99</Text>
                </View>
                <View style={{ height: height(4), width: width(25), flexDirection: 'row' }}>
                    <TouchableOpacity style={{ height: height(4), width: width(8), justifyContent: 'center' }}>
                        <Image source={appImages.minus} style={{ height: height(5), width: width(6), resizeMode: 'contain', alignSelf: 'center' }} />
                    </TouchableOpacity>
                    <View style={{ height: height(4), width: width(4), justifyContent: 'center' }}>
                        <Text style={{ fontSize: 18, color: '#fff', fontWeight: 'normal', textAlign: 'center' }}>0</Text>
                    </View>
                    <TouchableOpacity style={{ height: height(4), width: width(8), justifyContent: 'center' }}>
                        <Image source={appImages.add} style={{ height: height(5), width: width(6), resizeMode: 'contain', alignSelf: 'center' }} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View>
                    <View style={{ height: height(23), width: width(100), backgroundColor: '#99cc00', borderBottomLeftRadius:40,borderBottomRightRadius:40 ,zIndex:2}}>
                        <Text style={{ fontSize: 15, color: '#ffff', fontWeight: 'bold', fontStyle: 'italic', textAlign: 'center', marginTop: 70 }}>1 item added to cart</Text>
                        <Text style={{ fontSize: 20, color: '#ffff', fontWeight: 'bold', fontStyle: 'italic', textAlign: 'center', marginTop: 10 }}>Subtotal: <Text style={{ fontSize: 30, color: '#ffff', fontWeight: 'bold', fontStyle: 'italic', textAlign: 'center', marginTop: 10 }}>      3.90</Text></Text>
                        <Text style={{ fontSize: 12, color: '#ffff', fontWeight: 'normal', fontStyle: 'italic', textAlign: 'center', marginTop: 10 }}>View Cart</Text>
                        <TouchableOpacity style={{ height: height(3), width: width(7), alignSelf: 'center', justifyContent: 'center', marginTop: 3, }}>
                            <Image source={appImages.downarrow} style={{ width: width(6), resizeMode: 'contain', color: '#f2f2f2' }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: height(80), width: width(100), backgroundColor: '#f2f2f2', shadowOpacity: 0.1,  zIndex: 1, marginTop:-35 }}>
                        <Text style={{ fontSize: 30, color: 'black', fontWeight: 'normal', textAlign: 'center', marginTop: 40 }}>MENÜ</Text>
                        <SearchBar
                            placeholder="Find a Food"
                            containerStyle={{ height: height(4), width: width(80), backgroundColor: 'lightgrey', alignSelf: 'center', marginTop: 20, borderRadius: 30, justifyContent: 'center' }}
                            platform='android'
                            value={this.state.search}
                            onChangeText={(value) => {
                                this.setState({ search: value })
                            }}
                            inputStyle={{ fontSize: 15, }}
                            placeholderTextColor='black'
                            showLoading={false}
                        />
                        <Text style={{ fontSize: 12, color: 'black', fontWeight: 'normal', textAlign: 'center', marginTop: 20, marginBottom: height(2) }}>WAHLEN SIE IHREN ARTIKEL <Text style={{ fontSize: 10, color: 'grey', fontWeight: 'normal', textAlign: 'center', marginTop: 20 }}>            139 items</Text></Text>

                        <ScrollView
                            style={{ marginBottom: height(5) }}>
                            {
                                this.state.categories.map((item, key) => {
                                    return (this.card(item, key))
                                })
                            }
                        </ScrollView>
                    </View>
                </View>
            </View>
        );
    }
}

export default SelectedManue;