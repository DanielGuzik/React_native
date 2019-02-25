import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE } from "../actions/actionTypes";

const initialState = {
    places: [],
    selectedPlace: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            return {
                ...state, //Copy old prop State
                places: state.places.concat({
                    key: Math.random(), 
                    name: action.placeName,
                    image: {
                      uri: "https://amp.thisisinsider.com/images/5a1c313e7101ad7c2f09b8d0-480-320.jpg"
                    }
                })
            };
            case DELETE_PLACE: 
                return {
                    ...state,
                    places: state.places.filter(place => {
                        return place.key !== state.selectedPlace.key;
                    }),
                    selectedPlace:null
                };
            case SELECT_PLACE {
                return {
                    ...state,
                    selectedPlace:state.places.find(place => {
                        return place.key === action.placeKey;
                    })
                };
            }
            case DELETE_PLACE {
                return {
                    ...state,
                    selectedPlace:null
                };
            }
        default:
            return state;
    }
}

export default reducer;