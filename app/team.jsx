import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';
import { modoOscuro } from './modoOscuro';

export default function Team() {
    const { green, title, grayReverse, card, minusWhite } = modoOscuro();

  return (
    <View>
    <View style={[styles.cardContainer, {backgroundColor: grayReverse}]}>
    <Image 
      source={require('../assets/images/cvteam/luna.jpeg')} 
      style={styles.image} 
    />
    <View style={styles.infoContainer}>
      <Text style={[styles.name, {color: title}]}>J. Luis Luna</Text>
      <Text style={[styles.role, {color: minusWhite}]}>Líder y Desarrollador de Apps</Text>
      <Text style={[styles.description, {color: title}]}>
        Líder del equipo y desarrollador de facto de aplicaciones e interfaces.
      </Text>
    </View>
  </View>
  <View style={[styles.cardContainer, {backgroundColor: grayReverse}]}>
    <Image 
      source={require('../assets/images/cvteam/Ibarra.jpg')} 
      style={styles.image} 
    />
    <View style={styles.infoContainer}>
      <Text style={[styles.name, {color: title}]}>Marlenne I. Ibarra Ortega</Text>
      <Text style={[styles.role, {color: minusWhite}]}>Scrum Master y App Designer</Text>
      <Text style={[styles.description, {color: title}]}>
       Segunda persona al mando, encargada de mantener el órden, seguimiento y diseño funcional y accesible.
      </Text>
    </View>
  </View>
  <View style={[styles.cardContainer, {backgroundColor: grayReverse}]}>
    <Image 
      source={require('../assets/generic1.png')} 
      style={styles.image} 
    />
    <View style={styles.infoContainer}>
      <Text style={[styles.name, {color: title}]}>Alan Gómez</Text>
      <Text style={[styles.role, {color: minusWhite}]}>Encargado de IoT y Tester</Text>
      <Text style={[styles.description, {color: title}]}>
        Principal encargado de circuitos de IoT, diseñador de circuitos y procesos básicos. Además de Tester universal y despliegue.
      </Text>
    </View>
  </View>
  <View style={[styles.cardContainer, {backgroundColor: grayReverse}]}>
    <Image 
      source={require('../assets/generic1.png')} 
      style={styles.image} 
    />
    <View style={styles.infoContainer}>
      <Text style={[styles.name, {color: title}]}>Ángel E. Rentería</Text>
      <Text style={[styles.role, {color: minusWhite}]}>Encargado de procesos de IA</Text>
      <Text style={[styles.description, {color: title}]}>
        Desarrollador de principales procesos de IA y despliegue de datos.
      </Text>
    </View>
  </View>
  </View>
    )
}
const styles = StyleSheet.create({
    cardContainer: {
      flexDirection: 'row',
    //   backgroundColor: '#222',
      borderRadius: 20,
      padding: 10,
      margin: 10,
      marginBottom: '10%',
      alignItems: 'center',
    },
    image: {
      width: 70,
      height: 70,
      borderRadius: 30,
      marginRight: 10,
    },
    infoContainer: {
      flex: 1,
    },
    name: {
    //   color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    role: {
    //   color: '#00ff00',
      fontSize: 14,
    },
    description: {
    //   color: '#ccc',
      fontSize: 12,
    },
  });
