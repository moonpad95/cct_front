import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons'; // Para el icono
import { modoOscuro } from './modoOscuro';
import Footer from './footer';
import { globalStyles } from './styleGlobal';

// Define los tipos de las props para el componente Collapse
interface CollapseProps {
  title1: string;
  content: string[];
}

// Componente colapsable reutilizable con tipos de props definidos
const Collapse: React.FC<CollapseProps> = ({ title1, content }) => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <View style={globalStyles.containerCollapse}>
      <TouchableOpacity
        style={styles.collapseButton}
        onPress={() => setCollapsed(!collapsed)}
      >
        <Text style={styles.collapseText}>
          {title1}
        </Text>
        <Ionicons
          name={collapsed ? 'chevron-down-outline' : 'chevron-up-outline'}
          size={24}
          color="white"
        />
      </TouchableOpacity>

      {/* Sección colapsable */}
      {!collapsed && (
        <View style={styles.collapsedContent}>
          {content.map((item, index) => (
            <Text key={index} style={styles.contentText}>
              {item}
            </Text>
          ))}
        </View>
      )}

    </View>
  );
};

export default function Soporte() {
  const sections = [
    {
      title1: 'Quienes somos',
      content: [
        '- Somos una empresa dedicada a la tecnología agrícola.',
        '- Nuestro objetivo es mejorar el rendimiento de los cultivos.',
        '- Innovamos con tecnologías de monitoreo avanzadas.',
      ],
    },
    {
      title1: 'Qué hacemos',
      content: [
        '- Desarrollamos sensores avanzados para monitorear temperatura y humedad.',
        '- Generamos informes detallados para los agricultores.',
        '- Proveemos alertas y pronósticos inteligentes.',
      ],
    },
    {
      title1: 'Cómo contactarnos',
      content: [
        '- Puedes comunicarte con nosotros a través de nuestra App Cultive Care Tech.',
        '- Ofrecemos soporte técnico por chat de WhatsApp',
      ],
    },
    {
      title1: '¿En que consiste el sistema CCT?',
      content: [
        '- De primera mano, consiste en una placa de sensores conectados a internet.',
        '- Los datos recolectados, son enviados a una base de datos externa',
        '- Los datos son mostrados en tiempo real en la app CCT Monitor',
        '- Los datos son procesados y para su consulta y generar pronósticos'
      ],
    },
    {
      title1: '¿Dónde puedo solicitar mi sistema CCT Monitor?',
      content: [
        'En caso de estar interesado, puede enviarnos un mensaje por WhatsApp o mediante el Formulario de Contacto.'
      ],
    },
  ];
  const { title, orange ,grayDark, degrader, green } = modoOscuro();

  return (
    <>
    <LinearGradient
      colors={[grayDark, orange, orange, grayDark]}
      style={styles.background}
    >
      <ScrollView>
      <Text style={[globalStyles.subtitle, {color: title}]}>Preguntas frecuentes</Text>
      <Text style={[globalStyles.title1, { backgroundColor: orange, color: title }]}>FAQ</Text>
        <View style={globalStyles.border}></View>
        {sections.map((section, index) => (
          <Collapse
            key={index}
            title1={section.title1}
            content={section.content}
          />
        ))}
      </ScrollView>
    </LinearGradient>
          <Footer />
          </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  background:{
      flex: 1,
  },
  title11: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#f0f0f0',

    padding: 10,
    paddingLeft: 40,
    borderBottomRightRadius: 60,
    marginBottom: 30,
  },

  collapseButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(10, 200, 0, 0.8)',
    padding: 15,
    borderRadius: 10,
    marginBottom: 0, 
  },
  collapseText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  collapsedContent: {
    marginTop: 5,
    backgroundColor: '#d4ffd470', // Un verde más claro para el fondo del contenido colapsado
    padding: 15,
    borderRadius: 10,
  },
  contentText: {
    fontSize: 16,
    color: '#006400', // Texto en verde oscuro
    marginBottom: 5,
  },
});
