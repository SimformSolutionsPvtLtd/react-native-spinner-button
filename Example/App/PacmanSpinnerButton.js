import React, { useCallback, useState } from "react";
import { Text } from 'react-native';
import styles from './styles/AppStyles';
import SpinnerButton from 'react-native-spinner-button';

const PacmanSpinnerButton = () => {
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
            { backgroundColor: '#666666' }
          ]}
          isLoading={isLoading}
          spinnerType='PacmanIndicator'
          onPress={handleButtonPress}
          gradientType={'linear'}
          gradientColors={['#893346', '#1aafb8', '#bf57c3', '#FF1361']}
          gradientColoroffset={['0%', '29%', '67%', '100%']}
          gradientColorAngle={90}
          gradientRadialRadius={10}
          gradientButtonHeight={50}
        >
          <Text style={styles.buttonText}>Pacman SpinnerButton</Text>
        </SpinnerButton>
    );
};

export default PacmanSpinnerButton;