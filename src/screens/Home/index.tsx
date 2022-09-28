import {Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Participant } from "../../components/Participant";

import { styles } from "./styles";

export function Home(){
  const participants = [
    'Mike',
    'Fernando',
    'Renê',
    'Hamilton',
    'Sueli',
    'Garcez',
    'Jhon',
    'João',
    'Pedro',
    'Maria',
    'Pamela',
    'Camila',
    'Joyce'
  ]

  function handleAddParticipant() {
    if (participants.includes('Mike')) {
      return Alert.alert(
        'Participante Existe', 'já existe um participante com esse nome'
      )
    }
  }

  function handleRemoveParticipant(name: string) {
    Alert.alert('Remover', `remover participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert('Participante deletado!')
      },
      {
        text: 'Não',
        style: "cancel"
      }
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.nomeEvent}>Nome do Evento</Text>
      <Text style={styles.dateEvent}>24 de setembro de 2022</Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder='Nome do participante'
          placeholderTextColor='#6B6B6B'
        />

        <TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item} 
            onRemove={() => handleRemoveParticipant(item)} 
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes em sua lista
          </Text>
        )}
      />
    </View>
  );
}