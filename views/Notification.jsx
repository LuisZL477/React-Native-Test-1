
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Switch } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../src/assets/styles/GeneralStyles';

const Notification = () => {
    const navigation = useNavigation();
    const [selectedExperience, setSelectedExperience] = useState(null); // Estado para el botón seleccionado
    const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false); // Estado para el switch

    const handleSelectExperience = (experience) => {
        setSelectedExperience(experience); // Actualiza el botón seleccionado
    };

    const toggleSwitch = () => setIsNotificationsEnabled(previousState => !previousState); // Controla el switch

    return (
        <LinearGradient colors={['#1CA6A6', '#24BFBF', '#D3F5FF']} style={styles.linearGradient}>
            <View style={styles.Screenstyle}>
                {/* Botón de regreso */}
                <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.backButtonRegi}>
                    <Ionicons name="chevron-back" size={30} color="#000" />
                </TouchableOpacity>

                {/* Título con el switch a la izquierda */}
                <View style={styles.notificationContainer}>
                <Text style={styles.blueTitleText}>Activar las notificaciones</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={isNotificationsEnabled ? '#f5dd4b' : '#f4f3f4'}
                        onValueChange={toggleSwitch}
                        value={isNotificationsEnabled}
                    />

                </View>

                {/* Botones de Frecuencia de Notificaciones */}
                <View style={styles.experienceButtonContainer}>
                    {['Bajo', 'Moderado', 'Intenso'].map((level, index) => (
                        <TouchableOpacity
                            key={index}
                            style={[
                                styles.experienceButton,
                                selectedExperience === level && styles.selectedButton,
                            ]}
                            onPress={() => handleSelectExperience(level)}>
                            <View style={styles.buttonContent}>
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={styles.buttonText}>{level}</Text>
                                    <Text style={styles.subText}>
                                        {level === 'Bajo' && 'Notificaciones solo para recordarte la fecha de entrenamiento.'}
                                        {level === 'Moderado' && 'Notificaciones durante los días de entrenamiento con consejos o frases motivadoras.'}
                                        {level === 'Intenso' && 'Notificaciones todos los días con consejos yfrases motivadoras.'}
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
                    <TouchableOpacity style={styles.transparentButton} onPress={() => navigation.navigate('Routinecustomization')}>
                        <Text style={styles.buttonBlueText}>Siguiente</Text>
                    </TouchableOpacity>
                </View>

                {/* Barra de progreso (con relleno en 3) */}
                <View style={styles.progressBarContainer}>
                    <View style={[styles.progressBar, styles.activeStep]} />
                    <View style={[styles.progressBar, styles.activeStep]} />
                    <View style={[styles.progressBar, styles.activeStep]} />
                    <View style={[styles.progressBar, styles.activeStep]} />
                    <View style={[styles.progressBar, styles.activeStep]} />
                    <View style={[styles.progressBar, styles.activeStep]} />
                </View>
            </View>
        </LinearGradient>
    );
};

export default Notification;