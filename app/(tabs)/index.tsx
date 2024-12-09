import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import CircleGraph from '@/components/CircleGraph';
import BudgetDistributionCard from '@/components/BudgetDistributionCard';
import BottomSheet, { BottomSheetModal, BottomSheetTextInput, BottomSheetView, useBottomSheetModal } from '@gorhom/bottom-sheet'
import { useEffect, useRef, useState } from 'react';
import { CustomBottomSheetModal } from '@/components/BottomSheetModal';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function HomeScreen() { 
  const bottomSheetRef = useRef<BottomSheetModal>(null)
  const handlePresentModalPress = () => bottomSheetRef.current?.present()
  const handleCloseModalPress = () => bottomSheetRef.current?.close()

  const [amount, setAmount] = useState<number>()
  const [description, setDescription] = useState('')
  const [date, setDate] = useState<Date>(new Date())
  const [openDate, setOpenDate] = useState(false)
  const [category, setCategory] = useState('Other')

  const formatDate = () => {
    const today = new Date()
    const isToday = date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear()

    if(isToday)
      return 'Today'
    return date.toLocaleDateString('da-DK')
  }

  return (
    <View className='bg-zinc-100'> 
      <CustomBottomSheetModal ref={bottomSheetRef} onDismiss={handleCloseModalPress}>
        <View className='flex felx-column justify-center mx-12'>
          <View className='flex flex-column justify-center'>
            <Text className='text-center font-bold text-lg'>
              Amount
            </Text>
            <BottomSheetTextInput 
              style={styles.input}
              keyboardType='numeric'
              placeholder='0 DKK' 
              onChangeText={(text) => setAmount(Number(text))}
              value={amount?.toString()}
            />
          </View>

          <View className='flex flex-column justify-center'>
            <Text className='text-center font-bold text-lg'>
              Description
            </Text>
            <BottomSheetTextInput 
              style={styles.input}
              keyboardType='default'
              placeholder='Description' 
              onChangeText={(text) => setDescription(text)}
              value={description?.toString()}              
            />
          </View>

          <View className='flex flex-column justify-center'>
            <Text className='text-center font-bold text-lg'>
              Description
            </Text>
            <TouchableOpacity 
              className='flex flex-row justify-center bg-zinc-200 p-2'
              onPress={() => setOpenDate(true)}  
            >
              <Text>{formatDate()}</Text>
            </TouchableOpacity>
            {
              openDate && (
                <DateTimePicker
                  mode={'date'}
                  value={date}
                  onChange={(event, selectedDate) => {
                    setOpenDate(false)
                    if(selectedDate) setDate(selectedDate)
                  }}
                />     
              )
            }
          </View>
        </View>  
      </CustomBottomSheetModal>     
        <ScrollView 
          className='flex flex-column relative'
        >
          <View className='absolute -top-[600px] w-[1000px] h-[1000px] -left-[290px] bg-purple-700 rounded-full'>
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

          <View className='mt-8 mx-6'>
              <TouchableOpacity
                className='bg-sky-300 p-4 rounded-full'
                onPress={() => {
                  console.log('open')
                  handlePresentModalPress()
                }}
              >
                <View className='flex-row justify-between items-center w-50 px-2'>
                  <FontAwesome name='plus' size={18} color={'white'} />
                  <Text className='text-white font-black text-xl'>NEW EXPENSE</Text>
                  <View></View>
                </View>                
              </TouchableOpacity>
          </View>

          <Text className='text-center text-2xl font-bold text-zinc-700 my-8'>
            BUDGET DISTRIBUTION
          </Text>

          <View className='flex-row flex-wrap justify-between mx-6 gap-3'>
            <View className='w-[45%] mb-6'>
              <BudgetDistributionCard title='rent' amount={10000} icon='credit-card' />
            </View>

            <View className='w-[45%] mb-6'>
              <BudgetDistributionCard title='food' amount={3000} icon='cutlery' backgroundColor='bg-sky-400' />
            </View>

            <View className='w-[45%] mb-6'>
              <BudgetDistributionCard title='lifestyle' amount={5000} icon='shopping-bag' backgroundColor='bg-yellow-400' />
            </View>

            <View className='w-[45%] mb-6'>
              <BudgetDistributionCard title='housing' amount={700} icon='home' backgroundColor='bg-pink-500' />
            </View>
          </View>
        </ScrollView>        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    padding: 36,
    alignItems: 'center',
  },
  input: {
    marginTop: 8,
    marginBottom: 10,
    borderRadius: 10,
    fontSize: 16,
    lineHeight: 20,
    padding: 8,
    backgroundColor: 'rgb(228 228 231)',
    textAlign: 'center'
  },
});