// Update in Counter 8 -- Separate action file as class
export default class Actions {

    // static properties to be used in reducer for switch cases

    static LOGIN = "LOGIN_USER";
    static LOC = "CURRENT_LOC";
    static UPDATE_LOC = "UPDATE_LOC";
    static RESTAURANTS = "RESTAURANTS";
    static HOSPITALS = "HOSPITALS";
    static PARKS = "PARKS";
    static HOTELS = "HOTELS";



    // static functions to be mapped with dispatch in component


    static loginUser(value) {
        return {
            type: 'LOGIN_USER',
            value: value
        }
    }
    static setCurrentLoc(value) {
        return {
            type: 'CURRENT_LOC',
            value: value
        }
    }
    static updateCurrentLoc(value) {
        return {
            type: 'UPDATE_LOC',
            value: value
        }
    }
    static getRestaurants(value) {
        return {
            type: 'RESTAURANTS',
            value: value
        }
    }
    static getHotels(value) {
        return {
            type: 'HOTELS',
            value: value
        }
    }
    static getParks(value) {
        return {
            type: 'PARKS',
            value: value
        }
    }
    static getHospitals(value) {
        return {
            type: 'HOSPITALS',
            value: value
        }
    }
}