import React from 'react';
import {Button, 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity,
  Dimensions,
  FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  container:  {
    width: '100%',
    padding: 20,

  },
  title: {
    fontSize: 20,
    color: '#052838',
  },
  text: {
    fontSize: 16,
    color: '#052838'

  },
  whiteText: {
    fontSize: 16,
    color: '#fff', 
  },
  TextInput: {
    borderWidth:1,
    borderColor: '#6f6f6f',
    width: Dimensions.get('screen').width * 0.6,
    borderRadius: 15,
    paddingLeft: 15,
    marginRight: 20
  
  },
  inputContainer: {
    marginTop: 20,
    flexDirection: 'row',
    marginRight: 20,
    justifyContent: 'space-between'
    
  },
  addButton: {
    width: Dimensions.get('screen').width *0.25,
    backgroundColor: '#052838',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
   
  },
  HomeButton: {
    width:100,
    backgroundColor: '#052838',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    paddingVertical: 15,
  },
  scrollContainer: {
    marginTop: 20,

  },
  itemContainer: {
    paddingVertical: 20,
    borderBottomColor: '#e4e4e4',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textDone: {
    fontSize: 16,
    color: '#052838',
    textDecorationLine: 'line-through'

  },
  removeButton: {
    width: 100,
    paddingVertical: 15,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent', // Fondo transparente
    borderWidth: 2,                // Grosor del borde
    borderColor: '#052838', 
  },
  buttonText: {
    color: '#052838',               // Color azul para el texto
    fontSize: 16,
  },
 
});

const task = [
  {
    title: 'Alimentar al perro',
    done: true,
    date: new Date(),
  },
  {
    title: 'Salir a correr',
    done: false,
    date: new Date(),
  },
  {
    title: 'Nueva tarea',
    done: true,
    date: new Date(),
  }
];




const SettingsScreen = () => {
  const navigation = useNavigation();


  function renderItem({item}){
    return (
    <View style={styles.itemContainer}>
      <TouchableOpacity>
        <Text style={item.done ? styles.textDone : styles.text}>{item.title}</Text>
        <Text style={ item.done ? styles.textDone : styles.text}>{item.date.toLocaleDateString()}</Text>
       </TouchableOpacity>
          {
          item.done &&  ( 
          <TouchableOpacity style={styles.removeButton}>
            <Text style={styles.buttonText}>Eliminar</Text>
            </TouchableOpacity>)
          }
       </View>
       );
  }


  return (

    <LinearGradient colors={['#24BFBF', '#24BFBF', '#D3F5FF']} style={styles.linearGradient}>
    <View style={styles.container}>
      <Text style={styles.title}>Mis tareas por hacer</Text>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Agrega una nueva tarea" style={styles.TextInput}
         />
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.whiteText}>Agregar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.scrollContainer}>
          <FlatList renderItem={renderItem} data={task} />
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center'}}>
      <Text>Settings</Text>
      <TouchableOpacity style={styles.HomeButton} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.whiteText}>Ir a Home</Text>
      </TouchableOpacity>
    </View>
    </View>
    </LinearGradient>
  );

};

export default SettingsScreen;
