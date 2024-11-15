// modoOscuro.tsx
import { useEffect, useState } from 'react';
import { Appearance } from 'react-native';

// Exportar la función modoOscuro
export const modoOscuro = () => {
    const [grayDark, setGrayDark] = useState('');
    const [green, setGreen] = useState('');
    const [orange, setOrange] = useState('');
    const [degrader, setDegrader] = useState('');
    const [title, setTitle] = useState('');
    const [blue, setBlue] = useState('');
    const [card, setCard] = useState('')
    const [minusWhite, setMinusWhite] = useState('')

    const fondoOscuro = require('../assets/fondo_oscuro.jpg');
    const texture1light = require('../assets/texture1.jpg')
    const texturedark = require('../assets/texture2.jpg')
    const fondoClaro = require('../assets/fondo_2.jpg');
    const fondoOscuroIndex = require('../assets/fondo3.jpg');
    const fondoClaroIndex = require('../assets/fondo_2.jpg');
    const [backRedes, setBackRedes] = useState(fondoClaro);
    const [texture1, setTexture1] = useState('');
    const [backIndex, setBackIndex] = useState(fondoClaroIndex);
    const [grayReverse, setGrayReverse] = useState('')


    //FUNCION ORIGINAL PARA DETECTAR MEDIANTE USEEFFECT CAMBIOS EN EL ESQUEMA DE COLOR Y EL ESQUEMA ACTUAL.
    useEffect(() => {
      const currentColorScheme = Appearance.getColorScheme();
      updateColorScheme(currentColorScheme);

      // Listener para cambios en tiempo real.
      const subscription = Appearance.addChangeListener(({ colorScheme }) => {
          updateColorScheme(colorScheme);
      });

      // Limpieza del listener cuando el componente se desmonta.
      return () => subscription.remove();
  }, []);


    // CAMBIO DE COLOR EN FONDOS y verdes
    const updateColorScheme = (colorScheme) => {
        if (colorScheme === 'dark') {
            setGrayDark('#111111'); // Color para modo oscuro
            setGreen('#007400');
            setOrange('#cf7b2b')
            setDegrader('#188600');
            setTitle('#c0c0c0');
            setBlue('#0069d9');
            setBackRedes(fondoOscuro);
            setBackIndex(fondoOscuroIndex);
            setTexture1(texturedark)
            setGrayReverse('#11111185')
            setCard('#00000085')
            setMinusWhite('#c0c0c0')

        } else {
            setGrayDark('#f0f0f0'); // Color para modo claro
            setGreen('#00a900');
            setOrange('#ffc352')
            setDegrader('#20de00');
            setTitle('#000');
            setBlue('#86c1ff');
            setBackRedes(fondoClaro);
            setBackIndex(fondoClaroIndex);
            setTexture1(texture1light)
            setGrayReverse('#12121225')
            setCard('#cacaca90')
            setMinusWhite('#f0f0f0')

        }
    };

    return {grayDark, green, degrader, title, blue, backRedes, backIndex, orange, texture1, grayReverse, card, minusWhite}; 
};
