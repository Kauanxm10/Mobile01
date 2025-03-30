import React, { useState } from 'react';
import { Text, TextInput, ImageBackground, TouchableOpacity, Alert, View } from 'react-native';

export default function Livros({ navigation }) {
    const [livro, setLivro] = useState("");

    
    const getLivroData = async () => {
        if (livro.trim() === "") {
            Alert.alert("Por favor, digite um nome de livro");
            return;
        }

        try {
            const res = await fetch(`https://potterapi-fedeperin.vercel.app/pt/books?search=${livro}`);
            const data = await res.json();

            if (data.length === 0) {
                Alert.alert("Livro não encontrado.");
            } else {
                navigation.navigate('InfoLivros', {
                    titulo: data[0].title,
                    lancamento: data[0].releaseDate,
                    descricao: data[0].description,
                    imagem: data[0].cover, 
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
                Busque aqui seu livro
            </Text>

            <TextInput
                style={{
                    fontSize: 17, color: 'white', marginBottom: 20, backgroundColor: 'black', width: 300, height: 45, borderRadius: 8, paddingLeft: 10
                }}
                placeholder="Digite o nome do livro"
                placeholderTextColor="gray"
                value={livro}
                onChangeText={setLivro}
            />

            <TouchableOpacity onPress={getLivroData} style={{
                backgroundColor: 'white',
                padding: 10,
                borderRadius: 5,
                width: 150,
                alignItems: 'center',
            }}>
                <Text style={{ color: 'black', fontWeight: 'bold' }}>Buscar Livro</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
}
