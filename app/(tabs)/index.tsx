import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-gray-50 w-full relative">
      <ScrollView className="flex-1 w-full">
        <View className="flex flex-row p-4 w-full justify-between items-center">
          <TouchableOpacity className="px-8 py-4 items-center justify-center">
            <FontAwesome name="caret-left" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity className="items-center justify-center">
            {/*<FontAwesome name="check" size={24} color="black" />*/}
            <Text>December 2024</Text>
          </TouchableOpacity>

          <TouchableOpacity className="px-8 py-4 items-center justify-center">
            <FontAwesome name="caret-right" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </ScrollView>

      <TouchableOpacity className='absolute bottom-6 right-6 w-20 h-20 rounded-full bg-sky-400 items-center justify-center'>
        <FontAwesome name="plus" size={24} color="white" className='p-6' />
      </TouchableOpacity>
    </SafeAreaView>
  );
}