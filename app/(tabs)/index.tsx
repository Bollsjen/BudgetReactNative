import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import CircleGraph from '@/components/CircleGraph';
import BudgetDistributionCard from '@/components/BudgetDistributionCard';

export default function HomeScreen() {
  return (
    <ScrollView 
      className='flex flex-column relative'
    >
      <View className='absolute -top-[600px] w-[1000px] h-[1000px] -left-[290px] bg-blue-600 rounded-full'>
      </View>

      <View className='flex flex-row justify-center my-8'>
        <Text className='text-white font-bold text-4xl'>BUDGET</Text>
      </View>

      <View className='flex flex-row justify-center'>
        <CircleGraph 
          spent={2000} 
          budgetCap={4000} 
        />
      </View>

      <View className='flex flex-column mx-6 bg-white p-4 rounded-xl mt-8'>
        <View className='flex flex-row justify-between'>
          <TouchableOpacity className='p-2'>
            <FontAwesome name='chevron-left' size={18} />
          </TouchableOpacity>

          <Text className='text-xl'>
            December 2024
          </Text>

          <TouchableOpacity className='p-2'>
            <FontAwesome name='chevron-right' size={18} />
          </TouchableOpacity>
        </View>

        <View className='flex flex-row justify-center py-4'>
          <View className='border-b border-zinc-300 w-80'></View>
        </View>

        <View className='flex flex-row justify-around'>
          <View className='flex flex-column justify-center'>
            <Text className='font-bold text-xl text-zinc-400 text-center'>
              Daily budget
            </Text>

            <Text className='font-bold text-3xl text-center'>
              122 DKK
            </Text>
          </View>

          <View className='flex flex-column justify-center'>
            <Text className='font-bold text-xl text-zinc-400 text-center'>
              Total spent
            </Text>

            <Text className='font-bold text-3xl text-center'>
              2000
            </Text>
          </View>
        </View>
      </View>

      <Text className='text-center text-2xl font-bold text-zinc-700 my-8'>
        BUDGET DISTRIBUTION
      </Text>

      <View className='flex-row flex-wrap justify-between mx-6'>
        <View className='w-[30%] mb-6'>
          <BudgetDistributionCard title='rent' amount={10000} icon='credit-card' />
        </View>

        <View className='w-[30%] mb-6'>
          <BudgetDistributionCard title='food' amount={3000} icon='cutlery' backgroundColor='bg-sky-400' />
        </View>

        <View className='w-[30%] mb-6'>
          <BudgetDistributionCard title='lifestyle' amount={5000} icon='shopping-bag' backgroundColor='bg-yellow-400' />
        </View>

        <View className='w-[30%] mb-6'>
          <BudgetDistributionCard title='housing' amount={700} icon='home' backgroundColor='bg-pink-500' />
        </View>
      </View>
    </ScrollView>
  );
}