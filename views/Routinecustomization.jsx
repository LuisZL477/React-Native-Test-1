import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import styles from '../src/assets/styles/GeneralStyles';
import styles2 from '../src/assets/styles/GeneralStyles2';
import WeekButtons from './Weekbottons';

const RoutineCustomization = () => {
    const navigation = useNavigation();

    return (
        <LinearGradient colors={['#D3F5FF', '#D3F5FF']} style={styles2.linearGradient}>
            <View style={styles.Screenstyle}>

                {/* Botón de retroceso */}
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles2.backButton}>
                    <Icon name="arrow-left" size={30} color="#052838" />
                </TouchableOpacity>

                {/* Título principal */}
                <Text style={styles2.mainTitle}>Personalizar tu Rutina</Text>

                {/* Subtítulo */}
                <Text style={styles2.subTitle}>
                    <Text style={styles2.subTitle}>Tono muscular - </Text>
                    <Text style={styles2.subTitle}>Pecho</Text>
                </Text>

                <Text style={styles2.plainText}>Fase de entrenamiento</Text>

                {/* Barra de progreso */}
                <View style={styles2.progressBarContainer}>
                    <View style={[styles2.progressBar, styles.activeStep]}></View>
                    <View style={styles2.progressBar}></View>
                    <View style={styles2.progressBar}></View>
                    <View style={styles2.progressBar}></View>
                </View>

                {/* Textos debajo de la barra de progreso */}
                <View style={styles2.progressLabelsContainer}>
                    <Text style={styles2.progressLabel}>Fase 1            Fase 2            Fase 3            Fase 4</Text>
                </View>

                <Text style={styles2.phaseText}>Fase 1: Fuerza</Text>

                {/* Raya horizontal */}
                <View style={styles2.horizontalLine} />

                {/* Scroll horizontal para los botones de semana */}
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={true} style={styles2.scrollViewStyle}>
                    <View style={styles2.weeksContainer}>
                        <TouchableOpacity style={styles2.weekButton} onPress={() => navigation.navigate('Routinecustomization2')}>
                            <Text style={styles2.weekButtonText}>Semana 1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles2.weekButton}>
                            <Text style={styles2.weekButtonText}>Semana 2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles2.weekButton}>
                            <Text style={styles2.weekButtonText}>Semana 3</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles2.weekButton}>
                            <Text style={styles2.weekButtonText}>Semana 4</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles2.weekButton}>
                            <Text style={styles2.weekButtonText}>Semana 5</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles2.weekButton}>
                            <Text style={styles2.weekButtonText}>Semana 6</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles2.weekButton}>
                            <Text style={styles2.weekButtonText}>Semana 7</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

                <Text style={styles2.centralText}>Seleccione una semana para {"\n"} checar tus ejercicios</Text>

                {/* Imagen debajo del texto */}
                <Image 
                    source={require('../src/assets/images/Pesas.png')} // Reemplaza con la ruta correcta
                    style={styles2.imageStyle} // Aplica tus estilos aquí
                />
            </View>
        </LinearGradient>
    );
};

export default RoutineCustomization;
