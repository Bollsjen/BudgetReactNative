import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

export default function CustomTabBar({ state, descriptors, navigation }: any) {
  return (
    <View
        className='flex flex-row justify-around bg-slate-200 border-t border-slate-400 py-6'
    >
        <TouchableOpacity
            onPress={ () => router.replace('/(tabs)')}
        >
            <FontAwesome 
                name='home' 
                size={36}
            />
        </TouchableOpacity>

        <TouchableOpacity
            onPress={ () => router.replace('/(tabs)/settings')}
        >
            <FontAwesome 
                name='gear' 
                size={36} 
            />
        </TouchableOpacity>
    </View>
  );
}