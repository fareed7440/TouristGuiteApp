import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Body, Text, Content, Form, Item, Input, Label, Button, Footer, FooterTab, Icon } from 'native-base';
// import DatePicker from 'react-native-datepicker';
import RestaurantList_Component from '../components/RestaurantList_Component';
// import PatientsAction from './../store/actions/PatientsAction';
// import SignOutMiddleware from '../store/middlewares/SignOutMiddleware';
// import CurrentLocationMiddleware from '../store/middlewares/CurrentLocationMiddleware';
// import UpdateLocationMiddleware from '../store/middlewares/UpdateLocationMiddleware';
import RestaurantMiddlewares from '../store/middlewares/RestaurantMiddlewares';
function mapStateToProps(state) {
    console.log(state.Restaurants.restaurantList);
    return {
        restaurantList: state.Restaurants.restaurantList
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getRestaurantList: function () {

            return dispatch(RestaurantMiddlewares.getRestaurants(this.props.loc));
        },

    };
}


class RestaurantList_Container extends Component {
  
    getRestaurantList() {      
        this.props.getRestaurantList();
    }
    render() {
        console.log(this.props.loc);
        return <RestaurantList_Component currentLoc = {this.props.loc}restaurantList={this.props.restaurantList} getRestaurantList={this.props.getRestaurantList.bind(this)} />
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList_Container);


