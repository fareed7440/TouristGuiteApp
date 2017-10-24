import Action from "./../actions/Actions";
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import {
    AsyncStorage,
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    TextInput,
    Button,
    Image,
    Dimensions, Picker,
    BackAndroid,
    ToastAndroid,
    Alert
} from 'react-native';
export default class ParktMiddlewares {

    static getParks(location) {
        return (dispatch) => {
            console.log('in park middleware');
            console.log(location);
            let url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location.latitude},${location.longitude}&radius=2000&type=park&key=AIzaSyDTz0V5KDzGimKT1EaYSgwJ1UIcs7jcBAc`;

            axios.get(url).then(({ data }) => {
                console.log(data.results);
                dispatch(Action.getParks(data.results));
            })
                .catch((error) => {
                    if (error.response) {
                        Alert.alert(error.response.data);
                    }
                    ToastAndroid.show('No Internet Access', ToastAndroid.SHORT);

                })



        }
    }
};












