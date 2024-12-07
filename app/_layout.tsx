import { Stack } from 'expo-router';
import { initDatabase } from './database/db';
import { useEffect } from 'react';
import "../global.css"

export default function RootLayout() {
  //useEffect(() => {
  //  initDatabase()
  //}, [])

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}