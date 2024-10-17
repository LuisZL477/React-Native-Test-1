import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Importamos Ionicons
import styles from '../src/assets/styles/GeneralStyles';

const Musclefocus = () => {
  const navigation = useNavigation();
  const [selectedButtons, setSelectedButtons] = useState([]);

  const toggleButton = (button) => {
    if (selectedButtons.includes(button)) {
      setSelectedButtons(selectedButtons.filter((item) => item !== button));
    } else {
      setSelectedButtons([...selectedButtons, button]);
    }
  };

  const buttons = [
    { label: 'Balanceado', id: 'balanceado', recommended: true },
    { label: 'Pecho', id: 'pecho' },
    { label: 'Espalda', id: 'espalda' },
    { label: 'Brazos', id: 'brazos' },
    { label: 'Piernas', id: 'piernas' },
    { label: 'Abdomen', id: 'abdomen' },
    { label: 'Glúteos', id: 'gluteos' },
  ];

  return (
    <LinearGradient colors={['#1CA6A6', '#24BFBF', '#D3F5FF']} style={styles.linearGradient}>
      <View style={styles.Screenstyle}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={30} color="#052838" />
        </TouchableOpacity>

        <Text style={styles.blueTitleText}>¿En qué grupo muscular{"\n"}quieres enfocarte?</Text>

        <View style={styles.muscleButtonsContainer}>
          {buttons.map((button) => (
            <TouchableOpacity
              key={button.id}
              style={[
                styles.muscleButton,
                selectedButtons.includes(button.id) && styles.selectedButton,
                button.id === 'gluteos' && { alignSelf: 'center' }
              ]}
              onPress={() => toggleButton(button.id)}
            >
              {/* Colocamos los elementos en fila */}
              <View style={styles.muscleButtonContent}>
                <Text style={styles.muscleButtonText}>{button.label}</Text>
                {selectedButtons.includes(button.id) && (
                  <View style={styles.checkCircle}>
                    <Ionicons name="checkmark" size={20} color="white" />
                  </View>
                )}
              </View>
              {button.recommended && <Text style={styles.recommendedText}>Recomendado</Text>}
            </TouchableOpacity>
          ))}
        </View>

        {/* Botón "Siguiente" */}
        <TouchableOpacity style={styles.transparentButton} onPress={() => navigation.navigate('Experience')}>
          <Text style={styles.buttonBlueText}>Siguiente</Text>
        </TouchableOpacity>

        {/* Barra de progreso */}
        <View style={styles.progressBarContainer}>
          <View style={[styles.progressBar, styles.activeStep]} />
          <View style={[styles.progressBar, styles.activeStep]} />
          <View style={styles.progressBar} />
          <View style={styles.progressBar} />
          <View style={styles.progressBar} />
          <View style={styles.progressBar} />
        </View>
      </View>
    </LinearGradient>
  );
};




export default Musclefocus;
