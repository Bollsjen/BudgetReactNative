import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter, useSegments } from 'expo-router';

interface ICustomHeader {
    options?: any,
    title?: string,
    showBack?: boolean
}

export default function CustomHeader({ options, title, showBack }: ICustomHeader) {
  const router = useRouter();

  if(title === undefined && options !== undefined)
    title = options.title
  else if(title === undefined && options === undefined)
    title = 'Budget'

  return (
    <View
        className='bg-zinc-200 flex flex-row justify-start px-4 py-4 border-b border-zinc-400'
    >
      {showBack ? (
        <>
            <TouchableOpacity
                onPress={() => router.back()}
                className='px-2'
            >
                <FontAwesome name="arrow-left" size={24} color="#007AFF" />
            </TouchableOpacity>
        </>
        
      ) :  null
        }      
        <Text className='flex-1 text-black text-2xl'>
                {title}
            </Text>
    </View>
  );
}