import React from 'react';
import { ImageBackground, Text, View, Image } from 'react-native';

export default function Inicio({ navigation }) {
    return (
        <ImageBackground
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 }}
            source={require('./assets/pp.jpg')}
        >

            <Image
                style={{
                    width: 250, height: 250, marginTop:20
                }}
                source={require('./assets/iconn.png')}
            />

            <View
                style={{
                    padding: 20, backgroundColor: 'rgba(0, 0, 0, 0.6)', borderRadius: 12, borderWidth: 2, borderColor: 'white', width: '80%', textAlign: 'center',
                }}
            >
                <Text
                    style={{
                        color: 'white', fontWeight: '600', fontSize: 18, textAlign: 'center',
                    }}
                >
                    Bem-vindo à página inicial, um portal para o universo mágico de Harry Potter.
                    Explore feitiços, personagens e livros da saga, e mergulhe no mundo encantado de Hogwarts.
                    Prepare-se para descobrir informações fascinantes e interagir com os elementos mais icônicos da série!
                </Text>
            </View>
        </ImageBackground>
    );
}
