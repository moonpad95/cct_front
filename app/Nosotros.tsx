import React, { useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { modoOscuro } from './modoOscuro';
import Team from './team';
import Footer from './footer';
import { globalStyles } from './styleGlobal';

export default function TabOneScreen() {
  const { grayDark, green, degrader, title, orange, texture1, grayReverse, card, minusWhite } = modoOscuro();

  const scrollY = useRef(new Animated.Value(0)).current;

  // Función para crear animaciones de aparición/desaparición
  const createAnimation = (index) => {
    return {
      opacity: scrollY.interpolate({
        inputRange: [index * 100 - 100, index * 100, index * 100 + 100],
        outputRange: [0.5, 1, 0.7],
        extrapolate: 'extend',
      }),
      transform: [
        {
          translateY: scrollY.interpolate({
            inputRange: [index * 100 - 100, index * 100, index * 100 + 100],
            outputRange: [10, 1, -100],
            extrapolate: 'clamp',
          }),
        },
      ],
    };
  };

  return (
    <LinearGradient
      colors={[grayDark, green]}
      start={{ x: 1.5, y: 0 }}
      end={{ x: 1.8, y: 0.8 }}
      style={{ flex: 1 }}
    >
      <Animated.ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
      >
        {/* <Animated.View style={createAnimation(0)}> */}
        <View>
          <Text style={[globalStyles.subtitle, { color: title }]}>Conoce más sobre</Text>
          <Text style={[globalStyles.title1, { backgroundColor: orange, color: title }]}>Nosotros</Text>
          <View style={globalStyles.border}></View>
        </View>
        {/* </Animated.View> */}

        <View style={[globalStyles.container, { backgroundColor: card }]}>
          <Animated.View style={[styles.card, createAnimation(1), {borderColor: orange}]}>
            <ImageBackground
              source={texture1} // Reemplaza con la ruta a tu imagen
              style={styles.backgroundImage}
            >
              <Ionicons name="time-outline" size={32} color={'#f0f0f0'} />
              <Text style={[globalStyles.title, { color: minusWhite }]}>Antecedentes</Text>
              <Text style={[styles.text, { color: minusWhite }]}>
                Cultive Care Technologies es una marca creada por Concept Care Technologies a partir de la necesidad existente de monitorear, predecir y automatizar determinados procesos dentro de los invernaderos, cultivos y otros usos agronómicos.
              </Text>
            </ImageBackground>

          </Animated.View>

          <Animated.View style={[styles.card, createAnimation(2)]}>
          <ImageBackground
              source={texture1} // Reemplaza con la ruta a tu imagen
              style={styles.backgroundImage}
            >
            <Ionicons name="flag-outline" size={32} color={minusWhite} />
            <Text style={[globalStyles.title, { color: minusWhite }]}>Misión</Text>
            <Text style={[styles.text, { color: minusWhite }]}>
            Crear entornos seguros e inteligentes para un monitoreo constante de invernaderos dedicados a los cultivos en las grandes industrias, facilitando herramientas de monitoreo a agricultores.
            </Text>
            </ImageBackground>
          </Animated.View>
          <Animated.View style={[styles.card, createAnimation(3), {borderColor: orange}]}>
            <ImageBackground
              source={texture1} // Reemplaza con la ruta a tu imagen
              style={styles.backgroundImage}
            >
              <Ionicons name="eye" size={32} color={minusWhite} />
              <Text style={[globalStyles.title, { color: minusWhite }]}>Visión</Text>
              <Text style={[styles.text, { color: minusWhite}]}>
              Para el año 2030 todos los invernaderos dedicados al cultivo de manera comercial o para investigación en el estado de Durango, dispongan de estas herramientas de monitoreo para evitar tragedias y facilitar la supervisión de los cultivos. Del mismo modo, nos planteamos para dentro de 10 años, ser la mejor opción en México en tecnologías de monitoreo agroambientales.
              </Text>
            </ImageBackground>

          </Animated.View>
        </View>
        <View style={[globalStyles.container, { backgroundColor: card }]}>
        <Text style={[globalStyles.subtitle, { color: title }]}>Conoce Nuestro</Text>
        <Text style={[globalStyles.title1, { backgroundColor: orange, color: title, marginHorizontal: -20 }]}>Equipo de Desarrollo</Text>
          {/* <Animated.View style={createAnimation(4)}> */}
          <View style={[globalStyles.border, {marginHorizontal: -20}]}></View>
          <Team />
          {/* </Animated.View> */}
        </View>

        <Footer />
      </Animated.ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({

  backgroundImage: {
    // flex: 2,
    alignItems: 'center',
    resizeMode: 'cover',
    justifyContent: 'center',
    // borderWidth: 2,
    padding: '12%',
    borderRadius: 15,

  },
  card: {
    alignItems: 'center',
    borderRadius: 15,
    marginVertical: 10
  },
  // card1: {
  //   borderRadius: 15,
  //   padding: '12%',
  //   marginHorizontal: 15,
  //   marginVertical: 50,
  //   borderWidth: 2,
  //   alignItems: 'center',
  // },

  text: {
    fontSize: 15,
    textAlign: 'justify',
    marginTop: 10,
  },
});
