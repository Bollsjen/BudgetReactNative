import { View, Text, SafeAreaView, ScrollView } from 'react-native';

export default function Transactions() {
  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <ScrollView className="flex-1">
        <View className="p-4">
          {/* Monthly Summary */}
          <View className="bg-white rounded-xl p-4 mb-4">
            <Text className="text-lg font-semibold mb-2">March 2024</Text>
            <View className="flex-row justify-between">
              <View>
                <Text className="text-gray-500">Income</Text>
                <Text className="text-green-600 font-bold text-xl">+$3,500.00</Text>
              </View>
              <View>
                <Text className="text-gray-500">Expenses</Text>
                <Text className="text-red-600 font-bold text-xl">-$2,845.00</Text>
              </View>
            </View>
          </View>

          {/* Transactions List */}
          <View className="bg-white rounded-xl p-4">
            <Text className="text-lg font-semibold mb-4">All Transactions</Text>
            
            <View className="space-y-4">
              <View className="flex-row items-center justify-between py-2 border-b border-gray-100">
                <View>
                  <Text className="font-medium text-gray-900">Groceries</Text>
                  <Text className="text-gray-500 text-sm">Today</Text>
                </View>
                <Text className="text-red-600 font-medium">-$85.00</Text>
              </View>

              <View className="flex-row items-center justify-between py-2 border-b border-gray-100">
                <View>
                  <Text className="font-medium text-gray-900">Netflix</Text>
                  <Text className="text-gray-500 text-sm">Yesterday</Text>
                </View>
                <Text className="text-red-600 font-medium">-$15.99</Text>
              </View>

              <View className="flex-row items-center justify-between py-2 border-b border-gray-100">
                <View>
                  <Text className="font-medium text-gray-900">Salary</Text>
                  <Text className="text-gray-500 text-sm">Mar 1</Text>
                </View>
                <Text className="text-green-600 font-medium">+$3,500.00</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}