import { Slot } from 'expo-router';
import { Stack } from 'expo-router/stack';
import "../global.css"

export default function RootLayout() {
  return (
    <Stack 
      screenOptions={{ 
        headerShown: false,
        animation: 'slide_from_right',
      }} 
    />
  )
}