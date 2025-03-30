import React from 'react';
import { ImageBackground, Text, View } from 'react-native';

export default function InfoFeiticos({ route }) {
    const { spell, use } = route.params;

    return (
        <ImageBackground
            style={{ flex: 1 }}
            source={require('./assets/ppp.jpg')}
        >
            <Text style={{
                color: 'white',
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 40,
                paddingTop: 50,
                paddingBottom: 100
            }}>
                {spell}
            </Text>

            <Text style={{
                color: 'white',
                textAlign: 'center',
                fontWeight: 'semi-bold',
                fontSize: 35
            }}>
                {use}
            </Text>
        </ImageBackground>
    );
}
