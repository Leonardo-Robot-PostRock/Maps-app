import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { Stack } from 'expo-router';

import 'react-native-reanimated';

import { useColorScheme } from '@/presentation/hooks/use-color-scheme';
import PermissionsCheckerProvider from '@/presentation/providers/PermissionsCheckerProvider';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <PermissionsCheckerProvider>
          <Stack
            screenOptions={{
              headerShown: false
            }}
          >
            <Stack.Screen
              name='loading/index'
              options={{
                animation: 'none'
              }}
            />
            <Stack.Screen
              name='map/index'
              options={{
                animation: 'fade'
              }}
            />
            <Stack.Screen
              name='permissions/index'
              options={{
                animation: 'fade'
              }}
            />
          </Stack>

        </PermissionsCheckerProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
