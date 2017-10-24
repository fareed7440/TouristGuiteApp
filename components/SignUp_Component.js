import React, { Component } from 'react';
import { View, Dimensions, Image, StyleSheet } from 'react-native';
import { Container, Header, Left, Right, Body, Title, Text, Content, Form, Item, Input, Label, Button, Footer, FooterTab, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
class SignUp_Component extends Component {
    constructor(props) {
        super(props);

        this.state = {

            email: '',
            pass: '',
        
        };

    }
    signUp() {

        var fName = this.state.fName;
        var lName = this.state.lName;
        var email = this.state.email;
        var pass = this.state.pass;

        if (fName === '' || lName === '' || email === '' || pass === '') {
            alert("All fields required");
        }
        else {
            this.props.signUp({
                fName: fName,
                lName: lName,
                email: email,
                pass: pass,

            });


        }
    }






    render() {
        return (
            <Container style={styles.container}>
                <Header style={{backgroundColor:'#1C9EB4'}}>
                    <Left>
                        <Button transparent onPress={() => Actions.pop()}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Registration Form</Title>
                    </Body>

                </Header>
                <Content>
                     <Image style={styles.logo} source={require('./images/signupIcon.png')} />
                    <Form style={{marginTop:10}}>
                        <Item floatingLabel>
                            <Label style={{color : 'white'}}>First Name</Label>

                            <Input value={this.state.fName} onChange={ev => this.setState({ fName: ev.nativeEvent.text })} />
                        </Item>
                        <Item floatingLabel>
                            <Label style={{color : 'white'}}>Last Name</Label>

                            <Input value={this.state.lName} onChange={ev => this.setState({ lName: ev.nativeEvent.text })} />
                        </Item>
                        <Item floatingLabel >
                            <Label style={{color : 'white'}}>Email</Label>
                            <Input value={this.state.email} onChange={ev => this.setState({ email: ev.nativeEvent.text })} />
                        </Item>
                        <Item floatingLabel>
                            <Label style={{color : 'white'}}>Password</Label>

                            <Input secureTextEntry={true} value={this.state.pass} onChange={ev => this.setState({ pass: ev.nativeEvent.text })} />
                        </Item>



                        <Button style={{backgroundColor:'#1C9EB4'}} block success iconRight onPress={this.signUp.bind(this)} >
                            <Text>SIGN UP</Text>
                        </Button>

                    </Form>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        top: '0%',
        marginTop: '0%',
        marginLeft: '0%',
        marginBottom: '0%',
        marginRight: '0%',
        backgroundColor: '#404952'
    },
    logo : {
        alignSelf :'center',
        height:120,
        width:120,
        marginTop:30,
       // backgroundColor : '#1C9EB4',
        //borderRadius : 60
    }

})

export default SignUp_Component;