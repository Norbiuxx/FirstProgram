import React from 'react';
import {Text, View, Image, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = (props) => {
    return (
        <Card>
            <CardSection>
                <View>
                    <Text> Image placeholder</Text>
                </View>
                <View>
                    <Text>Title</Text>
                    <Text>Artist</Text>
                </View>

            </CardSection>
            <CardSection>
                <Text>
                    Portrait
                </Text>
            </CardSection>
            <CardSection>
                <Button>
                    Buy Now
                </Button>
            </CardSection>
        </Card>
    )
}

export default AlbumDetail;