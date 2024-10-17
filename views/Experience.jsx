/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../src/assets/styles/GeneralStyles';
import Icon from 'react-native-vector-icons/Feather';

const Experience = () => {
    const navigation = useNavigation();
    const [selectedExperience, setSelectedExperience] = useState(null); // Estado para el botón seleccionado

    const handleSelectExperience = (experience) => {
        setSelectedExperience(experience); // Actualiza el botón seleccionado
    };

    return (
        <LinearGradient colors={['#1CA6A6', '#24BFBF', '#D3F5FF']} style={styles.linearGradient}>
            <View style={styles.Screenstyle}>
                {/* Botón de regreso */}
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                   <Icon name="arrow-left" size={30} color="#052838" />
                </TouchableOpacity>

                {/* Título */}
                <Text style={styles.blueTitleText}>¿Cuál es tu experiencia?</Text>

                {/* Botones de experiencia */}
                <View style={styles.experienceButtonContainer}>
                    {['Principiante', 'Intermedio', 'Avanzado'].map((level, index) => (
                        <TouchableOpacity
                            key={index}
                            style={[
                                styles.experienceButton,
                                selectedExperience === level && styles.selectedButton,
                            ]}
                            onPress={() => handleSelectExperience(level)}>
                            <View style={styles.buttonContent}>
                                <View style={{ flexDirection: 'column'}}>
                                    <Text style={styles.buttonText}>{level}</Text>
                                    <Text style={styles.subText}>
                                        {level === 'Principiante' && 'Menos de 6 meses de experiencia'}
                                        {level === 'Intermedio' && 'Más de 6 meses y menos de 2 años'}
                                        {level === 'Avanzado' && 'Más de 2 años'}
                                    </Text>
                                </View>
                                {selectedExperience === level && (
                                    <Ionicons name="checkmark-circle" size={24} color="white" />
                                )}
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Botón transparente */}
                <View style={styles.transparentButtonsContainer}>
                    <TouchableOpacity style={styles.transparentButton} onPress={() => navigation.navigate('Days')}>
                        <Text style={styles.buttonBlueText}>Siguiente</Text>
                    </TouchableOpacity>
                </View>

                {/* Barra de progreso (con relleno en 3) */}
                <View style={styles.progressBarContainer}>
                    <View style={[styles.progressBar, styles.activeStep]} />
                    <View style={[styles.progressBar, styles.activeStep]} />
                    <View style={[styles.progressBar, styles.activeStep]} />
                    <View style={styles.progressBar} />
                    <View style={styles.progressBar} />
                    <View style={styles.progressBar} />
                </View>
            </View>
        </LinearGradient>
    );
};

export default Experience;
