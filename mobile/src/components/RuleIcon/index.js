import React from 'react';
import { TouchableOpacity, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import * as WebBrowser from 'expo-web-browser';
import { MaterialIcons } from '@expo/vector-icons';

export default function RuleIcon() {
  const navigation = useNavigation();

  function navigateToRule() {
    navigation.navigate('Rule');
  }

  async function handleRuleClick() {
    const response = await api.get('/champ/current');
    await WebBrowser.openBrowserAsync(response.data.rule_url);
  }

  return (
    <TouchableOpacity
      onPress={() => {
        Platform.OS === 'web' ? handleRuleClick() : navigateToRule();
      }}
      style={{ marginRight: 10 }}
    >
      <MaterialIcons name="picture-as-pdf" color="white" size={30} />
    </TouchableOpacity>
  );
}
