import React, { useCallback, useState } from "react";
import { Text } from 'react-native';
import styles from './styles/AppStyles';
import SpinnerButton from 'react-native-spinner-button';

const BarSpinnerButton = () => {
    const [isLoading, setLoading] = useState(false);

    const handleButtonPress = useCallback(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    });

    return (
        <SpinnerButton
          buttonStyle={[
            styles.buttonStyle,
            { backgroundColor: '#1aafb8' }
          ]}
          isLoading={isLoading}
          spinnerType='BarIndicator'
          onPress={handleButtonPress}
          animationType={'flipInY'}
          indicatorCount={10}
        >
          <Text style={styles.buttonText}>Bar SpinnerButton</Text>
        </SpinnerButton>
    );
};

export default BarSpinnerButton;