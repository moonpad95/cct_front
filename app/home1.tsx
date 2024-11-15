import { StyleSheet, ScrollView, TouchableOpacity, Alert} from 'react-native';
import { Text, View } from '@/components/Themed';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router'; 
import { LinearGradient } from 'expo-linear-gradient';
import { modoOscuro } from './modoOscuro';


export default function home1() {
  const { green, backRedes, title, orange, blue , degrader, card, grayDark} = modoOscuro();
  const router = useRouter(); // Usamos router para redirigir

  const handleAccept = async () => {
    try {
      await AsyncStorage.setItem('acceptedTerms', 'true');
      const accepted = await AsyncStorage.getItem('acceptedTerms');
      console.log(accepted);
      Alert.alert('Política aceptada', 'Gracias por aceptar la política de privacidad.');
      router.back(); // Regresar a la ventana anterior
    } catch (error) {
      console.error('Error al almacenar la aceptación de la política de privacidad:', error);
    }
  };

  const handleReject = async () => {
    try {
      await AsyncStorage.setItem('acceptedTerms', 'false');
      Alert.alert('Política rechazada', 'Algunos apartados no estarán disponibles mientras no se acepten los términos y condiciones de uso.');
      router.back(); // Cerrar la aplicación
    } catch (error) {
      console.error('Error al almacenar el rechazo de la política de privacidad:', error);
    }
  };



  return (
    // <View style={styles.container}>
    <LinearGradient
      colors={[grayDark, degrader]} start={{ x: 1, y: 0 }} end={{ x: 2, y: 1 }} style={{flex: 1,}}
    >
    <ScrollView style={styles.container}>
      <View style={[styles.content, {backgroundColor: card}]}>
        <Text style={[styles.title, {color: title}]}>Política de Privacidad</Text>
        
        <Text style={[styles.text, {color: title}]}>
          En Cultive Care, respetamos tu privacidad y estamos comprometidos a protegerla.
          Esta aplicación web no recopila, almacena ni comparte ningún tipo de información
          personal de sus usuarios. No utilizamos cookies, rastreadores ni herramientas de análisis que
          recojan datos identificables.
        </Text>

        <Text style={styles.subtitle}>Información Recopilada</Text>
        <Text style={[styles.text, {color: title}]}>
          Cultive Care no solicita ni almacena datos personales, como nombres, correos electrónicos,
          direcciones o cualquier otra información de identificación personal.
        </Text>

        <Text style={styles.subtitle}>Uso de la Información</Text>
        <Text style={[styles.text, {color: title}]}>
          Dado que no recopilamos ningún dato, no hay información que pueda ser utilizada, compartida
          o vendida a terceros.
        </Text>

        <Text style={styles.subtitle}>Cambios en la Política</Text>
        <Text style={[styles.text, {color: title}]}>
          Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento.
          Cualquier cambio será publicado en esta misma página, por lo que te recomendamos revisarla
          periódicamente.
        </Text>

        <Text style={styles.subtitle}>Contacto</Text>
        <Text style={[styles.text, {color: title}]}>
          Si tienes alguna duda o pregunta sobre nuestra política de privacidad, puedes ponerte en contacto
          con nosotros a través de{' '}
          <Text style={styles.link}>CultiveCare@gmail.com</Text>.
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonAccept} onPress={handleAccept}>
            <Text style={styles.buttonText}>Aceptar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonReject} onPress={handleReject}>
            <Text style={styles.buttonText}>Rechazar</Text>
          </TouchableOpacity>
        </View>
      </View>
      
    </ScrollView>
    </LinearGradient>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#f0f0f0',
    padding: 15,
  },
  content: {
    // backgroundColor: '#ffffff',
    padding: 20,
    marginBottom: 30,
    paddingBottom: 50,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    // elevation: 2,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    // ,
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    // color: '#555',
  },
  text: {
    fontSize: 16,
    // color: '#555',
    lineHeight: 24,
    marginBottom: 15,
  },
  link: {
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
  buttonContainer: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f000',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  buttonAccept: {
    backgroundColor: '#f0f0f050',
    borderWidth: 2,
    borderColor: '#4CAF50',
    padding: 10,
    borderRadius: 10,
    width: '45%',
    alignItems: 'center',
  },
  buttonReject: {
    backgroundColor: '#f0f0f050',
    borderWidth: 2,
    borderColor: '#F44336',
    padding: 10,
    borderRadius: 10,
    width: '45%',
    alignItems: 'center',
  },
  buttonText: {
    // color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
