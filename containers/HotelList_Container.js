import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Body, Text, Content, Form, Item, Input, Label, Button, Footer, FooterTab, Icon } from 'native-base';
// import DatePicker from 'react-native-datepicker';
import HotelList_Component from '../components/HotelList_Component';
// import PatientsAction from './../store/actions/PatientsAction';
// import SignOutMiddleware from '../store/middlewares/SignOutMiddleware';
// import CurrentLocationMiddleware from '../store/middlewares/CurrentLocationMiddleware';
// import UpdateLocationMiddleware from '../store/middlewares/UpdateLocationMiddleware';
import HotelMiddlewares from '../store/middlewares/HotelMiddlewares';
function mapStateToProps(state) {
    console.log(state.Hotels.hotelList);
    return {
        hotelList: state.Hotels.hotelList
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getHotelList: function () {

            return dispatch(HotelMiddlewares.getHotels(this.props.loc));
        },

    };
}


class HotelList_Container extends Component {
  
    getHotelList() {      
        this.props.getHotelList();
    }
    render() {
        console.log(this.props.loc);
        return <HotelList_Component currentLoc = {this.props.loc} hotelList={this.props.hotelList} getHotelList={this.props.getHotelList.bind(this)} />
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HotelList_Container);


