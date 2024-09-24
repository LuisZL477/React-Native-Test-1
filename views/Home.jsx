import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({

  HomeButton: {
    width:100,
    backgroundColor: '#052838',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    paddingVertical: 15,
  },
  whiteText: {
    fontSize: 16,
    color: '#fff', 
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
})


const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <LinearGradient colors={['#24BFBF', '#24BFBF', '#D3F5FF']} style={styles.linearGradient}>
    <View style={{ flex:1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <TouchableOpacity style={styles.HomeButton} onPress={() => navigation.navigate('Settings')}>
         <Text style={styles.whiteText}>Ir a Tareas</Text>
         </TouchableOpacity>
    </View>
    </LinearGradient>
  );
};

export default HomeScreen;
