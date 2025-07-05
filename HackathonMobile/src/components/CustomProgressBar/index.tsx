import React, { useEffect } from 'react';
import { StyleProp, ViewStyle, StyleSheet, View } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import HStack from '../Stacks/HStack';
import { Text } from 'react-native-paper';

export interface ICustomProgressBart {
    progress: number;
    style?: StyleProp<ViewStyle>;
    showText?: boolean;
    height?: number;
    color?: string;
}

const CustomProgressBar = (props: ICustomProgressBart) => {
    const { progress, style, showText = true, height = 12, color } = props;

    const progressValue = useSharedValue(progress);

    useEffect(() => {
        progressValue.value = withTiming(progress, { duration: 400 });
    }, [progress]);

    const animatedStyle = useAnimatedStyle(() => ({
        width: `${progressValue.value}%`,
    }));

    const containerStyle = [styles.container, { backgroundColor: '#E0E0E0', height }, style];
    const progressText = `${Math.round(progress)}%`;
    const colorUsedSemGradient = color ?? '#A1D1DA';

    return (
        <HStack style={{ alignItems: 'center', justifyContent: 'space-between', columnGap: 4 }}>
            {showText && <Text variant='titleMedium'>{progressText}</Text>}
            <View style={containerStyle}>
                <Animated.View
                    style={[
                        styles.progressFill,
                        styles.animatedFill,
                        {
                            backgroundColor: colorUsedSemGradient,
                        },
                        animatedStyle,
                    ]}
                />
            </View>
        </HStack>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 16,
        borderRadius: 8,
        overflow: 'hidden',
    },
    animatedFill: {
        height: '100%',
        borderRadius: 8,
        overflow: 'hidden',
    },
    gradientFill: {
        flex: 1,
    },
    progressFill: {
        height: '100%',
        borderRadius: 8,
    },
});

export default CustomProgressBar;