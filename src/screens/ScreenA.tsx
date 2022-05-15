import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, View } from 'react-native';


const ScreenA: React.FC = () => {
  const navigation = useNavigation();
  
  function openScreen() {
    navigation.navigate('screenB', { name: 'Lucas' });
  }

  return (
    <View style={{flex: 1, backgroundColor: 'red', justifyContent: 'center' }}>
      <Button 
        title='Ir para tela B'
        onPress={openScreen}
      />
    </View>
  );
}

export { ScreenA };