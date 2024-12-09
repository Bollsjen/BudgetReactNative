import { FontAwesome } from "@expo/vector-icons";
import { View, Text } from "react-native";

type IconName = keyof typeof FontAwesome.glyphMap

interface IBudgetDistributionCard {
    title: string,
    amount: number,
    icon: IconName,
    backgroundColor?: string
}

export default function BudgetDistributionCard({ title, amount, icon, backgroundColor} : IBudgetDistributionCard){



    return (
        <View className={`w-full bg-white rounded-xl p-4`}>
            <View className="items-center">
                <View className={`${!backgroundColor ? 'bg-red-600' : backgroundColor} w-16 h-16 flex rounded-full items-center justify-center text-center`}>
                    <FontAwesome name={icon} size={24} color={'white'} />
                </View>

                <Text className="text-center mt-2 text-lg text-zinc-400">{title.toUpperCase()}</Text>

                <Text className="text-center text-lg text-zinc-600">{amount} DKK</Text>
            </View>
      </View>
    )
}