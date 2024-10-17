import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TextInput, TouchableOpacity, StyleSheet, Alert, Text, View, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { Picker } from '@react-native-picker/picker';
import styles from '../src/assets/styles/GeneralStyles';




const Data = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [selectedGenero, setSelectedGenero] = useState('');
  const [selectedEdad, setSelectedEdad] = useState('');
  const [selectedPeso, setSelectedPeso] = useState('');
  const [selectedAltura, setSelectedAltura] = useState('');

  const listGenero = ['Masculino', 'Femenino', 'Otro'];

  useEffect(() => {
    showAlert();
  }, []);

  const showAlert = () => {
    Alert.alert(
      'Iniciemos',
      'Lo primero es que necesitamos saber algunos datos sobre usted. Esta información será utilizada para crear una experiencia personalizada para que alcance sus objetivos.',
      [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
    );
  };

  return (
    <LinearGradient colors={['#24BFBF', '#24BFBF', '#D3F5FF']} style={styles.linearGradient}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.backButton}>
        <Ionicons name="arrow-back" size={30} color="#052838" />
      </TouchableOpacity>

      {/* Logo en la esquina superior derecha */}
      <View style={styles.logoContainer2}>
        <Image source={require('../src/assets/images/GYM4U.png')} style={styles.logo2} />
      </View>

      {/* Texto debajo de la flecha */}
      <Text style={styles.text2}>Complete la siguiente información</Text>

      {/* Título para el Input */}
      <Text style={styles.textData}>Nombre</Text>
      {/* Input para nombre */}
      <TextInput
        style={styles.input}
        placeholder="Ingrese su nombre"
        placeholderTextColor="#fff"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      {/* Picker de Género */}
      <Text style={styles.textData}>Género</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedGenero}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedGenero(itemValue)}
          dropdownIconColor="#fff"
        >
          <Picker.Item label="Seleccione su género" value="" />
          {listGenero.map((genero, index) => (
            <Picker.Item key={index} label={genero} value={genero} />
          ))}
        </Picker>
      </View>

      {/* Picker de Edad */}
      <Text style={styles.textData}>Edad</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedEdad}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedEdad(itemValue)}
          dropdownIconColor="#fff"
        >
          <Picker.Item label="Seleccione su edad" value="" />
          {Array.from({ length: 100 }, (_, index) => (
            <Picker.Item key={index + 1} label={`${index + 1}`} value={`${index + 1}`} />
          ))}
        </Picker>
      </View>

      {/* Picker de Peso */}
      <Text style={styles.textData}>Peso</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedPeso}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedPeso(itemValue)}
          dropdownIconColor="#fff"
        >
          <Picker.Item label="Seleccione su peso en kg" value="" />
          {Array.from({ length: 200 }, (_, index) => (
            <Picker.Item key={index + 1} label={`${index + 1}`} value={`${index + 1}`} />
          ))}
        </Picker>
      </View>

      {/* Picker de Altura */}
      <Text style={styles.textData}>Altura</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedAltura}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedAltura(itemValue)}
          dropdownIconColor="#fff"
        >
          <Picker.Item label="Seleccione su altura en cm" value="" />
          {Array.from({ length: 101 }, (_, index) => (
            <Picker.Item key={index + 120} label={`${index + 120}`} value={`${index + 120}`} />
          ))}
        </Picker>
      </View>

      {/* Botón "Siguiente" */}
      <TouchableOpacity style={styles.transparentButton} onPress={() => navigation.navigate('Aim')}>
        <Text style={styles.buttonBlueText}>Siguiente</Text>
      </TouchableOpacity>
      <View style={styles.progressBarContainer}>
                    <View style={styles.progressBar} />
                    <View style={styles.progressBar} />
                    <View style={styles.progressBar} />
                    <View style={styles.progressBar} />
                    <View style={styles.progressBar} />
                    <View style={styles.progressBar} />
      </View>
    </LinearGradient>
  );
};

export default Data;