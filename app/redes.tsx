import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView, Linking } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { modoOscuro } from './modoOscuro';
import ContactForm from './contactForm'
import Footer from './footer';
import { globalStyles } from './styleGlobal';


export default function RedesScreen() {
  const handleFacebook = () => {
    Linking.openURL('https://www.facebook.com')
  }
  const handleInstagram = () => {
    Linking.openURL('https://www.instagram.com')
  }
  const handleWA = () => {
    Linking.openURL('https://wa.me/6182385321')
  }
  const handleX = () => {
    Linking.openURL('https://www.x.com')
  }

  const { green, backRedes, title, orange, blue, card } = modoOscuro();
  return (
    <ImageBackground
      source={backRedes}
      style={styles.backgroundImage}
    >
      <ScrollView>
      <Text style={[globalStyles.subtitle, { color: '#b0b0b0' }]}>Conoce Nuestras</Text>
          <Text style={[globalStyles.title1, { backgroundColor: orange, color: title }]}>Redes Sociales</Text>
          <View style={[globalStyles.border, { borderColor: green }]}></View>
        <View style={[globalStyles.container, {backgroundColor: card}]}>
          <Text style={[{ color: title, fontSize: 18, backgroundColor: blue, padding: 10, borderTopRightRadius: 0, marginHorizontal: -20, borderBottomRightRadius: 60, marginBottom: 35 }]}>Te invitamos a conocer nuestras Redes Sociales y Medios de Contacto</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button, { borderColor: green }]} onPress={handleX}>
              <FontAwesome6 style={styles.icon} name="twitter" size={40} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { borderColor: green }]} onPress={handleFacebook}>
              <FontAwesome6 style={styles.icon} name="facebook" size={40} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { borderColor: green }]} onPress={handleInstagram}>
              <FontAwesome6 style={styles.icon} name="instagram" size={40} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { borderColor: green }]} onPress={handleWA}>
              <FontAwesome6 style={styles.icon} name="whatsapp" size={40} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { borderColor: green }]} >
              <ContactForm />
            </TouchableOpacity>
          </View>
        </View>
        {/* <View style={styles.container}>
        <View style={[styles.border, { borderColor: green}]}></View>
        <Text style={[styles.subtitle, { color: '#b0b0b0', marginTop: 0 }]}>Contactate mediante</Text>
        <Text style={[styles.title1, { backgroundColor: orange, color: title }]}>Formulario de Contacto</Text>
        <View style={[styles.border, { borderColor: green }]}></View>
        </View> */}
              <Footer />
      </ScrollView>
    </ImageBackground>
  );
}

// const green = "rgb(10, 150, 0)";
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    padding: 5,
    marginBottom: '5%'
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
  },
  brand: {
    color: '#2da3ff',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 100,
    textDecorationLine: 'underline'
  },
  icon: {
    textAlign: "center",
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  title1: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#f0f0f0',
    // backgroundColor: green,
    padding: 10,
    paddingLeft: 40,
    borderBottomRightRadius: 60,
    marginBottom: 30,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 40,
    marginBottom: 5,
    marginTop: 20,
  },
  border: {
    borderWidth: 2,
    marginBottom: 30,
    marginRight: 80,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    // backgroundColor: 'rgba(10, 200, 0, 0.8)', // Color de fondo
    borderWidth: 3,
    borderRadius: 50, // El borde redondeado debe ser la mitad del ancho/alto
    margin: '8%', // Margen del 5%
    padding: 2, // Espaciado interno
    justifyContent: 'center', // Centra el contenido verticalmente
    alignItems: 'center', // Centra el contenido horizontalmente
    alignSelf: 'center', // Centra el botón respecto al padre
    width: 100, // Ancho fijo (puedes ajustar este valor según el diseño)
    height: 100, // Altura igual al ancho para hacerlo circular
  },
  //   facebook:{
  //     borderColor: '0101ff85',
  //   },
  //   instagram:{
  //     borderColor: 'ff5c5c85',
  //   },
  //   wa:{
  //     borderColor: 'rgba(10, 200, 0, 0.8)',
  //   },
  //   x:{
  //     borderColor: '#fff',
  //   },
  buttonText: {
    color: '#fff',
    fontWeight: "bold",
    textAlign: 'center',
  },
});
