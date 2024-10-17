import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'; 
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import styles from '../src/assets/styles/GeneralStyles';
import styles2 from '../src/assets/styles/GeneralStyles2';

const Routinecustomization2 = () => {
    const navigation = useNavigation();

    return (
        <LinearGradient colors={['#D3F5FF', '#D3F5FF']} style={styles2.linearGradient}>
            <View style={styles2.Screenstyle}>

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
                    <View style={[styles2.progressBar, styles2.activeStep]}></View>
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
                        <TouchableOpacity style={styles2.weekBlueButton} onPress={() => navigation.navigate('Routinecustomization2')}>
                            <Text style={styles2.weekButtonWhiteText}>Semana 1</Text>
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

                <ScrollView style={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
              <View style={styles2.container}>
                {/* Tu contenido */}
                <View style={styles2.leftColumn}>
                  <View style={styles2.verticalLine} />
                  <View style={styles2.pointContainer}>
                    <View style={styles2.point} />
                    <View style={styles2.turquisePoint} />
                    <View style={styles2.turquisePoint} />
                  </View>
                </View>

                      <View style={styles2.rightColumn}>
                        {/* Ejercicio 1 */}
                        <TouchableOpacity 
                                style={styles2.exerciseCard} 
                                onPress={() => navigation.navigate('Repetitions')}
                            >
                              <View style={styles2.textContainer}>
                                <Text style={styles2.excersizeSubTitle}>Tono muscular - Piernas</Text>
                                <Text style={styles2.exerciseTitle}>Piernas y Abdomen</Text>
                                <Text style={styles2.exerciseInfo}>Bajo - 47 min - 8 Ejercicios</Text>
                              </View>
                              <View style={styles2.playButton}>
                                <Icon name="play-circle" size={24} color="white" />
                              </View>
                      </TouchableOpacity>


                  {/* Ejercicio 2 */}
                  <View style={styles2.exerciseTurquiseCard}>
                    <View style={styles2.textContainer}>
                      <Text style={styles2.excersizeBlueSubTitle}>Tono muscular - Pecho</Text>
                      <Text style={styles2.exerciseTitle}>Pecho y Espalda</Text>
                      <Text style={styles2.exerciseInfo}>Bajo - 30 min - 6 Ejercicios</Text>
                    </View>
                    <TouchableOpacity style={styles2.playButton}>
                      <Icon name="play-circle" size={24} color="#052838" />
                    </TouchableOpacity>
                  </View>

                  {/* Ejercicio 3 */}
                  <View style={styles2.exerciseTurquiseCard}>
                    <View style={styles2.textContainer}>
                      <Text style={styles2.excersizeBlueSubTitle}>Tono muscular - Pecho</Text>
                      <Text style={styles2.exerciseTitle}>Pecho y Espalda</Text>
                      <Text style={styles2.exerciseInfo}>Bajo - 30 min - 6 Ejercicios</Text>
                    </View>
                    <TouchableOpacity style={styles2.playButton}>
                      <Icon name="play-circle" size={24} color="#052838" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
                            <View style={styles2.rowContainer}>
                                <Text style={styles2.phaseText2}>Fase 2: Fuerza</Text>
                                <Icon name="chevron-down" size={24} color="#000" />
                            </View>

                            {/* Línea horizontal */}
                            <View style={styles2.horizontalLineContainer}>
                                <View style={styles2.horizontalLine} />
                            </View>

                            <View style={styles2.rowContainer}>
                                <Text style={styles2.phaseText2}>Fase 3: Fuerza</Text>
                                <Icon name="chevron-down" size={24} color="#000" />
                            </View>

                            <View style={styles2.horizontalLineContainer}>
                                <View style={styles2.horizontalLine} />
                            </View>

                            <View style={styles2.rowContainer}>
                                <Text style={styles2.phaseText2}>Fase 4: Fuerza</Text>
                                <Icon name="chevron-down" size={24} color="#000" />
                            </View>

                            <View style={styles2.horizontalLineContainer}>
                                <View style={styles2.horizontalLine} />
                            </View>
</ScrollView>
                  
            </View>
        </LinearGradient>
    );
};


export default Routinecustomization2;
