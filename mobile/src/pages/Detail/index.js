import React from 'react';
import { View, Text } from 'react-native';

export default function Detail({ route }) {
  const { category } = route.params;

  console.log(category.category);

  return (
    <View>
      <Text>Cat: {category.category}</Text>
    </View>
  );
}
