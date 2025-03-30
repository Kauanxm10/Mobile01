import React, { useState } from 'react';
import { Text, TextInput, ImageBackground, TouchableOpacity, Alert, View } from 'react-native';

export default function Feiticos({ navigation }) {
    const [feitico, setFeitico] = useState("");
    const [resultado, setResultado] = useState(null);

    const getData = async () => {
        if (feitico.trim() === "") {
            Alert.alert("Por favor, digite um feitiço");
            return;
        }

        try {
            const res = await fetch(`https://potterapi-fedeperin.vercel.app/pt/spells?search=${feitico}`);
            const data = await res.json();

            if (data.length === 0) {
                Alert.alert("Feitiço não encontrado.");
            } else {
                navigation.navigate('InfoFeiticos', {
                    spell: data[0].spell,
                    use: data[0].use,
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
                Digite um feitiço
            </Text>

            <TextInput
                style={{
                    fontSize: 17, color: 'white', marginBottom: 20, backgroundColor: 'black', width: 300, height: 45, borderRadius: 8, paddingLeft: 10
                }}
                placeholder="Digite um feitiço"
                placeholderTextColor="gray"
                value={feitico}
                onChangeText={setFeitico}
            />

            <TouchableOpacity onPress={getData} style={{
                backgroundColor: 'white',
                padding: 10,
                borderRadius: 5,
                width: 150,
                alignItems: 'center',
            }}>
                <Text style={{ color: 'black', fontWeight: 'bold' }}>Buscar Feitiço</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
}
