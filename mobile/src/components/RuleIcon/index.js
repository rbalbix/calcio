import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

export default function RuleIcon() {
  const navigation = useNavigation();

  function navigateToRule() {
    navigation.navigate('Rule');
  }

  return (
    <TouchableOpacity
      onPress={() => {
        navigateToRule();
      }}
      style={{ marginRight: 10 }}
    >
      <MaterialIcons name='picture-as-pdf' color='white' size={30} />
    </TouchableOpacity>
  );
}
