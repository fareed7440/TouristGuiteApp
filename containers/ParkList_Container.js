import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Body, Text, Content, Form, Item, Input, Label, Button, Footer, FooterTab, Icon } from 'native-base';
// import DatePicker from 'react-native-datepicker';
import ParkList_Component from '../components/ParkList_Component';
// import PatientsAction from './../store/actions/PatientsAction';
// import SignOutMiddleware from '../store/middlewares/SignOutMiddleware';
// import CurrentLocationMiddleware from '../store/middlewares/CurrentLocationMiddleware';
// import UpdateLocationMiddleware from '../store/middlewares/UpdateLocationMiddleware';
import ParktMiddlewares from '../store/middlewares/ParktMiddlewares';
function mapStateToProps(state) {
    console.log(state.Parks.parkList);
    return {
        parkList: state.Parks.parkList
}
}
function mapDispatchToProps(dispatch) {
    return {
        getParkList: function () {

            return dispatch(ParktMiddlewares.getParks(this.props.loc));
        },

    };
}


class ParkList_Container extends Component {
  
    getParkList() {      
        this.props.getParkList();
    }
    render() {
        console.log(this.props.loc);
        return <ParkList_Component currentLoc = {this.props.loc} parkList={this.props.parkList} getParkList={this.props.getParkList.bind(this)} />
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ParkList_Container);
