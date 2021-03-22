import React, { useCallback, useState } from "react";
import { Text } from 'react-native';
import styles from './styles/AppStyles';
import SpinnerButton from 'react-native-spinner-button';

const MaterialSpinnerButton = () => {
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
            { backgroundColor: '#dead00' }
          ]}
          isLoading={isLoading}
          spinnerType='MaterialIndicator'
          onPress={handleButtonPress}
        >
          <Text style={styles.buttonText}>Material SpinnerButton</Text>
        </SpinnerButton>
    );
};

export default MaterialSpinnerButton;