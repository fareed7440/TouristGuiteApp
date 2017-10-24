import React, { Component } from 'react';
import { View, Image, StyleSheet, Dimensions, } from 'react-native';
import { Container, Content, Header, Body, Text, Button, Right, Left, Title, Drawer, Fab, Footer, FooterTab,Spinner } from 'native-base';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

import MapView from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Actions } from 'react-native-router-flux';


export default class Dashboard_Component extends Component {
  constructor(props) {
    super(props);

    this.state = {

      error: null,

    };

  }
  componentDidMount() {
    this.props.getCurrentLocation();
  }

  signOut() {



    this.props.signOut();

  }
  updateLoc(location) {



    this.props.updateLoc(location);

  }
  currentLoc() {



    this.props.getCurrentLocation();

  }

  // onRegionChange(region) {
  //   console.log(region);
  //   this.setState({ region });
  // }


  render() {
    closeDrawer = () => {
      this.drawer._root.close()
    };
    openDrawer = () => {
      this.drawer._root.open()
    };
    console.log("Rendering Dashboard");
    console.log(this.props.loc);

    return (

      <Container>

        <Header>

          <Body>
            <Title>Tourist Guide</Title>

          </Body>

          <Right>
            <Button onPress={this.signOut.bind(this)}>
              <Text>Logout</Text>
            </Button>
          </Right>
        </Header>
        {!this.props.loc? <View><Spinner color='blue' large /></View> :
        <Content>
        
          <GooglePlacesAutocomplete
            placeholder='Search'
            minLength={2} // minimum length of text to search
            autoFocus={false}
            returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
            listViewDisplayed='auto'    // true/false/undefined
            fetchDetails={true}
            renderDescription={row => row.description} // custom description render
            onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
              this.updateLoc(details.geometry.location);
              console.log(data, details, details.geometry.location);
              var data = details.geometry.location;


            }}

            getDefaultValue={() => ''}

            query={{
              // available options: https://developers.google.com/places/web-service/autocomplete
              key: 'AIzaSyATOgwd_QT-IWmgB7TGlNqY4OPUXtSs98E',
              language: 'en', // language of the results
              //types: '(cities)' // default: 'geocode'
            }}


            styles={{
              description: {
                fontWeight: 'bold',
                zIndex: 16
              },
              predefinedPlacesDescription: {
                color: '#1faadb'
              },
              listView: {
                color: 'black', //To see where exactly the list is
                zIndex: 16, //To popover the component outwards
                backgroundColor: 'white'
                //   position: 'absolute',  
              }
            }}
            currentLocation={false} // Will add a 'Current location' button at the top of the predefined places list
            currentLocationLabel="Current location"
            nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
            GoogleReverseGeocodingQuery={{
              // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
            }}
            GooglePlacesSearchQuery={{
              // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
              rankby: 'distance',
              //types: 'food'
            }}

            filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
            //predefinedPlaces={[homePlace, workPlace]}

            debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
          //renderLeftButton={()  => <Image source={require('path/custom/left-icon')} />}
          //renderRightButton={() => <Text>Custom text after the input</Text>}
          />



          <View style={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            flex: 1
          }}>



            <MapView
              //style={styles.map}
              style={styles.map}
              showsCompass={true}
              loadingEnabled={true}
              showsBuildings={true}
              provider='google'
              showsUserLocation={true}
              region={this.props.loc}
            >
              <MapView.Marker
                //coordinate={ this.state.region}
                coordinate={this.props.loc}
              //center={{ latitude: 24.814211,
              //longitude: 67.050390,}}
              //radius={50} strokeColor= {'#3478e5'}
              //title={marker.title}
              //description={marker.description}
              />
            </MapView>
            <Fab
              active={this.state.active}
              direction="up"
              containerStyle={{}}
              style={{ backgroundColor: '#237ece' }}
              position="topRight"
              onPress={this.currentLoc.bind(this)}
            >
              <Icon name="gps-fixed" size={30} color="#900" />
            </Fab>
          </View>
        </Content>}
        {!this.props.loc? <View></View> :
        <Footer>
          <FooterTab>
            <Button active onPress={() => Actions.RestaurantList_Container({ loc: this.props.loc })}>
              <Text>Restaurant</Text>
            </Button>
            <Button onPress={() => Actions.HospitalList_Container({ loc: this.props.loc })}>
              <Text>Hospital</Text>
            </Button>

            <Button onPress={() => Actions.ParkList_Container({ loc: this.props.loc })} >
              <Text>Parks</Text>
            </Button>
            <Button onPress={() => Actions.HotelList_Container({ loc: this.props.loc })}>
              <Text>Hotel</Text>
            </Button>
          </FooterTab>
        </Footer>}

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