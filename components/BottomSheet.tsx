import React, { useRef, useEffect } from 'react';
import { View, StyleSheet, PanResponder, Animated, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const BottomSheet = ({ children, isVisible, onClose } : any) => {
  const screenHeight = Dimensions.get('window').height;
  const pan = useRef(new Animated.ValueXY({ x: 0, y: screenHeight })).current;

  useEffect(() => {
    Animated.spring(pan.y, {
      toValue: isVisible ? 0 : screenHeight,
      useNativeDriver: false,
    }).start();
  }, [isVisible]);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gesture) => {
      if (gesture.dy > 0) {
        pan.setValue({ x: 0, y: gesture.dy });
      }
    },
    onPanResponderRelease: (_, gesture) => {
      if (gesture.dy > screenHeight * 0.2 || gesture.vy > 0.5) {
        Animated.spring(pan.y, {
          toValue: screenHeight,
          useNativeDriver: false,
        }).start(() => onClose());
      } else {
        Animated.spring(pan.y, {
          toValue: 0,
          useNativeDriver: false,
        }).start();
      }
    }
  });

  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: screenHeight,
      backgroundColor: 'white',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: -2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      zIndex: 50
    },
    dragHandle: {
      width: 40,
      height: 5,
      backgroundColor: '#00000040',
      borderRadius: 3,
      marginVertical: 10,
      alignSelf: 'center',
    }
  });

  return (
    <Animated.View
        
      style={[
        styles.container,
        {
          transform: [{ translateY: pan.y }]
        }
      ]}
      {...panResponder.panHandlers}
    >
      <SafeAreaView>
        <View style={styles.dragHandle} />
        {children}
      </SafeAreaView>
    </Animated.View>
  );
};

export default BottomSheet;