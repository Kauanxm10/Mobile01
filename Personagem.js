import React, { useState } from 'react';
import { Text, TextInput, ImageBackground, TouchableOpacity, Alert, View } from 'react-native';

export default function Personagem({ navigation }) {
    const [personagem, setPersonagem] = useState("");

    const getPersonagemData = async () => {
        if (personagem.trim() === "") {
            Alert.alert("Por favor, digite um nome de personagem");
            return;
        }

        try {
            const res = await fetch(`https://potterapi-fedeperin.vercel.app/pt/characters?search=${personagem}`);
            const data = await res.json();

            if (data.length === 0) {
                Alert.alert("Personagem não encontrado.");
            } else {
                navigation.navigate('InfoPersonagem', {
                    nome: data[0].fullName,
                    apelido: data[0].nickname,
                    casa: data[0].hogwartsHouse,
                    nascimento: data[0].birthdate,
                    ator: data[0].interpretedBy,
                    imagem: data[0].image,
                });
            }
        } catch (error) {
            Alert.alert("Erro ao buscar dados. Tente novamente.");
            console.error(error);
        }
    };

    return (
        <ImageBackground
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
            source={require('./assets/ppp.jpg')}
        >
            <Text style={{
                color: 'white',
                textAlign: 'center',
                paddingBottom: 25,
                fontWeight: 'semibold',
                fontSize: 20
            }}>
                Busque aqui seu personagem
            </Text>

            <TextInput
                style={{
                    fontSize: 17, color: 'white', marginBottom: 20, backgroundColor: 'black', width: 300, height: 45, borderRadius: 8, paddingLeft: 10
                }}
                placeholder="Digite o nome do personagem"
                placeholderTextColor="gray"
                value={personagem}
                onChangeText={setPersonagem}
            />

            <TouchableOpacity onPress={getPersonagemData} style={{
                backgroundColor: 'white',
                padding: 10,
                borderRadius: 5,
                width: 150,
                alignItems: 'center',
            }}>
                <Text style={{ color: 'black', fontWeight: 'bold' }}>Buscar Personagem</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
}
