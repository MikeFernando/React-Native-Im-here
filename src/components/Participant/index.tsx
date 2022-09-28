import { Text, TouchableOpacity, View } from "react-native";

import { styles } from './styles'
import * as T from './types'

export function Participant({ name, onRemove }: T.IParticipantProps){
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        {name}
      </Text>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Text style={styles.buttonText}>
          -
        </Text>
      </TouchableOpacity>
    </View>
  );
}