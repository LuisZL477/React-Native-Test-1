import React from 'react';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native';
import { HiArrowLeft } from "react-icons/hi2";
import styles from '../src/assets/styles/GeneralStyles';
import Icon from 'react-native-vector-icons/Feather';


const Authentication = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient colors={['#24BFBF', '#24BFBF', '#D3F5FF']} style={styles.linearGradient}>
      <View style={styles.Screenstyle}>

    
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
    <Icon name="arrow-left" size={30} color="white" />
       </TouchableOpacity>
  
                

        <Text style={styles.titleText}>Regístrese para guardar {"\n"} su evolución</Text>
        
        <View style={styles.authenticationButtonsContainer}>
            <Text style={styles.text}>INICIA SESIÓN CON TU CUENTA</Text>
          {/* Botón de Google */}
          <TouchableOpacity style={styles.authButton}>
          <Image source={require('../src/assets/images/Google.png')} style={styles.buttonIcon} />
            <Text style={styles.authButtonText}>Continuar con Google</Text>
          </TouchableOpacity>

          {/* Botón de Facebook */}
          <TouchableOpacity style={styles.authButton}>
          <Image source={require('../src/assets/images/Facebook.png')} style={styles.buttonIcon} />
            <Text style={styles.authButtonText}>Continuar con Facebook</Text>
          </TouchableOpacity>

          {/* Botón de E-mail */}
          <TouchableOpacity style={styles.authButton}>
          <Image source={require('../src/assets/images/Gmail.png')} style={styles.buttonIcon} />
            <Text style={styles.authButtonText}>Continuar con el E-mail</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.separatorContainer}>
          <View style={styles.separator} />
          <Text style={styles.separatorText}>O</Text>
          <View style={styles.separator} />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.footerText}>Continuar sin cuenta</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};


export default Authentication;
