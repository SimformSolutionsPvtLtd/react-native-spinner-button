import React from 'react';
import { StyleSheet, Text } from 'react-native';
import SpinnerButton from 'react-native-spinner-button';
import styles from './styles/AppStyles';

const RippleEffectButton: React.FC = () => {
    const buttonPress: () => void = () => {
        console.log('Button Clicked');
    };

    return (
        <SpinnerButton
            buttonStyle={[styles.buttonStyle, style.btnStyle]}
            animationType='ripple-effect'
            onPress={buttonPress}>
            <Text style={styles.buttonText}>RippleButton</Text>
        </SpinnerButton>
    );
};

const style = StyleSheet.create({
    btnStyle: {
        backgroundColor: '#893346',
    },
});

export default RippleEffectButton;
