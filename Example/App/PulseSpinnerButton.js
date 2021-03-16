import { useCallback, useState } from "react";
import { Text } from 'react-native';
import styles from './styles/AppStyles';
import SpinnerButton from 'react-native-spinner-button';

const PulseSpinnerButton = () => {
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
            { backgroundColor: '#4CA0F7' }
          ]}
          isLoading={isLoading}
          spinnerType='PulseIndicator'
          onPress={handleButtonPress}
        >
          <Text style={styles.buttonText}>Pulse SpinnerButton</Text>
        </SpinnerButton>
    );
};

export default PulseSpinnerButton;