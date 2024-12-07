import { View, Text, SafeAreaView, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AddTransaction() {
  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <ScrollView className="flex-1">
        <View className="p-4">
          <View className="bg-white rounded-xl p-4 mb-4">
            <Text className="text-lg font-semibold mb-4">Add Transaction</Text>
            
            <View className="space-y-4">
              <View>
                <Text className="text-gray-600 mb-1">Amount</Text>
                <TextInput 
                  className="border border-gray-200 rounded-lg p-3"
                  placeholder="0.00"
                  keyboardType="decimal-pad"
                />
              </View>

              <View>
                <Text className="text-gray-600 mb-1">Description</Text>
                <TextInput 
                  className="border border-gray-200 rounded-lg p-3"
                  placeholder="What's this for?"
                />
              </View>

              <View>
                <Text className="text-gray-600 mb-1">Category</Text>
                <View className="border border-gray-200 rounded-lg p-3">
                  <Text>Select Category</Text>
                </View>
              </View>

              <View>
                <Text className="text-gray-600 mb-1">Date</Text>
                <TextInput 
                  className="border border-gray-200 rounded-lg p-3"
                  placeholder="Today"
                />
              </View>

              <TouchableOpacity 
                className="bg-blue-500 rounded-lg p-4 items-center"
              >
                <Text className="text-white font-semibold">Add Transaction</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}