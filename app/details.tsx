import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import CustomHeader from '@/components/CustomHeader';

export default function DetailsScreen() {
  return (
    <SafeAreaView>
      <CustomHeader title="Details" showBack={true} />
      <Text>Details Screen</Text>
    </SafeAreaView>
  );
}