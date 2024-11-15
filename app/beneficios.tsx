import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { modoOscuro } from './modoOscuro'; // Importa la función modoOscuro
import Footer from './footer'
import { globalStyles } from './styleGlobal';


export default function BeneficiosScreen() {
    const icon = require('./../assets/logo/only_logo.png');

    // Llamamos a modoOscuro para obtener los colores
    const { grayDark, green, title, degrader, orange, blue } = modoOscuro(); // Extraemos grayDark y green

    const handle1 = () => {
        Alert.alert('Ahorro de tiempo', 'Ahorro de tiempo en consultar las condiciones climáticas dentro del invernadero.');
    };
    const handle2 = () => {
        Alert.alert('Predicción con Inteligancia Artificial', 'Ahora es posible el tener un pronostico basado en IA y con mejora constante.');
    }; const handle3 = () => {
        Alert.alert('Alertas Oportunas', 'Sabemos que es indispensable tener alertas aún fuera de la app, por lo que ahora es posible con CCT.');
    }; const handle4 = () => {
        Alert.alert('Multiplataforma', 'Ahora puedes verificar tu invernadero desde tu teléfono desde nuestra App o desde nuestro sitio web.');
    }; const handle5 = () => {
        Alert.alert('Ahorro en gastos', 'Implementa un sistema todo en uno!, cotiza ahora con nosotros tu sistema.');
    };
    const handleCct = () => {
        Linking.openURL('https://cultivecare.website')
    }
    return (
        <>
            <LinearGradient
                colors={[grayDark, green, degrader,  orange, grayDark]}
                // start={{ x: 0, y: 0 }} end={{ x: 1, y: 2}}
                style={styles.background}
            >
                <Text style={[globalStyles.subtitle, { color: title }]}>Del ecosistema de CCT</Text>
                <Text style={[globalStyles.title1, { backgroundColor: orange, color: title }]}>Beneficios</Text>
                <View style={[globalStyles.border, { borderColor: green }]}></View>
                <View style={styles.centerContainer}>
                    <View style={[styles.ring2, {}]}>
                        <View style={[styles.ring1, {}]}>
                            <View style={[styles.ring, {}]}>
                                <TouchableOpacity onPress={handleCct}>
                                    <Image
                                        source={icon}
                                        style={styles.logo}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={handle1} style={[styles.iconContainer, styles.icon1, { backgroundColor: degrader }]}>
                                    <Ionicons name="time-outline" size={30} color={title} />
                                    <Text style={[styles.iconLabel, { color: title }]}>Ahorro de tiempo</Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={handle3} style={[styles.iconContainer, styles.icon2, { backgroundColor: orange }]}>
                                    <Ionicons name="notifications-outline" size={30} color={title} />
                                    <Text style={[styles.iconLabel, { color: title }]}>Alertas Oportunas</Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={handle5} style={[styles.iconContainer, styles.icon3, { backgroundColor: degrader }]}>
                                    <Ionicons name="logo-usd" size={30} color={title} />
                                    <Text style={[styles.iconLabel, { color: title }]}>Ahorro en gastos</Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={handle4} style={[styles.iconContainer, styles.icon4, { backgroundColor: blue }]}>
                                    <Ionicons name="laptop-outline" size={30} color={title} />
                                    <Text style={[styles.iconLabel, { color: title }]}>Multiplataforma</Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={handle2} style={[styles.iconContainer, styles.icon5, { backgroundColor: orange }]}>
                                    <Ionicons name="bulb-outline" size={30} color={title} />
                                    <Text style={[styles.iconLabel, { color: title }]}>Predicción con IA</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </LinearGradient>
            <Footer />
        </>

    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    centerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 150,
    },
    logo: {
        width: 100,
        height: 80,
        // borderRadius: 100,
    },
    ring: {
        position: 'relative',
        width: 300,
        height: 300,
        borderWidth: 1,
        // borderColor: '#b0b0b0',
        borderRadius: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ring2: {
        position: 'relative',
        width: 200,
        height: 200,
        borderWidth: 1,
        // borderColor: '#b0b0b0',
        borderRadius: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ring1: {
        position: 'relative',
        width: 400,
        height: 400,
        borderWidth: 1,
        // borderColor: '#b0b0b0',
        borderRadius: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconContainer: {
        position: 'absolute',
        padding: 15,
        marginVertical: '-10%',
        marginHorizontal: '10%',
        borderRadius: 60,
        width: 100,
        // height: 100,
        // backgroundColor: '#00a900',
        alignItems: 'center',
    },

    iconLabel: {
        marginTop: 10,
        fontSize: 10,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },
    icon1: { top: -30, left: '40%', transform: [{ translateX: -50 }] },
    icon2: { top: '25%', right: -50 },
    icon3: { bottom: '10%', right: -50 },
    icon4: { bottom: '20%', left: -50 },
    icon5: { top: '20%', left: -50 },
});
