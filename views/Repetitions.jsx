import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import styles3 from '../src/assets/styles/GeneralStyles3';

const Repetitions = () => {
    const navigation = useNavigation();

    // Estados para manejar las series, repeticiones, descansos
    const [numSeries, setNumSeries] = useState(2);
    const [restTime, setRestTime] = useState(60);
    const [seriesData, setSeriesData] = useState([
        { reps: 12, weight: '' },
        { reps: 8, weight: '' },
    ]);

    const updateSeries = (index, field, value) => {
        const updatedSeries = [...seriesData];
        updatedSeries[index][field] = value;
        setSeriesData(updatedSeries);
    };

    return (
        <LinearGradient colors={['#D3F5FF', '#D3F5FF']} style={styles3.linearGradient}>
            <View style={styles3.Screenstyle}>
                {/* Botón de cierre (X) */}
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles3.backButton}>
                    <Icon name="x" size={30} color="#052838" />
                </TouchableOpacity>

                {/* Título principal */}
                <Text style={styles3.mainTitle}>Elija un Ejercicio</Text>

                {/* Contenedor de la imagen y el texto */}
                <View style={styles3.exerciseContainer}>
                    <Image
                        source={require('../src/assets/images/Ejercicio128.png')} // Asegúrate de usar la imagen correcta
                        style={styles3.exerciseImage}
                    />
                    <Text style={styles3.exerciseDescription}>
                        Apoye una de las rodillas en un asiento recto e incline el tronco hacia adelante apoyando en la mano de apoyo en el asiento. Sostenga una...
                    </Text>
                </View>

                {/* Raya horizontal */}
                <View style={styles3.horizontalLine} />

                {/* Tipo de serie */}
                
                <View style={styles3.rowContainer2}>
                <Text style={styles3.seriesText}>Tipo de Serie</Text>
                </View>
                <View style={styles3.buttonRepContainer}>
                    <TouchableOpacity style={styles3.repBlueButton}>
                        <Text style={styles3.repButtonwhiteText}>Reps o series</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles3.repButton}>
                        <Text style={styles3.repButtonText}>Tiempo</Text>
                    </TouchableOpacity>
                </View>

                {/* Contenedor que agrupa el texto "Número de serie" y el contador */}
                <View style={styles3.rowContainer}>
                    {/* Texto "Número de serie" */}
                    <Text style={styles3.seriesText}>Número de serie</Text>

                    {/* Contenedor del contador */}
                    <View style={styles3.counterContainer}>
                        <TouchableOpacity
                            style={styles3.counterButton}
                            onPress={() => setNumSeries(Math.max(1, numSeries - 1))}
                        >
                            <View style={styles3.iconContainer}>
                                <Icon name="minus" size={20} color="#FFFFFF" />
                            </View>
                        </TouchableOpacity>
                        <Text style={styles3.counterText}>{numSeries}</Text>
                        <TouchableOpacity
                            style={styles3.counterButton}
                            onPress={() => setNumSeries(numSeries + 1)}
                        >
                            <View style={styles3.iconContainer}>
                                <Icon name="plus" size={20} color="#FFFFFF" />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Descanso entre serie */}
                <View style={styles3.rowContainer}>
                    <Text style={styles3.seriesText}>Descanso entre series</Text>
                    <View style={styles3.counterContainer}>
                        <TouchableOpacity
                            style={styles3.counterButton}
                            onPress={() => setRestTime(Math.max(30, restTime - 30))}
                        >
                            <View style={styles3.iconContainer}>
                                <Icon name="minus" size={20} color="#FFFFFF" />
                            </View>
                        </TouchableOpacity>
                        <Text style={styles3.counterText}>{restTime}s</Text>
                        <TouchableOpacity
                            style={styles3.counterButton}
                            onPress={() => setRestTime(restTime + 30)}
                        >
                            <View style={styles3.iconContainer}>
                                <Icon name="plus" size={20} color="#FFFFFF" />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>


                {/* Series */}
                <View style={styles3.rowContainer}>
                <Text style={styles3.seriesText}>Series</Text>
                </View>
                {seriesData.map((serie, index) => (
                    <View key={index} style={styles3.seriesContainer}>
                        <Text style={styles3.seriesIndex}>{index + 1}.</Text>
                        <TextInput
                            style={styles3.input}
                            keyboardType="numeric"
                            value={serie.reps.toString()}
                            onChangeText={(value) => updateSeries(index, 'reps', value)}
                            placeholder="Reps"
                        />
                        <TextInput
                            style={styles3.input}
                            keyboardType="numeric"
                            value={serie.weight}
                            onChangeText={(value) => updateSeries(index, 'weight', value)}
                            placeholder="Carga (kg)"
                            placeholderTextColor="#052838" 
                        />
                    </View>
                ))}

                {/* Botón Guardar */}
                <TouchableOpacity style={styles3.saveButton}>
                    <Text style={styles3.saveButtonText}>Guardar</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
};

export default Repetitions;
