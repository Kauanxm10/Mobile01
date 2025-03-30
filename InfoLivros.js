import React from 'react';
import { ImageBackground, Text, View, Image, ScrollView } from 'react-native';

export default function InfoLivros({ route }) {
    const { titulo, lancamento, descricao, imagem } = route.params;

    return (
        <ImageBackground
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
            source={require('./assets/ppp.jpg')}
        >

            <ScrollView
                contentContainerStyle={{ alignItems: 'center', paddingBottom: 20 }}
                showsVerticalScrollIndicator={false}
            >
                  <Text
                    style={{
                        color: 'white',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: 22,
                        paddingBottom: 10,
                        paddingTop:20
                    }}
                >
                    {titulo}
                </Text>

                <Image
                    style={{
                        width: 190,
                        height: 300,
                        borderColor: 'white',
                        borderWidth: 2,
                        marginBottom: 20,
                    }}
                    source={{ uri: imagem }}
                />


              


                <Text
                    style={{
                        color: 'white',
                        textAlign: 'center',
                        fontWeight: 'semibold',
                        fontSize: 18,
                        paddingBottom: 15,
                    }}
                >
                    ( {lancamento || 'Desconhecido'} )
                </Text>


                <View
                    style={{
                        paddingStart: 12,
                        borderRadius: 12,
                        borderWidth: 2,
                        width: 300,
                        backgroundColor: 'black',
                        opacity: 0.7,
                        padding: 20,
                    }}
                >
                    <Text
                        style={{
                            color: 'white',
                            fontWeight: 'semibold',
                            fontSize: 17,
                            textAlign: 'center',
                        }}
                    >
                        {descricao || 'Descrição não disponível'}
                    </Text>
                </View>
            </ScrollView>
        </ImageBackground>
    );
}
