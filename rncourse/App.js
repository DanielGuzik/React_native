/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail'

export default class App extends Component {
  state = {
    places: [],
    selectedPlace: null
  };
  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random(), 
          name: placeName,
          image: {
            uri: "https://amp.thisisinsider.com/images/5a1c313e7101ad7c2f09b8d0-480-320.jpg"
          }
        })
      };
    });
  };

  placeDeletedHandler = () => {
    this.setState(prevState => {
        return {
          places: prevState.places.filter(place => {
            return place.key !== prevState.selectedPlace.key;
          }),
          selectedPlace:null
      };
    });
  };
  modalClosedHandler = () => {
    this.setState({
      selectedPlace:null
    });
  };

  placeSelectedHandler = key => {
    this.setState(prevState => {
      return {
        selectedPlace:prevState.places.find(place => {
          return place.key === key;
        })
      };
    });

  };

  render() {
    return ( 
      <View style={styles.container}>
      <PlaceDetail 
        selectedPlace={this.state.selectedPlace} 
        onItemDeleted={this.placeDeletedHandler} 
        onModalClosed={this.modalClosedHandler}
      />
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList 
          places={this.state.places} 
          onItemSelected={this.placeSelectedHandler}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",   
    alignItems: "center",
    marginTop: 20
  }
});