import React, {Component} from 'react';
import {ScrollView, Text} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';


class AlbumList extends Component {
    state = {
        albums: []
    };

    componentWillMount = () => {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({albums: response.date}));
    }

    render(){
        return (
            <ScrollView>
                <Text> {this.state.albums} </Text>
                <AlbumDetail />
            </ScrollView>
        )
    }

}

export default AlbumList;