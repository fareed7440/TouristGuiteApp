import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Body, Text, Content, Form, Item, Input, Label, Button, Footer, FooterTab, Icon } from 'native-base';
// import DatePicker from 'react-native-datepicker';
import Hospital_Component from '../components/Hospital_Component';
// import PatientsAction from './../store/actions/PatientsAction';
// import SignOutMiddleware from '../store/middlewares/SignOutMiddleware';
// import CurrentLocationMiddleware from '../store/middlewares/CurrentLocationMiddleware';
// import UpdateLocationMiddleware from '../store/middlewares/UpdateLocationMiddleware';
import HospitalMiddlewares from '../store/middlewares/HospitalMiddlewares';
function mapStateToProps(state) {
    console.log(state.Hospitals.hospitalList);
    return {
        hospitalList: state.Hospitals.hospitalList
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getHospitalList: function () {

            return dispatch(HospitalMiddlewares.getHospitals(this.props.loc));
        },

    };
}


class HospitalList_Container extends Component {
  
    getHospitalList() {      
        this.props.getHospitalList();
    }
    render() {
        console.log(this.props.loc);
        return <Hospital_Component currentLoc = {this.props.loc} hospitalList={this.props.hospitalList} getHospitalList={this.props.getHospitalList.bind(this)} />
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HospitalList_Container);


