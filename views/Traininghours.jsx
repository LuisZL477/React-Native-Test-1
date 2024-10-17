import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../src/assets/styles/GeneralStyles';

const Hours = () => {
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
    { label: 'Lunes', id: 'lunes', isRightButton: false },
    { label: '15:29', id: '15:29', isRightButton: true },
    { label: 'Jueves', id: 'jueves', isRightButton: false },
    { label: '15:30', id: '15:30', isRightButton: true },
    { label: 'Viernes', id: 'viernes', isRightButton: false },
    { label: '15:32', id: '15:32', isRightButton: true },
    { label: 'Sábado', id: 'sabado', isRightButton: false },
  ];

  return (
    <LinearGradient colors={['#1CA6A6', '#24BFBF', '#D3F5FF']} style={styles.linearGradient}>
      <View style={styles.Screenstyle}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={30} color="#052838" />
        </TouchableOpacity>

        <Text style={styles.blueTitleText}>¿En qué grupo muscular{"\n"}quieres enfocarte?</Text>

        <View style={styles.muscleButtonsContainer}>
          {buttons.map((button, index) => (
            <TouchableOpacity
              key={button.id}
              style={[
                styles.muscleButton,
                button.isRightButton ? styles.rightButton : styles.leftButton,
                selectedButtons.includes(button.id) && (button.isRightButton ? styles.selectedRightButton : styles.selectedButton),
              ]}
              onPress={() => toggleButton(button.id)}
            >
              <View style={styles.muscleButtonContent}>
                <Text 
                  style={[
                    styles.muscleButtonText,
                    button.isRightButton && styles.rightButtonText,
                  ]}
                >
                  {button.label}
                </Text>
                {selectedButtons.includes(button.id) && (
                  <View style={button.isRightButton ? styles.checkBlueCircle : styles.checkCircle}>
                    <Ionicons name="checkmark" size={20} color={button.isRightButton ? '#052838' : 'white'}  />
                  </View>
                )}
              </View>
              {button.recommended && <Text style={styles.recommendedText}>Recomendado</Text>}
            </TouchableOpacity>
          ))}
        </View>

        {/* Botón "Siguiente" */}
        <TouchableOpacity style={styles.transparentButton} onPress={() => navigation.navigate('Notification')}>
          <Text style={styles.buttonBlueText}>Siguiente</Text>
        </TouchableOpacity>

        {/* Barra de progreso */}
        <View style={styles.progressBarContainer}>
          <View style={[styles.progressBar, styles.activeStep]} />
          <View style={[styles.progressBar, styles.activeStep]} />
          <View style={[styles.progressBar, styles.activeStep]} />
          <View style={[styles.progressBar, styles.activeStep]} />
          <View style={[styles.progressBar, styles.activeStep]} />
          <View style={styles.progressBar} />
        </View>
      </View>
    </LinearGradient>
  );
};

export default Hours;
