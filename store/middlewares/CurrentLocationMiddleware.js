import Action from "./../actions/Actions";
import { AsyncStorage } from 'react-native';

export default class LoginMiddleware {

    static currentLoc() {
        return (dispatch) => {

            console.log('in current loc middleware');
            navigator.geolocation.getCurrentPosition(

                (position) => {
                    dispatch(Action.setCurrentLoc({

                        latitude: parseFloat(position.coords.latitude),
                        longitude: parseFloat(position.coords.longitude),
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }));


                },


                (error) => {

                    console.log(error);


                },
                { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 },


            )



        }
    }
};












