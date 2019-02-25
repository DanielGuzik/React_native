
import {ADD_PLACE, DELETE_PLACE, SELECTED_PLACE, DESELECT_PLACE} from './actionTypes';

export const addPlace = (placeName) => { //placeName from App.js function placeAddedHandler
    return {
        type: ADD_PLACE,
        placeName: placeName
    };
};

export const deletePlace = () => {
    return {
        tyle: DELETE_PLACE
    };
};

export const selectedPlace = (key) => {
    return {
        type: SELECTED_PLACE,
        placeKey: key
    };
};

export const deselectedPlace = () => {
    return {
        type: DESELECT_PLACE
    };
};