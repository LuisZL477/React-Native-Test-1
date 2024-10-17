import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

const WeekButtons = ({ onPressWeek, activeWeek }) => {
  const weekList = ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4', 'Semana 5', 'Semana 6', 'Semana 7'];

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollViewStyle}>
      <View style={styles.weeksContainer}>
        {weekList.map((week, index) => (
          <TouchableOpacity
            key={index}
            style={activeWeek === index ? styles.weekBlueButton : styles.weekButton}
            onPress={() => onPressWeek(index)}
          >
            <Text style={activeWeek === index ? styles.weekButtonWhiteText : styles.weekButtonText}>
              {week}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = {
  scrollViewStyle: {
    marginVertical: 10,
    height: 60,
  },
  weeksContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  weekButton: {
    borderWidth: 2,
    borderColor: '#052838',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: 'transparent',
    marginHorizontal: 5,
  },
  weekBlueButton: {
    borderWidth: 2,
    borderColor: '#052838',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#052838',
    marginHorizontal: 5,
  },
  weekButtonText: {
    fontSize: 12,
    color: '#052838',
    textAlign: 'center',
  },
  weekButtonWhiteText: {
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
  },
};

export default WeekButtons;
