import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import styles from '../src/assets/styles/GeneralStyles';

const GymApp = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient colors={['#24BFBF', '#24BFBF', '#D3F5FF']} style={styles.linearGradient}>
      
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../src/assets/images/GYM4U.png')}
          style={{ width: 300, height: 300 }}
        />    
      </View>

      {/* Botones */}
      <View style={styles.transparentButtonsContainer}>
        <TouchableOpacity style={styles.transparentButton} onPress={() => navigation.navigate('Data')} >
          <Text style={styles.buttonBlueText}>Empezar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.transparentButton} onPress={() => navigation.navigate('Authentication')}>
          <Text style={styles.buttonBlueText}>Ya tengo una cuenta</Text>
        </TouchableOpacity>
      </View>

    </LinearGradient>
  );
};



export default GymApp;
