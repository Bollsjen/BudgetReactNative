import { View, Text, SafeAreaView } from 'react-native';

export default function Stats() {
  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <View className="p-4">
        <View className="bg-white p-6 rounded-xl shadow-sm">
          <Text className="text-xl font-bold text-gray-900 mb-2">Statistics</Text>
          <Text className="text-gray-600">Your spending analytics will appear here</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}