import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function SettingsScreen() {
  return (
    <View>
      <Text>Settings Screen</Text>
      <TouchableOpacity        
        onPress={() => router.push('/profile')}
      >
        <Text>Go to Profile</Text>
      </TouchableOpacity>
    </View>
  );
}
