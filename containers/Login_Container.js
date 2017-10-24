import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Body, Text, Content, Form, Item, Input, Label, Button, Footer, FooterTab, Icon } from 'native-base';

import Login_Component from '../components/Login_Component';
import LoginMiddleware from '../store/middlewares/LoginMiddleware';

function mapStateToProps(state) {
    console.log(state.Login.loggedInUser);
    return {
        user: state.Login.loggedInUser

    };
}

function mapDispatchToProps(dispatch) {
    return {
        loginUser: function (value) {

            return dispatch(LoginMiddleware.login(value));
        },

    };
}


class Login_Container extends Component {
    login(user) {
        this.props.loginUser(user);
    }
    render() {
        return <Login_Component login={this.login.bind(this)} user={this.props.user} />
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login_Container);


