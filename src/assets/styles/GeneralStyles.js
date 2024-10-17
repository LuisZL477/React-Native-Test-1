import { StyleSheet, Dimensions } from 'react-native';
const styles = StyleSheet.create({
        containerHome: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
        imageHome: {
          width: 220,
          height: 220,
          marginBottom: 30,
          backgroundColor: 'transparent', // Asegúrate de que el fondo sea transparente
        },
        buttonsContainerHome: {
          width: '80%', // Cambia el contenedor de los botones a una sola dirección
        },
        buttonHome: {
          marginVertical: 10, // Espaciado vertical entre los botones
          paddingVertical: 10,
          borderRadius: 25,
          borderWidth: 2,
          borderColor: '#052838',
          alignItems: 'center',
        },
        buttonTextHome: {
          color: '#052838',
          fontSize: 16,
        },    linearGradientRegi: {
          flex: 1,
          padding: 20,
        },
        backButtonRegi: {
          position: 'absolute',
          top: 40,
          left: 20,
          zIndex: 1,
        },
        logoContainerRegi: {
          position: 'absolute',
          top: 40,
          right: 20,
          zIndex: 1,
        },
        logoRegi: {
          width: 40,
          height: 40,
        },
        inputRegi: {
          backgroundColor: '#052838',
          color: '#fff',
          padding: 10,
          borderRadius: 30,
          marginTop: 20,
          marginBottom: 20,
        },
        pickerContainerRegi: {
          backgroundColor: '#052838',
          borderRadius: 30,
          overflow: 'hidden',
          marginBottom: 20,
        },
        pickerRegi: {
          height: 50,
          color: '#fff',
          borderRadius: 30,
        },
        textRegi: {
          color: '#052838',
          textAlign: 'center',
          marginBottom: 10,
          marginTop: 80,
          fontSize: 20,
        },
        titleRegi: {
          color: '#052838',
          marginBottom: 5,
        },
        buttonRegi: {
          borderWidth: 2,
          borderColor: '#052838',
          borderRadius: 30,
          paddingVertical: 10,
          alignItems: 'center',
          marginTop: 20,
          width: '70%',
          alignSelf: 'center',
        },
        buttonTextRegi: {
          color: '#052838',
          fontSize: 16,
        },
        progressBarContainerRegi: {
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          width: '90%', // Ajusta el ancho de la barra de progreso
          marginBottom: 50, // Añade espacio en la parte inferior
          marginLeft:18,
        },
        progressBarRegi: {
          marginTop: 80,
          height: 15,
          width: 60,
          marginHorizontal: 1,
          borderRadius: 7.5,
          borderWidth: 1,
          borderColor: '#052838',
          backgroundColor: 'transparent',
        },
        Screenstyle: {
          flex: 1, alignItems: 'center', justifyContent: 'flex-start', paddingTop: 100, width:'100%',
        },
        logoContainer: {
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 30,
          marginTop: 200,
        },
        experienceButton: {
          backgroundColor: '#052838', // Color oscuro
          padding: 15,
          borderRadius: 10,
          marginBottom: 10,
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%', // Ajustar el ancho para que coincida con el diseño
          height: '60',

      },
      selectedButton: {
          backgroundColor: '#136E6E', // Cambiar el fondo cuando está seleccionado
      },
      buttonContent: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
      },
      buttonexText: {
          color: '#fff',
          fontSize: 18,
          fontWeight: 'bold',
      },
      subText: {
          color: '#A3BCD6',
          fontSize: 14,
      },
      experienceButtonContainer: {
        width: '80%', // Asegura que el contenedor ocupe el 100% del ancho disponible
        alignItems: 'center', // Centra horizontalmente los botones dentro del contenedor
        justifyContent: 'center', // Alinea verticalmente al centro si hay más de un botón
        marginBottom: 40, // Espacio en la parte inferior del contenedor
    },



  linearGradient: {
    position: 'absolute', 
    top: 0,
    left: 0,
    right: 0,
    bottom: 0, 
    zIndex: -1, 
  },
     titleText: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        paddingHorizontal: 'center',
        marginBottom: 40,
      },
      blueTitleText: {
        fontSize: 18,
        color: '#052838',
        textAlign: 'center',
        paddingHorizontal: 'center',
        marginBottom: 140,
      },
      blueText: {
        fontSize: 14,
        color: '#052838',
        textAlign: 'center',
        paddingHorizontal: 'center',
        marginBottom: 140,
      },
      recommendedText: {
        fontSize: 12,
        color: '#24BFBF',
        marginTop: 2,
        marginLeft:-21, // Alinea el texto de "Recomendado" a la izquierda
      },
       // Buttons
       muscleButtonContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
      },
       muscleButtonsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginVertical: 5,
        marginHorizontal: 30,
        marginBottom: 60,
        marginTop: -60,
      },
       muscleButton: {
        width:Dimensions.get('screen').width *0.341, 
        backgroundColor: '#052838',
        padding: 15,
        marginVertical: 10,
        borderRadius: 10,
        marginHorizontal: 10,
        alignItems: 'center',
        minHeight: 70,
        maxHeight: 70, 
      },
     
      leftButton: {
        backgroundColor: '#052838', // Azul sólido para los botones de la izquierda
      },
      
      rightButton: {
        backgroundColor: 'transparent', // Transparente para los botones de la derecha
        borderColor: '#052838', // Contorno azul oscuro
        borderWidth: 2, // Ancho del borde
      },
      
      rightButtonText: {
        color: '#052838', // Color azul oscuro para el texto
        fontSize: 16, // Ajusta el tamaño del texto si lo deseas
        fontWeight: 'bold', // Para hacer el texto más prominente
      },
      

      aimButtonContainer: {
        width: Dimensions.get('screen').width *1.0,
        alignItems: 'center',
        marginBottom: 71,
   
    },
    selectedButton: {
      backgroundColor: '#052838',
      borderWidth: 2,
      borderColor: 'white',
    },
    objectiveButton: {
      backgroundColor: '#052838',
      borderRadius: 10,
      padding: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: Dimensions.get('screen').width *0.8,
      marginVertical: 5
     },
     buttonText: {
      color: 'white',
      fontSize: 18,
     },
     
      authenticationButtonsContainer: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 30,
        marginTop: 200
      },
      transparentButtonsContainer: {
        width: Dimensions.get('screen').width *0.9,
        justifyContent: 'flex-start',  
        alignItems: 'center',
        marginTop: 1, 
        alignSelf: 'center', 
        marginBottom:20,
      },
      transparentButton: {
        backgroundColor: 'transparent',
        paddingVertical: 10,  
        paddingHorizontal: 15,  
        borderRadius: 25,
        marginVertical: 12,
        borderWidth: 2,
        alignItems: 'center',
        borderColor: '#052838',
        width: Dimensions.get('screen').width *0.8, 
        marginBottom:20,
        alignSelf: 'center', 
      },
      muscleButtonText: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'left', 
      },
      
      buttonBlueText: {
        fontSize: 18,
        color: '#052838',
      },
      backButton: {
        position: 'absolute',
        top: 40,  
        left: 2, 
        zIndex: 1, 
      },
      authButton: {
        backgroundColor: '#fff',
        width: '80%',
        paddingVertical: 15,
        borderRadius: 25,
        alignItems: 'center',
        marginBottom: 15,
        flexDirection: 'row', 
        justifyContent: 'center', 
        paddingHorizontal: 20, 
      },
      authButtonText: {
        color: '#000',
        fontSize: 16,
        marginLeft: 10,
      },

      selectedRightButton: {
        backgroundColor: 'Transparent',
        borderWidth: 2,
        borderColor: '#052838',
      },
  
  
  //Check circle
        checkBlueCircle: {
          width: 24,
          height: 24,
          borderRadius: 12,
          backgroundColor: 'transparent', // Corregido a transparente
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: '#052838',
          borderWidth: 2,
        },
  
      checkCircle: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: 'transparent', // Corregido a transparente
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'white',
        borderWidth: 2,
      },

    //ProgressBar
  
  progressBarContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    width: Dimensions.get('screen').width *1.0, // Ajusta el ancho de la barra de progreso
    marginBottom: 30, // Añade espacio en la parte inferior
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
    backgroundColor: '#052838', // Cambia el color de los pasos activos
  },


    //Separators

      separatorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
      },
      separator: {
        flex: 1,
        height: 1,
        backgroundColor: '#000',
      },
      separatorText: {
        marginHorizontal: 10,
        color: '#000',
      },
      footerText: {
        color: '#000',
        fontSize: 16,
      },
      text:{
        fontSize: 14,
        color: '#fff',
        textAlign: 'center',
        paddingHorizontal: 'center',
        marginBottom: 40,
      },
      buttonIcon: {
        backgroundColor: 'transparent',
        width: 20,   
        height: 20,
        marginRight: 15, 
      },
    Screenstyle: {
      flex: 1, alignItems: 'center', justifyContent: 'flex-start', paddingTop: 100, width:'100%'
    },
    logoContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 30,  
      marginTop: 200
    },


    //Padilla
    text2: {
      color: '#052838',
      textAlign: 'center',
      marginBottom: 50,
      marginTop: 80,
      fontSize: 20,
    },  
    textData: {
      color: '#052838',
      marginBottom: 5,
      marginLeft:22,
    },
    logoContainer2: {
      position: 'absolute',
      top: 40,
      right: 20,
      zIndex: 1,
    },
    logo2: {
      width: 40,
      height: 40,
    },
    textblue2: {
      color: '#052838',
      textAlign: 'center',
      marginBottom: 10,
      marginTop: 80,
      fontSize: 20,
    },
    input: {
      backgroundColor: '#052838',
      color: '#fff',
      padding: 10,
      borderRadius: 30,
      marginBottom: 20,
      width: Dimensions.get('screen').width *0.9,
      marginLeft:20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    pickerContainer: {
      backgroundColor: '#052838',
      marginLeft:20,
      borderRadius: 20,
      overflow: 'hidden',
      justifyContent: 'center',     
      marginBottom: 35,
      width: Dimensions.get('screen').width *0.9,
    },
    picker: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 40,
      color: '#fff', 
      borderRadius: 30,
      justifyContent: 'center',
    },


    //Notificaciones
   notificationContainer: {
    flexDirection: 'row', // Alinea elementos en una fila
    alignItems: 'center', // Alinea verticalmente en el centro
    justifyContent: 'space-between', // Espacio entre texto y switch
    paddingHorizontal: 10, // Ajusta el espaciado horizontal
    },


    //Estos van a ser la segunda parte de los estilos


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
  width: Dimensions.get('screen').width * 0.95,
  
  },

phaseText: {
  fontSize: 15,
    fontWeight: 'bold',
    color: '#052838',
    marginTop: 26,
    marginLeft: 20,
    width: Dimensions.get('screen').width * 1.0,
},

progressLabelsContainer: {
  marginTop:10,
  flexDirection: 'row',
  justifyContent: 'flex-start',  // Coloca los elementos más cerca del inicio del contenedor
  width: Dimensions.get('screen').width * 0.95,  // O prueba con 95% del ancho
  paddingHorizontal: 5,
},

progressLabel: {
  fontSize: 10,
  color: '#000000',
  textAlign: 'center',
  marginRight:5,  // Agrega un margen derecho pequeño para controlar el espacio entre etiquetas
  flex: 10,
},

horizontalLine: {
  borderBottomColor: '#052838',
  borderBottomWidth: 1,
  width: Dimensions.get('screen').width * 0.8,
  marginVertical:4,
  marginBottom:2,
},

scrollViewStyle: {
  marginVertical: 10,
  width: Dimensions.get('screen').width * 1.0,
  height: 60,
},
weeksContainer: {
  position: 'absolute',
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: 1,
  width: Dimensions.get('screen').width * 1.0,
  top: 0, 
  
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
routineScrollContainer: {
  flex: 1,
  marginTop: -500,
},
routineCard: {
  backgroundColor: '#052838',
  borderRadius: 10,
  padding: 10,
  marginTop: -20, // En lugar de `top`
  marginBottom: 10,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: Dimensions.get('screen').width * 0.8,
  alignSelf: 'center',
},
routineCard: {
  backgroundColor: '#052838',
  borderRadius: 10,
  padding: 10,
  marginBottom: 20, // Incrementa el espacio entre las tarjetas
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: Dimensions.get('screen').width * 0.8,
  alignSelf: 'center',
},

subTitleCardRoutine: {
  fontSize: 16,
  color: '#24BFBF',
  bottom: 30,
  fontWeight: 'bold',
},
routineInfoContainer: {
  flex: 1,
  marginRight: 10,
  bottom:170,
},
routineTitle: {
  fontSize: 18,
  fontWeight: 'bold',
  color: 'white',
  textAlign: 'left', // Alinea el texto a la izquierda
  paddingLeft: 16,  // Si necesitas un espacio adicional desde el borde izquierdo
},
routineSubtitle: {
  fontSize: 14,
  color: 'white',
  marginTop: 40,
  textAlign: 'left', // Alinea el texto a la izquierda
  paddingLeft: 16,  // Ajusta si necesitas algo de margen interior
},

playButton: {
  padding: 10,
},
centralText: {
  position: 'absolute', // Absoluta para posicionar el texto
  bottom: 310, // Ajusta esta posición desde la parte inferior de la pantalla
  left: 0,
  right: 0,
  alignItems: 'center',
  textAlign: 'center', // Centra el texto
  fontSize: 15,
  fontWeight: 'bold',
  color: '#052838',
},
imageStyle: {
  position: 'absolute', // Absoluta para posicionar la imagen
  bottom: 200, // Ajusta esta posición desde la parte inferior de la pantalla
  alignItems: 'center',
  width: 150,
  height: 150,
  alignSelf: 'center',
},

});

export default styles;
