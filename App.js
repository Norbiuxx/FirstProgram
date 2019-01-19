import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Components/Header';
import AlbumList from './Components/AlbumList';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Header headerText={'Albums'}/>
        <AlbumList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
