import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import Login_Container from '../containers/Login_Container';
import SignUp_Container from '../containers/SignUp_Container';
import Dashboard_Container from '../containers/Dashboard_Container';
import RestaurantList_Container from '../containers/RestaurantList_Container';
import HospitalList_Container from '../containers/HospitalList_Container';
import HotelList_Container from '../containers/HotelList_Container';
import ParkList_Container from '../containers/ParkList_Container';
import PlaceDetails from '../components/PlaceDetails';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Title, Content, InputGroup, Input, List, Button, Text, View } from 'native-base';
import { Router, Scene } from 'react-native-router-flux';


const App = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="Login_Container"
          component={Login_Container}
          title="Login_Container"
          hideNavBar={true}
          initial
        />
        <Scene
       // navigationBarStyle={{backgroundColor: '#1C9EB4'}}

          key="SignUp_Container"
          component={SignUp_Container}
          title="SignUp_Container"
          hideNavBar={true}
        // initial
        />
        <Scene
          key="Dashboard_Container"
          component={Dashboard_Container}
          title="Dashboard_Container"
          hideNavBar={true}
        // initial
        />
        <Scene
          key="RestaurantList_Container"
          component={RestaurantList_Container}
          title="RestaurantList_Container"
          hideNavBar={true}
        // initial
        />
        <Scene
          key="HospitalList_Container"
          component={HospitalList_Container}
          title="HospitalList_Container"
          hideNavBar={true}
        // initial
        />
        <Scene
          key="HotelList_Container"
          component={HotelList_Container}
          title="HotelList_Container"
          hideNavBar={true}
        // initial
        />
        <Scene
          key="ParkList_Container"
          component={ParkList_Container}
          title="ParkList_Container"
          hideNavBar={true}
        // initial
        />
        <Scene
          key="PlaceDetails"
          component={PlaceDetails}
          title="PlaceDetails"
          hideNavBar={true}
        // initial
        />

      </Scene>

    </Router>
  );
}



export default App;