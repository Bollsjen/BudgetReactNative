import { View, Text, StyleSheet } from 'react-native';
import CustomHeader from '@/components/CustomHeader';

export default function ProfileScreen() {
  return (
    <View>
      <CustomHeader title='Profile' showBack={true} />
      <Text>Profile Screen</Text>
    </View>
  );
}
