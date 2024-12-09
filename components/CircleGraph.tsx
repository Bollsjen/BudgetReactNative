import { View } from 'react-native'
import { Svg, Circle, Text as SvgText } from 'react-native-svg'

interface ICircleGraph {
    spent: number,
    budgetCap: number,

}

export default function CircleGraph({spent, budgetCap} : ICircleGraph){
    const calculatePercent = () => {
        if (budgetCap <= 0) {
            // If the budget is 0 or negative, return "0%" or a special case
            return 0;
        }
        if (spent <= 0) {
            // If no money is spent, return "0%"
            return 0;
        }

        if(spent > budgetCap)
            return 100
        // Calculate the percentage normally
        return (spent / budgetCap) * 100;
    }
  
    const size = 200;
    const strokeWidth = 20;
    const center = size / 2;
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const strokeDashoffset = circumference - ((calculatePercent()) / 100) * circumference;
  
    const budgetText = `${budgetCap.toFixed(0).toLocaleString()} DKK`;
  
    const getColor = () => {
      if (calculatePercent() >= 90) return '#ef4444'; // red-500
      if (calculatePercent() >= 75) return '#f97316'; // orange-500
      return '#22c55e'; // green-500
    };

    return (
        <View className='relative'>
        <Svg width={size} height={size}>
          <Circle 
            cx={center}
            cy={center}
            r={radius}
            stroke='#e5e7eb'
            strokeWidth={strokeWidth}
            fill='none'
          />

          <Circle
            cx={center}
            cy={center}
            r={radius}
            stroke={getColor()}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            transform={`rotate(-90 ${center} ${center})`}
            fill='none'
          />

          <SvgText
            x={center}
            y={center - 15}  // Moved up
            textAnchor="middle"
            alignmentBaseline="middle"
            fill="#FFFF"
            fontSize="24"
            fontWeight="bold"
          >
            {`${Math.round(calculatePercent())}%`}
          </SvgText>
          
          <SvgText
            x={center}
            y={center + 15}  // Center position
            textAnchor="middle"
            alignmentBaseline="middle"
            fill="#FFFF"
            fontSize="16"
          >
            {budgetText}
          </SvgText>
        </Svg>
      </View>
    )
}