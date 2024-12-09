import { router  } from 'expo-router';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

function getCurrentRouteName(state: any): string {

    const route = state.routes[state.index];
    if (route.state) {
      // Dive into nested navigators
      return getCurrentRouteName(route.state);
    }
    return route.name;
  }

interface CustomAppBarProps {
    title: string
}

export default function CustomAppBar ({ title } : CustomAppBarProps) {
    return (
      <View className='flex flex-row bg-slate-100 px-4 py-8 items-center shadow-lg'>
        {/* Implement back button logic */}
        <TouchableOpacity onPress={() => router.back()} className='px-4 py-2'>
            {
                router.canGoBack() ? (<Text><FontAwesome name="chevron-left" size={18} color="black" /></Text>) : null
            }
          
        </TouchableOpacity>
        <Text className=''>{title}</Text>
      </View>
    );
  };