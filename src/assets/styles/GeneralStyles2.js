import { StyleSheet, Dimensions } from 'react-native';
const styles2 = StyleSheet.create({

    linearGradient: {
        position: 'absolute', 
        top: 0,
        left: 0,
        right: 0,
        bottom: 0, 
        zIndex: -1, 
      },
      Screenstyle: {
        flex: 1, alignItems: 'center', justifyContent: 'flex-start', paddingTop: 100, width:'100%',
      },

      //buttons
      backButton: {
        position: 'absolute',
        top: 40,  
        left: 2, 
        zIndex: 1, 
      },



      //Text
      mainTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#052838',
        marginTop: -57,
        marginLeft: 70,
        width: Dimensions.get('screen').width * 1.0,
        },
        
    subTitle: {
        fontSize: 16,
        color: '#24BFBF',
        marginTop: 5,
        marginLeft: 20,
        fontWeight: 'bold',
        width: Dimensions.get('screen').width * 1.0,
    },
    plainText: {
        fontSize: 10,
        color: '#000000',
        marginTop: 25,
        marginLeft: -280,
        width: Dimensions.get('screen').width * 0.95  
        },
        phaseText: {
          fontSize: 15,
            fontWeight: 'bold',
            color: '#052838',
            marginTop: 26,
            marginLeft: 20,
            width: Dimensions.get('screen').width * 1.0,
        },
        phaseText2: {
          fontSize: 15,
          fontWeight: 'bold',
          color: '#052838',
          marginTop: 1,
          marginLeft: 20, 
  
      },
        centralText: {
          position: 'absolute', 
          bottom: 310, 
          left: 0,
          right: 0,
          alignItems: 'center',
          textAlign: 'center', 
          fontSize: 15,
          fontWeight: 'bold',
          color: '#052838',
        },
    
    progressBarContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        width: Dimensions.get('screen').width *1.0, 
        marginBottom: 30,
      },
      progressBar: {
        marginTop: 25,
        height: 15,                 
        width: 60,                
        marginHorizontal: 0,       
        borderRadius: 7.5,         
        borderWidth: 1,
        marginBottom:-30,
        borderColor: '#052838',
        backgroundColor: 'transparent',
      },
      activeStep: {
        backgroundColor: '#052838', 
      },

      progressLabelsContainer: {
        marginTop:10,
        flexDirection: 'row',
        justifyContent: 'flex-start',  
        width: Dimensions.get('screen').width * 0.95,  
        paddingHorizontal: 5,
      },
      
      progressLabel: {
        fontSize: 10,
        color: '#000000',
        textAlign: 'center',
        marginRight:5,  
        flex: 10,
      },
      horizontalLineContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 180,
        marginVertical: 10, 
    },

      horizontalLine: {
        borderBottomColor: '#052838',
        borderBottomWidth: 1,
        width: Dimensions.get('screen').width * 0.8,
        marginVertical: 4,
        marginBottom: 2,
        alignSelf: 'center',
    },
     
      //Images
      imageStyle: {
        position: 'absolute', 
        bottom: 200, 
        alignItems: 'center',
        width: 150,
        height: 150,
        alignSelf: 'center',
      },
    
      scrollViewStyle: {
        marginVertical: 10,
        width:  Dimensions.get('screen').width * 1.0,  
        flexGrow: 0,    
      },
      weeksContainer: {
        flexDirection: 'row', 
        paddingHorizontal: 10,  
        alignItems: 'center', 
        marginBottom:1,
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
      weekButtonWhiteText: {
        fontSize: 12,
        color: 'white',
        textAlign: 'center',
      },
      weekButtonText: {
        fontSize: 12,
        color: '#052838',
        textAlign: 'center',
      },


      
      container: {
        flexDirection: 'row',  // Para tener los puntos y tarjetas en columnas
        alignItems: 'flex-start',  // Alinea los elementos arriba
        paddingHorizontal: 20,
        marginTop: 1,
        marginRight:210,
    },
    textContainer: {
      flex: 1,  // Ocupa el espacio restante en la tarjeta
      justifyContent: 'center',  // Centra el contenido verticalmente
  },  
    leftColumn: {
        justifyContent: 'center',  // Centra los puntos verticalmente
        alignItems: 'center',  // Centra los puntos horizontalmente
        marginRight: 90,
        marginTop:150,
    },
    verticalLine: {
        position: 'absolute',
        width: 1,
        height: Dimensions.get('screen').width * 0.6,
        backgroundColor: '#24BFBF',
    },
    pointContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',  // Espacio uniforme entre puntos
        height: 150,  // Ajusta el tamaño según lo que necesites
        marginTop: -95,
        
       
    },
    point: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#052838',
        borderColor: '#000',
        borderWidth: 2,
        marginBottom: 105,
    },
    turquisePoint: {
      width: 12,
      height: 12,
      borderRadius: 6,
      backgroundColor: '#24BFBF',
      borderColor: '#24BFBF',
      borderWidth: 2,
      marginBottom: 105,
  },
  
 
    
   
    exerciseCard: {
      backgroundColor: '#052838',
      padding: 7,
      marginBottom: 20,
      borderRadius: 10,
      marginLeft: -80, // Ajusta este valor según sea necesario
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: Dimensions.get('screen').width * 0.8,
  },
  
  exerciseTurquiseCard: {
    backgroundColor: '#24BFBF',
    padding: 7,
    marginBottom: 20,
    borderRadius: 10,
    marginLeft: -80, // Ajusta este valor según sea necesario
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: Dimensions.get('screen').width * 0.8,
},
  excersizeSubTitle: {
    fontSize: 16,
    color: '#24BFBF',
    marginTop: 5,
    marginLeft: -3,
    fontWeight: 'bold',
    width: Dimensions.get('screen').width * 1.0,
},
excersizeBlueSubTitle: {
  fontSize: 16,
  color: '#052838',
  marginTop: 5,
  marginLeft: -3,
  fontWeight: 'bold',
  width: Dimensions.get('screen').width * 1.0,
},
  exerciseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5, // Espacio entre title y info
},
exerciseInfo: {
    fontSize: 14,
    color: 'white',
    marginBottom: 10, // Espacio entre info y el botón
},

    playButton: {
        padding: 10,
        color:'white',
    },


    rowContainer: {
      flexDirection: 'row',      
      justifyContent: 'space-between', 
      alignItems: 'center',      
      paddingHorizontal: 10,     
      width: Dimensions.get('screen').width * 1.0,             
    },
  
});

export default styles2;