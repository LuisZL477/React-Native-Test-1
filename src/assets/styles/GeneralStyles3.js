import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');


const styles3 = StyleSheet.create({
    linearGradient: {
        position: 'absolute', 
        top: 0,
        left: 0,
        right: 0,
        bottom: 0, 
        zIndex: -1, 
    },
    Screenstyle: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'flex-start', 
        paddingTop: 100, 
        width: Dimensions.get('screen').width * 1.0,
    },
    
    backButton: {
        position: 'absolute',
        top: 40,  
        left: 2, 
        zIndex: 1, 
    },
    mainTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#052838',
        marginTop: -57,
        marginLeft: 70,
        width: Dimensions.get('screen').width * 1.0,
    },
    exerciseContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        paddingHorizontal: 20,
    },
    exerciseImage: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        marginRight: 20,
    },
    exerciseDescription: {
        flex: 1,
        fontSize: 14,
        color: '#052838',
    },

    horizontalLine: {
        borderBottomColor: '#052838',
        borderBottomWidth: 1,
        width: Dimensions.get('screen').width * 0.8,
        marginVertical: 4,
        marginBottom: 2,
        marginTop:20,
        alignSelf: 'center',
    },



    iconContainer: {
        backgroundColor: '#052838', // Fondo azul oscuro
        padding: 10, // Ajusta el espacio alrededor del icono
        borderRadius: 50, // Hace que el contenedor sea circular
        alignItems: 'center', // Centra el icono horizontalmente
        justifyContent: 'center', // Centra el icono verticalmente
    },
    counterButton: {
        marginHorizontal: 10, // Espaciado entre los botones y el texto del contador
    },
    

    buttonRepContainer: {
        flexDirection: 'row',
        paddingHorizontal: 0, // Asegúrate de no tener mucho espacio a los lados
        alignItems: 'center',
        marginBottom: 1,
        marginTop:20,
        marginLeft:-160,
        justifyContent: 'flex-start',
    },
    repButton: {
        borderWidth: 2,
        borderColor: '#052838',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: 'transparent',
        marginRight: 10,
    },
    repButtonText: {
        fontSize: 12,
        color: '#052838',
        textAlign: 'center',
    },
    repBlueButton: {
        borderWidth: 2,
        borderColor: '#052838',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: '#052838',
        marginRight: 10,
    },
    repButtonwhiteText: {
        fontSize: 12,
        color: 'white',
        textAlign: 'center',
    },
  
    rowContainer: {
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'space-between', 
        marginTop: 20,
        paddingHorizontal: 20, 
    },
    
    rowContainer2: {
        marginTop:-20,
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        marginTop: 10,
        paddingHorizontal: 20, 
    },
    seriesText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#052838',
        marginLeft: 0,
        flex: 1, 
    },
    seriesText2: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#052838',
        marginLeft: -280,
        flex: 1, 
    },
    counterContainer: {
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'space-between',
        flex: 1, 
    },
    counterButton: {
        borderWidth: 1,
        borderColor: 'transparent',
        borderRadius: 50,
        padding: 10, 
        marginHorizontal: 10,
    },
    counterText: {
        fontSize: 16,
        color: '#052838',
        minWidth: 40,
        textAlign: 'center',
    },
    iconContainer: {
        backgroundColor: '#052838', 
        padding: 1,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    seriesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
        marginLeft: -50,
    },
    seriesIndex: {
        fontSize: 16,
        color: '#052838',
        marginRight: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#052838',
        borderRadius: 8,
        padding: 5,
        marginHorizontal: 10,
        minWidth: 60,
        textAlign: 'center',
        color: '#052838',
    },
    saveButton: {
        backgroundColor: 'transparent',
        paddingVertical: 10,  
        paddingHorizontal: 15,  
        borderRadius: 25,
        marginVertical: 12,
        borderWidth: 2,
        marginTop:220,
        alignItems: 'center',
        borderColor: '#052838',
        width: Dimensions.get('screen').width *0.8, 
        marginTop:120,
        alignSelf: 'center', 
    },
    saveButtonText: {
        color: '#052838',
        fontSize: 16,
    },
    

});

export default styles3;
