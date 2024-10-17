import React, {useEffect} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../src/assets/styles/GeneralStyles';
import Icon from 'react-native-vector-icons/Feather';

const Aim = () => {
    const navigation = useNavigation();

    useEffect(() => {
        showAlert();
      }, []);
      const showAlert = () => {
        Alert.alert(
          'Entrenamiento Personalizado',
          '¡Basándonos en tus objetivos y necesidades, personalizaremos un programa de entrenamiento para ti!',
          [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
        );
      };
    
    

    return (
        <LinearGradient colors={['#1CA6A6', '#24BFBF', '#D3F5FF']} style={styles.linearGradient}>
            <View style={styles.Screenstyle}>

            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={30} color="#052838" />
        </TouchableOpacity>


        <Text style={styles.blueTitleText}>¿Cuál es tu objetivo?</Text>


        <View style={styles.aimButtonContainer}>
                    <TouchableOpacity style={styles.objectiveButton} onPress={() => navigation.navigate('Musclefocus')}>
                        <Text style={styles.buttonText}>Hipertrofia</Text>
                        <Image source={require('../src/assets/images/hipertrofia.png')} style={styles.iconImage} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.objectiveButton} onPress={() => navigation.navigate('Musclefocus')}>
                        <Text style={styles.buttonText}>Definición muscular</Text>
                        <Image source={require('../src/assets/images/Definicionmuscular.png')} style={styles.iconImage} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.objectiveButton} onPress={() => navigation.navigate('Musclefocus')}>
                        <Text style={styles.buttonText}>Perder peso</Text>
                        <Image source={require('../src/assets/images/Perderpeso.png')} style={styles.iconImage} />
                    </TouchableOpacity>
                </View>

        
        
        <View style={styles.transparentButtonsContainer}>
        <TouchableOpacity style={styles.transparentButton} onPress={() => navigation.navigate('Musclefocus')} >
          <Text style={styles.buttonBlueText}>Siguiente</Text>
        </TouchableOpacity>
        
        </View>


         {/* Adorno de progreso */}
         <View style={styles.progressBarContainer}>
                    <View style={[styles.progressBar, styles.activeStep]}></View>
                    <View style={styles.progressBar}></View>
                    <View style={styles.progressBar}></View>
                    <View style={styles.progressBar}></View>
                    <View style={styles.progressBar}></View>
                    <View style={styles.progressBar}></View>
                    
         </View>


            </View>
        </LinearGradient>
    );
};


export default Aim;