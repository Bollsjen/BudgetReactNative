import BottomSheet, { BottomSheetView, BottomSheetModal } from "@gorhom/bottom-sheet";
import { forwardRef, useMemo } from "react";
import { View, Text, Dimensions } from "react-native";

export type Ref = BottomSheetModal

export type Props = {
    onDismiss: () => void;
    children: React.ReactNode
}


export const CustomBottomSheetModal = forwardRef<Ref, Props>(({children, onDismiss}, ref) => {
    const snapPoint = useMemo(() => ['100%'], [])

    return (
        <BottomSheetModal
            index={0}
            ref={ref}
            enablePanDownToClose={true}
            snapPoints={snapPoint}
            backgroundStyle={{backgroundColor: '#f3f3f5'}}
            onDismiss={onDismiss}
        >
            <BottomSheetView
                style={{flex: 1}}
            >
            <View>
                {children}
            </View>
            </BottomSheetView>
        </BottomSheetModal>
    )
})