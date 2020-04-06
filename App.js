import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import Home from './src/screens/mainFlow/Home';
import Youtube from './src/screens/mainFlow/Youtube';
import Facebook from './src/screens/mainFlow/Facebook';
import Instagram from './src/screens/mainFlow/Instagram';
import Splash from './src/MantraScreens/authflow/Splash/Splash';
import Login from './src/MantraScreens/authflow/Login/Login';
import Signin from './src/MantraScreens/authflow/Signin/Signin';
import Deliveryscreen from './src/MantraScreens/mainflow/DeliveryScreen/Deliveryscreen';
import Editprofile from './src/MantraScreens/authflow/Editprofile/Editprofile';
import Emailvarification from './src/MantraScreens/authflow/Emailvarification/Emailvarification';
import Manue from './src/MantraScreens/mainflow/manuescreen/Manue';
import Manue1 from './src/MantraScreens/mainflow/manuescreen/manue1';
import Manuesearch from './src/MantraScreens/mainflow/manuescreen/Manuesearch';


function DetailsScreen({ navigation }) {
  
}

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Manuesearch />
      </NavigationContainer>
    );
  }
}

export default App;