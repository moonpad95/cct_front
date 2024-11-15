import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, TouchableOpacity, Modal, ScrollView } from 'react-native';
import { send, EmailJSResponseStatus } from '@emailjs/react-native';
import { modoOscuro } from './modoOscuro';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function ContactForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const { green, backRedes, title, orange, blue, degrader, grayDark, grayReverse } = modoOscuro();

  const onSubmit = async () => {
    if (!email || !name || !message) {
      Alert.alert('Error', 'Por favor completa todos los campos.');
      return;
    }

    try {
      await send(
        'service_yhdij7w',
        'template_4xyomv1',
        {
          name,
          email,
          message,
        },
        {
          publicKey: 'j635OxrQ3eF_N9BBp',
        },
      );
      Alert.alert('Éxito', 'Mensaje enviado exitosamente.');
      setEmail('');
      setName('');
      setMessage('');
      setModalVisible(false);
    } catch (err) {
      Alert.alert('Error', 'No se pudo enviar el mensaje.');
      console.log('ERROR', err);
    }
  };

  return (
    <View >
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
      >
        <MaterialIcons name="email" size={45} color="white" />
      </TouchableOpacity>

      {/* Modal para el formulario de contacto */}
      <Modal visible={isModalVisible} transparent={true} animationType="slide" onRequestClose={() => setModalVisible(false)} >
        <ScrollView style={[styles.modalBackground]}>
        <View style={{ justifyContent: 'center',alignItems: 'center', alignContent: 'center', marginTop: '50%'}}>
          <View style={[styles.modalContainer, { backgroundColor: grayDark }]}>
              <Text style={[styles.title, { color: title, backgroundColor: grayReverse }]}>Contáctanos</Text>

              <Text style={{ color: title, marginBottom: 10, fontWeight: 'bold' }}>Ingrese su correo electrónico</Text>
              <TextInput
                style={[styles.input, { backgroundColor: grayReverse, color: title }]}
                keyboardType="email-address"
                placeholder="Ingrese su Email"
                value={email}
                onChangeText={setEmail}
              />

              <Text style={{ color: title, marginBottom: 10, fontWeight: 'bold' }}>Ingrese su Nombre</Text>
              <TextInput
                style={[styles.input, { backgroundColor: grayReverse, color: title }]}
                placeholder="Ingrese su Nombre"
                value={name}
                onChangeText={setName}
              />

              <Text style={{ color: title, marginBottom: 10, fontWeight: 'bold' }}>Ingrese su mensaje</Text>
              <TextInput
                style={[styles.textArea, { backgroundColor: grayReverse, color: title }]}
                placeholder="Ingrese su Mensaje"
                value={message}
                onChangeText={setMessage}
                multiline
                numberOfLines={4}
              />

              <View style={[styles.buttonContainer, { color: title }]}>
              <Button title="Cerrar" onPress={() => setModalVisible(false)} color={title} />
                <Button title="Enviar" onPress={onSubmit} color={green} />
              </View>
          </View>
          </View>
        </ScrollView>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    marginVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    borderRadius: 50,
    paddingVertical: 10,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  textArea: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginBottom: 15,
    textAlignVertical: 'top',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(10, 30, 10, 0.7)',
  },
  modalContainer: {
    width: '80%',
    
    padding: 30,
    borderRadius: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});
