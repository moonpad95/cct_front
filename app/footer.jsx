import { Link } from 'expo-router'
import { View, Text, StyleSheet } from 'react-native';
import React from 'react'

export default function footer() {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerText}>© 2024 Cultive Care Tecnologies</Text>
      <Text style={styles.footerText}>Todos los derechos reservados para CCT</Text>
      <Link href='/home1' style={styles.footerText}>Ver aviso de privacidad</Link>
    </View>  )
}
const styles = StyleSheet.create({
    footerContainer: {
      backgroundColor: '#22222250',
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    footerText: {
      color: '#fff',
      marginBottom: 5,
      fontSize: 12,
    },
  });