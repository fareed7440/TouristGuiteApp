import React, { Component } from 'react';
import { View, Image, StyleSheet, Dimensions, ToastAndroid, Alert } from 'react-native';

import { Container, Content, Header, Body, Text, Button, Right, Left, Title, Drawer, Fab, Footer, FooterTab, Icon } from 'native-base';
// import Icon from 'react-native-vector-icons/dist/MaterialIcons';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import styles from './styles';
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Action } from 'react-native-router-flux';
import MapView from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Actions } from 'react-native-router-flux';
import Polyline from '@mapbox/polyline';
import axios from 'axios';


export default class PlaceDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {

            error: null,

            coords: [],
            initialPosition: {
                latitude: this.props.initDestType.init.lat,
                longitude: this.props.initDestType.init.lng,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            },
            destinationPosition: {
                latitude: this.props.initDestType.dest.lat,
                longitude: this.props.initDestType.dest.lng,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            },
            type: this.props.initDestType.type,
            showMapNow: false





        };

    }
    componentDidMount() {

        var init = `${this.props.initDestType.init.lat},${this.props.initDestType.init.lng}`
        var dest = `${this.props.initDestType.dest.lat},${this.props.initDestType.dest.lng}`


        let url = `https://maps.googleapis.com/maps/api/directions/json?origin=${init}&destination=${dest}&key=AIzaSyCDQfwwG5sCBFsj_6A5IQOuHSDBNyuww40`;

        axios.get(url).then(({ data }) => {
            console.log(data);

            let points = Polyline.decode(data.routes[0].overview_polyline.points);
            let coords = points.map((point, index) => {
                return {
                    latitude: point[0],
                    longitude: point[1]
                }
            })
            this.setState({ coords: coords });
            console.log(this.state.coords);


        })
            .catch((error) => {
                if (error.response) {
                    Alert.alert(error.response.data);
                }
                ToastAndroid.show('No Internet Access', ToastAndroid.SHORT);

            })

    }



    render() {

        console.log("Rendering Place Details");
        console.log(this.state.coords);
        console.log(this.state.initialPosition);
        console.log(this.state.destinationPosition);

        console.log(this.props.initDestType);
        console.log(this.state.type);

        return (

            <Container>

                <Header>
                    <Left>
                        <Button transparent onPress={() => Actions.pop()}  >
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Place Details</Title>

                    </Body>
                </Header >
                <Content>




                    <MapView
                        style={styles.map}
                        //style={{ height: 1000, margin: 0 }}
                        showsCompass={true}
                        loadingEnabled={true}
                        showsBuildings={true}
                        provider='google'
                        showsUserLocation={true}
                        region={this.state.initialPosition}
                    >
                        <MapView.Polyline
                            key="LTrainPolyline"
                            strokeWidth={6}
                            strokeColor="#6da0f2"
                            lineCap='round'
                            strokeWidth={5}
                            geodesic={true}
                            coordinates={this.state.coords}
                           // strokeColor="rgba(0,0,200,0.5)"
                            lineDashPattern={[47.12]}
                        />
                        <MapView.Marker

                            coordinate={this.state.initialPosition}
                        //center={{ latitude: 24.814211,
                        //longitude: 67.050390,}}
                        //radius={50} strokeColor= {'#3478e5'}
                        //title={marker.title}
                        //description={marker.description}
                        />
                    </MapView>

                    <Text>Hello World</Text>
                </Content>


            </Container>

        );
    }
}





const styles = StyleSheet.create({
    container: {
        // flex: 3, 
        // flexDirection: 'row',
        position: 'absolute',
        // padding: 20,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    map: {
        // position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        flex: 1,
        width: '100%',
        height: Dimensions.get('window').height
    }
});



