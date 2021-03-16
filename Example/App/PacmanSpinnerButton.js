import { useCallback, useState } from "react";
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
        >
          <Text style={styles.buttonText}>Pacman SpinnerButton</Text>
        </SpinnerButton>
    );
};

export default PacmanSpinnerButton;