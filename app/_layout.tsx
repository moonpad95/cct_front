import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/components/useColorScheme';
import { modoOscuro } from './modoOscuro';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const { title, green, degrader, grayDark, blue, orange} = modoOscuro(); // Extraemos grayDark y green
  const backP = 'Atras';

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="Nosotros" options={{
          headerStyle: {
            backgroundColor: grayDark,
          },
          headerTintColor: title,
          headerTitle: "Más Sobre CCT",
          headerBackTitle: backP,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        {/* <Stack.Screen name="modal" options={{ presentation: 'modal' }} /> */}
        <Stack.Screen name="home1" options={{ presentation: 'modal', headerTitle: 'Aviso de privacidad' }} />
        <Stack.Screen name="beneficios" options={{
          headerStyle: {
            backgroundColor: grayDark,
          },
          headerTintColor: title,
          headerTitle: "Beneficios de CCT",
          headerBackTitle: backP,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen name="redes" options={{
          headerStyle: {
            backgroundColor: grayDark,
          },
          headerTintColor: title,
          headerTitle: "Redes Sociales",
          headerBackTitle: backP,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen name="soporte" options={{
          headerStyle: {
            backgroundColor: grayDark,
          },
          headerTintColor: title,
          headerTitle: "FAQ",
          headerBackTitle: backP,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
      </Stack>
    </ThemeProvider>
  );
}
