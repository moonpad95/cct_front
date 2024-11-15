import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView, Alert, BackHandler, Image, Linking } from 'react-native';
import { Link, useRouter } from 'expo-router';
import Fontisto from '@expo/vector-icons/Fontisto';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from 'expo-router';
import { modoOscuro } from './modoOscuro';
import Footer from './footer'
import { usePushNotifications } from './pushUserNotifications';


export default function HomeScreen() {
  const [hasAcceptedTerms, setHasAcceptedTerms] = useState(false);
  const router = useRouter();
  const navigation = useNavigation();
  const { green, backIndex, blue, title, degrader, orange } = modoOscuro();
  const icon = require('./../assets/logo/only_logo.png');
  const {expoPushToken, notification} = usePushNotifications()
  const data = JSON.stringify(notification, undefined, 2)
  console.log('token:', expoPushToken)

  // Función para obtener el estado de aceptación de términos
  const checkAcceptedTerms = async () => {
    try {
      const accepted = await AsyncStorage.getItem('acceptedTerms');
      if (accepted === 'true') {
        setHasAcceptedTerms(true);
      } else {
        setHasAcceptedTerms(false);
      }
    } catch (error) {
      console.error('Error al obtener los términos aceptados:', error);
    }
  };

  // Se ejecuta la primera vez que carga la pantalla
  useEffect(() => {
    checkAcceptedTerms();
  }, []);

  // Listener para actualizar cuando la pantalla vuelva a estar en foco
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', checkAcceptedTerms); // Llamamos a la función que actualiza el estado
    return unsubscribe;
  }, [navigation]);

  // Mostrar el alerta de términos si no han sido aceptados
  useEffect(() => {
    if (!hasAcceptedTerms) {
      Alert.alert(
        'Aviso de Términos y Condiciones',
        `He leído los términos y condiciones y estoy de acuerdo con los términos y condiciones de Cultive Care Technologies y de Concept Care Technologies`,
        [
          {
            text: 'Ver Términos',
            onPress: () => {
              router.push('/home1'); // Aquí se abriría la página de términos
            }
          },
          {
            text: 'Aceptar',
            onPress: async () => {
              try {
                await AsyncStorage.setItem('acceptedTerms', 'true');
                setHasAcceptedTerms(true); // Actualiza el estado
                console.log('Términos aceptados');
              } catch (error) {
                console.error('Error al almacenar los términos aceptados:', error);
              }
            }
          },
          {
            text: 'Rechazar',
            onPress: async () => {
              await AsyncStorage.setItem('acceptedTerms', 'false');
              setHasAcceptedTerms(false); // Actualiza el estado
              console.log('Términos rechazados');
            },
            style: 'cancel'
          }
        ]
      );
    }
  }, [hasAcceptedTerms]);

  const handleBtn3 = () =>{
    navigation.navigate("redes");
  }
  const handleBtn1 = () =>{
    navigation.navigate("Nosotros");
  }
  const handleBtn2 = () =>{
    navigation.navigate("beneficios");
  }
  const handleBtn4 = () =>{
    navigation.navigate("soporte");
  }

  return (
    <ImageBackground
      source={backIndex} // Reemplaza con la ruta a tu imagen
      style={styles.backgroundImage}
    >
      <ScrollView>
        <View style={styles.container}>
          <Text style={[styles.subtitle, {color: green}]}>Bienvenido a</Text>
          <Image source={icon} style={styles.logo} />
          <Text style={styles.title}>Cultive Care Technologies</Text>
          <Text style={[styles.brand, {color: blue}]}>Una marca de Concept Care Technologies</Text>
          {/* <Text>Cuerpo: {data}</Text> */}
          {/* <Text>Token: {expoPushToken?.data ?? ""}</Text> */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button, {backgroundColor: degrader}]} onPress={handleBtn1}>
              <Fontisto style={styles.icon} name="world-o" size={24} color={title} />
              <Text style={[styles.buttonText, {color: title}]}>Conoce más / Conócenos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, {backgroundColor: orange}]} onPress={handleBtn2}>
              <FontAwesome6 style={styles.icon} name="hands-holding" size={24} color={title} />
              <Text style={[styles.buttonText, {color: title}]}>Beneficios de usar CCT</Text>
            </TouchableOpacity>

            {/* Mostrar los botones adicionales solo si hasAcceptedTerms es true */}
            {hasAcceptedTerms && (
              <>
                <TouchableOpacity style={[styles.button, {backgroundColor: orange}]} onPress={handleBtn3}>
                  <FontAwesome6 style={styles.icon} name="people-group" size={24} color={title} />
                  <Text style={[styles.buttonText, {color: title}]}>Redes Sociales y Contacto</Text>
                  {/* <Link href="/redes" style={[styles.buttonText, {color: title}]}>Preguntas Frecuentes</Link> */}
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, {backgroundColor: degrader}]}>
                  <Ionicons style={styles.icon} name="sparkles-outline" size={24} color={title} />
                  <Text style={[styles.buttonText, {color: title}]}>Cultive Care InvernaTech</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, {backgroundColor: degrader}]} onPress={handleBtn4}>
                  <MaterialIcons style={styles.icon} name="support-agent" size={24} color={title} />
                  <Text style={[styles.buttonText, {color: title}]}>Preguntas Frecuentes</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </ScrollView>
      <Footer />
    </ImageBackground>
  );
}

// const green = "#7cff67";
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  logo: {
    height: 80,
    width: 100,
    resizeMode: 'cover',
    borderRadius: 40,
    marginTop: 20
},
  container: {
    marginTop: 80,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 35,
    textAlign: 'center',
    marginBottom: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  brand: {
    // color: '#2da3ff',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 60,
    textDecorationLine: 'underline'
  },
  icon: {
    alignContent: "center",
    textAlign: "center",
    marginBottom: 15
  },
  subtitle: {
    // color: green,
    fontSize: 20,
    fontWeight: "bold"
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    // backgroundColor: 'rgba(10, 200, 0, 0.8)', // Fondo semi-transparente para botones
    padding: 20,
    borderRadius: 10,
    margin: 10, // Espaciado para alinear en columnas
    width: '40%', // Ancho del botón para ajustarse en columnas
    textAlign: 'center',
  },
  buttonText: {
    // color: '#fff',
    fontWeight: "bold",
    textAlign: 'center',
  },
});
