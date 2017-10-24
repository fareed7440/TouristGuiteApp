import React, { Component } from 'react';
import { View, Dimensions, Image, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import * as firebase from 'firebase';
import { Container, Header, Left, Right, Body, Title, Text, Content, Form, Spinner, Item, Input, Label, Button, Footer, FooterTab, Icon } from 'native-base';
class Login_Component extends Component {
    constructor(props) {
        super(props);

        this.state = {

            email: '',
            pass: '',
            loading: true,
            mode: (Dimensions.get('window').width < Dimensions.get('window').height) ? 'verticle' : 'horizontal'


        };

    }
    componentWillMount() {

        Dimensions.addEventListener('change', () => {
            this.setState({
                mode: (Dimensions.get('window').width < Dimensions.get('window').height) ? 'verticle' : 'horizontal'
            })

        })

        firebase.auth().onAuthStateChanged(() => {


            if (firebase.auth().currentUser) {
                Actions.Dashboard_Container();
                const userId = firebase.auth().currentUser.uid;
                console.log(userId);
                var user;
                const rootRef = firebase.database().ref();
                const speedRef = rootRef.child('users/' + userId);
                speedRef.on('value', snap => {
                    user = snap.val()
                    console.log(user);

                });
            }
            else {
                this.setState({ loading: false })
                console.log("No user log in");
            }
        });
    }
     componentWillUnmount() {
        Dimensions.removeEventListener('change',()=> 
    this.setState({mode:(Dimensions.get('window').width<Dimensions.get('window').height)?'verticle':'horizontal'}));
    }

    componentDidMount() {
        console.log(this.props.user);
    }


    login() {

        var email = this.state.email;
        var pass = this.state.pass;
        if (email === '' || pass === '') {
            alert("All fields required");
        }
        else {
            this.props.login({
                email: email,
                pass: pass,

            });


        }
    }






    render() {
        return (
            <Container style={styles.container}>
                <Content>
                {  this.state.mode=='vertical' ?  <Image style={{height:50,width:50}} source={require('./images/signupIcon.png')} /> :
                <Image style={styles.logo} source={require('./images/signupIcon.png')} />
                 }
                    {this.state.loading ? <View><Spinner color='blue' large /></View> :
                        <Form>
                            <Item floatingLabel >
                                <Label style={{color : 'white'}}>Email</Label>
                                <Icon name='ios-mail' />
                                <Input value={this.state.email} onChange={ev => this.setState({ email: ev.nativeEvent.text })} />
                            </Item>
                            <Item floatingLabel>
                                <Label style={{color:'white'}}>Password</Label>
                                <Icon name='ios-lock' />
                                <Input secureTextEntry={true} value={this.state.pass} onChange={ev => this.setState({ pass: ev.nativeEvent.text })} />
                            </Item>
                            <Button style={{backgroundColor:'#1C9EB4'}} block success iconRight onPress={this.login.bind(this)} >
                                <Text>LOGIN</Text>
                            </Button>
                            <Button transparent dark onPress={() => Actions.SignUp_Container()} >
                                <Text style={{color:'white', marginLeft : 70}}> Create an account ?</Text>
                            </Button>
                        </Form>}

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
        
    }

})
export default Login_Component;