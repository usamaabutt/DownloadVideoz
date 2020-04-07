import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { View, Text, Image, TouchableOpacity, Button, placeholder, } from 'react-native';
import { width, height, } from 'react-native-dimension';
import { appImages } from '../../../services'
// import { styles } from './loginStyles';


class Payment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: [{name:'tomatensuppe'}, {name:'Dal-Sharba'}]

        }
    }

    card = (item, key) => {
        return (
            <View style={{ height: height(4), width: width(90), marginTop: 5, flexDirection: 'row', }}>
                <View style={{ height: height(4), width: width(25), flexDirection: 'row', }}>
                    <TouchableOpacity style={{ height: height(4), width: width(8), justifyContent: 'center' }}>
                        <Image source={appImages.add} style={{ width: width(5), resizeMode: 'contain', height: height(2), alignSelf: 'center' }} />
                    </TouchableOpacity>
                    <View style={{ height: height(4), width: width(8), alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#99cc00', }}> 1 </Text>
                    </View>
                    <TouchableOpacity style={{ height: height(4), width: width(8), alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={appImages.minus} style={{ width: width(5), resizeMode: 'contain', height: height(2), alignSelf: 'center' }} />
                    </TouchableOpacity>
                </View>
                <View style={{ height: height(4), width: width(40), justifyContent: 'center' }}>
                    <Text style={{ fontSize: 20, color: 'black', fontWeight: 'normal', textAlign: 'left', }}>{item.name}</Text>
                </View>
                <View style={{ height: height(4), width: width(25), justifyContent: 'center' }}>
                    <Text style={{ fontSize: 20, color: 'black', fontWeight: 'normal', textAlign: 'right', }}>$ 3.90</Text>
                </View>
            </View>

        )
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ height: height(100), width: width(100), backgroundColor: '#f2f2f2', }}>
                    <View style={{ height: height(2), width: width(50), alignSelf: 'flex-end', justifyContent: 'center', marginTop: 60, alignContent: 'center' }}>
                        <Image source={appImages.headerlinegreen} style={{ height: height(0.5), width: width(40) }} />
                    </View>
                    <View style={{ height: height(8), width: width(90), backgroundColor: 'transparant', marginTop: 5, alignSelf: 'center' }}>
                        <Text style={{ fontSize: 25, color: '#99cc00', fontWeight: 'bold', textAlign: 'right', marginVertical: 5 }}>Zahlungsmethode</Text>
                        <Text style={{ fontSize: 12, color: 'black', fontWeight: 'normal', textAlign: 'right', marginVertical: 5 }}>Select Payment Method</Text>
                    </View>
                    <View style={{ height: height(40), width: width(90), alignSelf: 'center', backgroundColor: '#f2f2f2' }}>

                        {
                            this.state.arr.map((item, key) => {
                                return (this.card(item, key))
                            })
                        }
                        <View style={{ height: height(3), width: width(70), alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={appImages.fullblackline} style={{ width: width(70), resizeMode: 'contain', }} />
                        </View>
                        <View style={{ height: height(4), width: width(90), alignItems: 'center', flexDirection: 'row' }}>
                            <View style={{ height: height(4), width: width(60), justifyContent: 'center' }}>
                                <Text style={{ fontSize: 15, color: '#99cc00', textAlign: 'center' }}>Remarks: <Text style={{ fontSize: 15, color: 'black', textAlign: 'center' }}>Dont Add Chillies</Text></Text>
                            </View>
                            <View style={{ height: height(4), width: width(30), justifyContent: 'center'}}>
                                <Image source={appImages.editscreen} style={{ height: height(2), width: width(5), alignSelf: 'flex-end', resizeMode: 'contain' }} />
                            </View>
                        </View>
                        <View style={{ height: height(22), width: width(90) }}>
                            <View style={{ height: height(16), width: width(90) }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ height: height(16), width: width(60) }}>
                                        <Text style={{ fontSize: 20, fontWeight: 'normal', color: 'grey', marginVertical: 2 }}> Total Cart Items </Text>
                                        <Text style={{ fontSize: 20, fontWeight: 'normal', color: 'grey', marginVertical: 2 }}> Cart Total </Text>
                                        <Text style={{ fontSize: 20, fontWeight: 'normal', color: 'grey', marginVertical: 2 }}> Delivery </Text>
                                        <Text style={{ fontSize: 20, fontWeight: 'normal', color: 'grey', marginVertical: 2 }}> Promo Discount </Text>
                                        <Text style={{ fontSize: 20, fontWeight: 'normal', color: 'grey', marginVertical: 2 }}> Additional Amount </Text>
                                    </View>
                                    <View style={{ height: height(16), width: width(30), alignItems: 'flex-end' }}>
                                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'grey', marginVertical: 2 }}> 2 </Text>
                                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'grey', marginVertical: 2 }}> $ 7.90 </Text>
                                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'grey', marginVertical: 2, }}> Free </Text>
                                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'grey', marginVertical: 2, }}> - </Text>
                                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'grey', marginVertical: 2, }}> $ 6.90</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ height: height(1), width: width(70), alignSelf: 'center', alignItems: 'center', justifyContent: 'center', marginTop: 5}}>
                                <Image source={appImages.blackline} style={{ width: width(70), resizeMode: 'contain', }} />
                            </View>
                            <View style={{ height: height(5), width: width(90), flexDirection: 'row', marginTop:10 }}>
                                <View style={{ height: height(5), width: width(60)}}>
                                    <Text style={{ fontSize: 20, fontWeight: 'normal', color: 'grey', marginVertical: 2 }}> SubTotal </Text>
                                </View>
                                <View style={{ height: height(5), width: width(30), alignItems: 'flex-end' }}>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'grey', marginVertical: 2, }}> $7.90</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{height:height(4), width:width(50), alignSelf:'flex-end', justifyContent:'center'}}>
                    <Text style={{ fontSize: 15, fontWeight: 'normal', color: 'black' }}> Choose how you want to pay </Text>
                    </View>
                    <View style={{height:height(6), width:width(50)}}>

                    </View>
                </View>
            </View>
        );
    }
}

export default Payment;