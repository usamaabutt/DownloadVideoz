import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import Icon from 'react-native-vector-icons/AntDesign';
import { appImages } from '../../services'
import { ScrollView } from 'react-native-gesture-handler';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <ScrollView style={{ flex: 1 }}>
                <View style={{ height: height(8), width: width(100), backgroundColor: '#009afa', marginTop: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name='clouddownload' size={40} color={'white'} />
                    <Text style={{ fontSize: 25, justifyContent: 'center', color: 'white' }}>downloadvideoz.com</Text>
                </View>
                <View style={{ height: height(20), width: width(100), alignItems: 'center', justifyContent: 'center', marginTop: 50 }}>
                    <Text style={{ fontSize: 30, justifyContent: 'center', color: 'black' }}>Online HD Video Downloader</Text>
                    <Text style={{ fontSize: 12, justifyContent: 'center', color: 'black', marginTop: 40, marginLeft: 2 }}>Download online videos from Youtube, Facebook, Instagram, Dailymotion to PC and Mobile phones.</Text>
                    <Text style={{ fontSize: 12, justifyContent: 'center', color: 'black', marginTop: 10, marginLeft: 20 }}>Support downloading all formats: MP4, 3GP, WebM, HD videos, convert Videos to Mp3, MP4A</Text>
                </View>
                <View style={{ backgroundColor: 'transparant', height: height(33), width: width(95), alignItems: 'center', alignSelf: 'center' }}>
                    <TouchableOpacity 
                    
                    onPress={() => this.props.Navigation.navigate('Youtube')}


                    style={{ height: height(10), width: width(80), backgroundColor: '#009afa', marginTop: 10, alignItems: 'center', justifyContent: 'center', alignSelf: 'center', borderRadius: 5 }}>
                        <Image source={appImages.youtubeImg}
                            style={{ height: height(4), width: width(15), resizeMode: 'contain' }} />
                        <Text style={{ fontSize: 25, justifyContent: 'center', color: 'white', marginTop: 5 }}>Youtube Video Downloader</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ height: height(10), width: width(80), backgroundColor: '#009afa', marginTop: 5, alignItems: 'center', justifyContent: 'center', alignSelf: 'center', borderRadius: 5 }}>
                        <Image source={appImages.facebookImg}
                            style={{ height: height(4), width: width(15), resizeMode: 'contain' }} />
                        <Text style={{ fontSize: 25, justifyContent: 'center', color: 'white', marginTop: 5 }}>Youtube Video Downloader</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ height: height(10), width: width(80), backgroundColor: '#009afa', marginTop: 5, alignItems: 'center', justifyContent: 'center', alignSelf: 'center', borderRadius: 5 }}>
                        <Image source={appImages.instaImg}
                            style={{ height: height(4), width: width(15), resizeMode: 'contain' }} />
                        <Text style={{ fontSize: 25, justifyContent: 'center', color: 'white', marginTop: 5 }}>Youtube Video Downloader</Text>
                    </TouchableOpacity>
                </View>



                <View style={{ height: height(30), width: width(95), marginTop: 60, backgroundColor: 'transparant', alignItems: 'center', alignSelf: 'center' }}>
                    <View style={{ marginVertical: 10, marginHorizontal: 10 }}>
                        <Text style={{ fontSize: 35, justifyContent: 'center', color: 'black', marginTop: 5, }}>Downloadvideoz.com - HD Video Downloader</Text>
                        <Text style={{ fontSize: 15, justifyContent: 'center', color: 'black', marginTop: 5 }}>Downloadvideo.com allows you to download high quailty videos completely free from YouTube, Facebook,</Text>
                        <Text style={{ fontSize: 15, justifyContent: 'center', color: 'black', marginTop: 5 }}>Instagram, Dailymotion, Vimeo, etc. You can easily download for free thousands of High Quailty videos from,</Text>
                        <Text style={{ fontSize: 15, justifyContent: 'center', color: 'black', marginTop: 5 }}>YouTube and other websites.</Text>
                    </View>
                </View>
                <View style={{ height: height(45), width: width(95), marginTop: 60, backgroundColor: 'transparant', alignItems: 'center', alignSelf: 'center' }}>
                    <View style={{ height: height(15), width: width(95), backgroundColor: 'transparant', justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={appImages.present}
                            style={{ height: height(4), width: width(15), resizeMode: 'contain', backgroundColor: 'transparant' }} />
                        <Text style={{ fontSize: 30, justifyContent: 'center', color: 'blue', marginTop: 5, }}>Free Videos Download</Text>
                        <Text style={{ fontSize: 20, justifyContent: 'center', color: 'black', marginTop: 5, }}>Download unlimited HD videos</Text>
                    </View>
                    <View style={{ height: height(15), width: width(95), backgroundColor: 'transparant', justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={appImages.videocamera}
                            style={{ height: height(4), width: width(15), resizeMode: 'contain', backgroundColor: 'transparant' }} />
                        <Text style={{ fontSize: 30, justifyContent: 'center', color: 'blue', marginTop: 5, }}>High Quailty Videos</Text>
                        <Text style={{ fontSize: 20, justifyContent: 'center', color: 'black', marginTop: 5, }}>Download High Quailty Videos & Music</Text>
                    </View>
                    <View style={{ height: height(15), width: width(95), backgroundColor: 'transparant', justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={appImages.download}
                            style={{ height: height(4), width: width(15), resizeMode: 'contain', backgroundColor: 'transparant' }} />
                        <Text style={{ fontSize: 30, justifyContent: 'center', color: 'blue', marginTop: 5, }}>One Click Download</Text>
                        <Text style={{ fontSize: 20, justifyContent: 'center', color: 'black', marginTop: 5, }}>Download Video with just one click.</Text>
                    </View >
                    <View style={{ height: height(4), width: width(95), backgroundColor: 'red', justifyContent: 'center', }}>
                        <Text style={{ fontSize: 12, color: 'black', textAlign: 'center', }}>© 2020 downloadvideoz.com</Text>
                    </View>
                </View>


            </ScrollView>
        );
    }
}

export default App;