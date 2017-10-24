import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Right, Body, Left, Button, Title, Icon,Spinner,View, Separator, ListItem, Thumbnail, List } from 'native-base';
import { Actions } from 'react-native-router-flux';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
export default class HotelList_Component extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };

  }
    componentDidMount() {
        this.props.getHotelList();
        setTimeout(() =>{ this.setState({ loading: false }) }, 3000);
        
      }



  render() {
    console.log(this.props.hotelList);
    var init = {
      lat:   this.props.currentLoc.latitude,
      lng:   this.props.currentLoc.longitude,
    }
    
    var list = this.props.hotelList.map((data, index) => {
      var initDestType ={
        dest:data.geometry.location,
        init:init,
        type:'hotel'
      };
    return (
     
        <ListItem key={index}>
         <Thumbnail square size={80} source={{ uri: data.icon }} />
          <Body>
            <Text>{data.name}</Text>
            <Text note>Ratings: {data.rating}</Text>
            <Text note>Address: {data.vicinity}</Text>
           
          </Body>
          <Right>
          <Button transparent onPress={() => Actions.PlaceDetails({initDestType})}  style={{fontSize: 20, color: 'red'}}>
          <Icon  name="navigate"/>
          </Button>          
              </Right>
              </ListItem >
    )}
       
      )
   

    return (
      <Container>
         <Header> 
          <Left>
             <Button transparent onPress={() => Actions.pop()}>
               <Icon name='arrow-back' />
             </Button>
           </Left>
          <Body>
            <Title>Hotels</Title>

          </Body>
        </Header >
        <Content>
        {this.state.loading ? <View><Spinner color='blue' large /></View> :
        
                  <List>
        
                    {list}
        
                  </List>}
        </Content>
      </Container>
    );
  }
}