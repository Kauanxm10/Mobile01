import React from 'react';
import { ImageBackground, Text, View, Image } from 'react-native';

export default function InfoPersonagem({ route }) {
    const { nome, apelido, casa, nascimento, ator, imagem } = route.params;

    return (
        <ImageBackground
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
            source={require('./assets/ppp.jpg')}
        >
            <Image
                style={{
                    width: 160,
                    height: 230,
                    borderRadius: 40,
                    borderWidth: 1,
                    borderColor: 'white',
                }}
                source={{ uri: imagem }}
            />
            <View
                style={{
                    paddingStart: 12,
                    borderRadius: 12,
                    borderWidth: 2,
                    width: 300,
                    height: 350,
                    backgroundColor: 'black',
                    opacity: 0.7,
                    marginTop: 20,
                    padding: 20,
                }}
            >
                <Text
                    style={{
                        color: 'white',
                        paddingBottom: 40,
                        fontWeight: 'bold',
                        fontSize: 20,
                    }}
                >
                    Nome: {nome}
                </Text>
                <Text
                    style={{
                        color: 'white',
                        paddingBottom: 40,
                        fontWeight: 'bold',
                        fontSize: 20,
                    }}
                >
                    Apelido: {apelido || 'Não disponível'}
                </Text>
                <Text
                    style={{
                        color: 'white',
                        paddingBottom: 40,
                        fontWeight: 'bold',
                        fontSize: 20,
                    }}
                >
                    Casa: {casa || 'Não disponível'}
                </Text>
                <Text
                    style={{
                        color: 'white',
                        paddingBottom: 40,
                        fontWeight: 'bold',
                        fontSize: 20,
                    }}
                >
                    Nascimento: {nascimento || 'Não disponível'}
                </Text>
                <Text
                    style={{
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 20,
                    }}
                >
                    Ator: {ator || 'Não disponível'}
                </Text>
            </View>
        </ImageBackground>
    );
}
