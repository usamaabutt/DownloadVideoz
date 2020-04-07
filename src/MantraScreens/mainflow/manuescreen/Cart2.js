import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { View, Text, Image, TouchableOpacity, Button, placeholder, ScrollView } from 'react-native';
import { width, height, } from 'react-native-dimension';
import Icon from 'react-native-vector-icons/AntDesign';
import { appImages } from '../../../services'
import { SearchBar, CheckBox } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';



class Cart2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            arr: [{}, {}],
            isDelivery: false,
            isPickUp:false,
        }
    }

    isDelivery(){
        this.setState({
            checked:!this.state.checked
        })
    }
    card = (item, key) => {
        return (
            <View style={{ height: height(12), width: width(90), flexDirection: 'row', backgroundColor: '#f2f2f2', alignItems: 'center', alignSelf: 'center', marginTop: 10, borderRadius: 10 }}>
                <View style={{ height: height(10), width: width(10), backgroundColor: '#fff', marginLeft: 10, borderRadius: 10 }}>
                    <TouchableOpacity style={{ height: height(3), width: width(10), justifyContent: 'center' }}>
                        <Image source={appImages.add} style={{ width: width(5), resizeMode: 'contain', height: height(2), alignSelf: 'center' }} />
                    </TouchableOpacity>
                    <View style={{ height: height(4), width: width(10), alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#99cc00', }}> 1 </Text>
                    </View>
                    <TouchableOpacity style={{ height: height(3), width: width(10), justifyContent: 'center' }}>
                        <Image source={appImages.minus} style={{ width: width(5), resizeMode: 'contain', height: height(2), alignSelf: 'center' }} />
                    </TouchableOpacity>
                </View>
                <View style={{ height: height(10), width: width(17), backgroundColor: '#fff', marginLeft: 10, justifyContent: 'center', borderRadius: 10 }}>
                    <Image source={appImages.fooditems} style={{ width: width(17), resizeMode: 'contain' }} />
                </View>
                <View style={{ height: height(10), width: width(40), backgroundColor: '#f2f2f2', marginLeft: 10, justifyContent: 'center', borderRadius: 10 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'normal', color: 'BLACK', marginTop: 15, }}> TOMATENSUPPE </Text>
                    <Text style={{ fontSize: 12, fontWeight: 'normal', color: 'grey', }}> 3.99 </Text>
                    <View style={{ height: height(4), width: width(35), backgroundColor: '#f2f2f2', alignItems: 'center', flexDirection: 'row' }}>
                        <TouchableOpacity>
                            <Image source={appImages.editscreen} style={{ width: width(10), height: height(3), resizeMode: 'contain' }} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 30, color: '#99cc00', marginHorizontal: 12 }}>/</Text>
                        <View style={{ height: height(3), width: width(15), backgroundColor: '#99cc00', borderRadius: 20, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 10, color: '#fff', textAlign: 'center' }}>SUPPEN</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={{ height: height(3), width: width(10), justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-start', marginLeft: 20 }}>
                    <Image source={appImages.cencelbutton} style={{ width: width(7), height: height(6), resizeMode: 'contain' }} />
                </TouchableOpacity>
            </View>

        )
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ height: height(100), width: width(100), backgroundColor: '#99cc00', borderBottomLeftRadius: 40, borderBottomRightRadius: 40, shadowOpacity: 5, shadowColor: 'grey', shadowRadius: 5 }}>
                    <View style={{ height: height   (3), width: width(40), alignSelf: 'flex-end', marginTop: 50, justifyContent: 'center' }}>
                        <Image source={appImages.whiteline} style={{ width: width(30), }} />
                    </View>
                    <View style={{ height: height(4), width: width(50), justifyContent: 'center', alignContent: 'center', alignSelf: 'flex-end' }}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', textAlign: 'center', color: '#fff' }}> Your Food Cart</Text>
                    </View>
                    <View>
                        {
                            this.state.arr.map((item, key) => {
                                return (this.card(item, key))
                            })
                        }
                    </View>
                    <View style={{ height: height(8), width: width(85), backgroundColor: '#f2f2f2', marginTop: 20, borderRadius: 10, alignSelf: 'center', flexDirection: 'row' }}>
                        <TextInput
                            style={{ height: height(5), width: width(40), alignSelf: 'center', fontSize: 15, marginLeft: 10, }}
                            placeholder='Promo Code'
                            placeholderTextColor='grey'
                            keyboardType='default'
                        />
                        <View style={{ height: height(5), width: width(30), borderWidth: 1, borderRadius: 10, borderColor: '#99cc00', alignSelf: 'center', marginLeft: 30, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 15, fontWeight: 'normal', textAlign: 'center', color: '#99cc00' }}> Apply </Text>
                        </View>
                    </View>
                    <View style={{ height: height(20), width: width(90), alignSelf: 'center', marginTop: 10, justifyContent: 'center' }}>
                        <View style={{ height: height(10), width: width(90), flexDirection: 'row', }}>
                            <View style={{ height: height(12), width: width(55), marginLeft: 20 }}>
                                <Text style={{ fontSize: 20, fontWeight: 'normal', color: 'white', marginVertical: 2 }}> Cart Total </Text>
                                <Text style={{ fontSize: 20, fontWeight: 'normal', color: 'white', marginVertical: 2 }}> Delivery </Text>
                                <Text style={{ fontSize: 20, fontWeight: 'normal', color: 'white', marginVertical: 2 }}> Promo Diacount</Text>
                            </View>
                            <View style={{ height: height(12), width: width(25), alignItems: 'flex-end' }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', marginVertical: 2 }}> 7.80 </Text>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', marginVertical: 2 }}> Free </Text>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', marginVertical: 2, }}> -</Text>
                            </View>
                        </View>
                        <View style={{ height: height(3), width: width(70), alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={appImages.purewhiteline} style={{ width: width(70), resizeMode: 'contain', }} />
                        </View>
                        <View style={{ height: height(5), width: width(90), flexDirection: 'row', }}>
                            <View style={{ height: height(5), width: width(55), marginLeft: 20 }}>
                                <Text style={{ fontSize: 20, fontWeight: 'normal', color: 'white', marginVertical: 2 }}> SubTotal </Text>
                            </View>
                            <View style={{ height: height(5), width: width(25), alignItems: 'flex-end' }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', marginVertical: 2, }}> 7.90</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                            <Text style={{ fontSize: 15, color: 'white', textDecorationLine: 'underline', textAlign: 'center' }}> Minimum Order Required For Delivery is </Text>
                            <Text style={{ fontSize: 16, color: 'white', textDecorationLine: 'underline', textAlign: 'center', fontWeight: 'bold' }}>  $14.00 </Text>
                        </View>
                    </View>
                    <View style={{ height: height(10), width: width(90), alignSelf: 'center' }}>
                        <Text style={{ fontSize: 25, color: 'white', textAlign: 'center', }}> Order Method</Text>
                        <View style={{ flexDirection: 'row', marginLeft: 40 }}>
                           
                            <CheckBox
                                title='Delivery'
                                textStyle={{color:'#99cc00', fontSize:20}}
                                checkedIcon='dot-circle-o'
                                uncheckedIcon='circle-o'
                                checked={this.state.isDelivery}
                                onPress={() => 
                                    this.setState({ 
                                        isDelivery: true,
                                        isPickUp: false
                                    })}
                            />
                            <CheckBox
                                title='PickUp'  
                                textStyle={{color:'#99cc00', fontSize:20}}
                                checkedIcon='dot-circle-o'
                                uncheckedIcon='circle-o'
                                checked={this.state.isPickUp}
                                onPress={() => 
                                    this.setState({ 
                                        isPickUp: true,
                                        isDelivery: false
                                    })}
                            />  
                        </View>
                    </View>
                    <View style={{height:height(7),width:width(60), borderWidth:2, borderColor:'#fff', alignSelf:'center', borderRadius:10, justifyContent:'center'}}>
                    <Text style={{fontSize:20, fontWeight:'bold', textAlign:'center',color:'#fff'}}> Add Discount Items </Text>
                    </View>
                    <View style={{height:height(7), width:width(60), backgroundColor:'#f2f2f2',justifyContent:'center', alignSelf:'center', marginTop:10, borderRadius:10}}>
                        <Text style={{fontSize:20, fontWeight:'bold', textAlign:'center',color:'#99cc00'}}> Proceed </Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default Cart2;
{/* <View style={{ height: height(12), width: width(90), flexDirection: 'row', backgroundColor: '#f2f2f2', alignItems: 'center', alignSelf: 'center', marginTop: 10, borderRadius: 10 }}>
                        <View style={{ height: height(10), width: width(10), backgroundColor: '#fff', marginLeft: 10, borderRadius: 10 }}>
                            <TouchableOpacity style={{ height: height(3), width: width(10), justifyContent: 'center' }}>
                                <Image source={appImages.add} style={{ width: width(5), resizeMode: 'contain', height: height(2), alignSelf: 'center' }} />
                            </TouchableOpacity>
                            <View style={{ height: height(4), width: width(10), alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#99cc00', }}> 1 </Text>
                            </View>
                            <TouchableOpacity style={{ height: height(3), width: width(10), justifyContent: 'center' }}>
                                <Image source={appImages.minus} style={{ width: width(5), resizeMode: 'contain', height: height(2), alignSelf: 'center' }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ height: height(10), width: width(17), backgroundColor: '#fff', marginLeft: 10, justifyContent: 'center', borderRadius: 10 }}>
                            <Image source={appImages.fooditems} style={{ width: width(17), resizeMode: 'contain' }} />
                        </View>
                        <View style={{ height: height(10), width: width(40), backgroundColor: '#f2f2f2', marginLeft: 10, justifyContent: 'center', borderRadius: 10 }}>
                            <Text style={{ fontSize: 18, fontWeight: 'normal', color: 'BLACK', marginTop: 15, }}> TOMATENSUPPE </Text>
                            <Text style={{ fontSize: 12, fontWeight: 'normal', color: 'grey', }}> 3.99 </Text>
                            <View style={{ height: height(4), width: width(35), backgroundColor: '#f2f2f2', alignItems: 'center', flexDirection: 'row' }}>
                                <TouchableOpacity>
                                    <Image source={appImages.editscreen} style={{ width: width(10), height: height(3), resizeMode: 'contain' }} />
                                </TouchableOpacity>
                                <Text style={{ fontSize: 30, color: '#99cc00', marginHorizontal: 12 }}>/</Text>
                                <View style={{ height: height(3), width: width(15), backgroundColor: '#99cc00', borderRadius: 20, justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 10, color: '#fff', textAlign: 'center' }}>SUPPEN</Text>
                                </View>
                            </View>
                        </View>
                        <TouchableOpacity style={{ height: height(3), width: width(10), justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-start', marginLeft: 20 }}>
                            <Image source={appImages.cencelbutton} style={{ width: width(7), height: height(6), resizeMode: 'contain' }} />
                        </TouchableOpacity>
                    </View> */}
