import { useCallback, useState } from "react";
import { Text } from 'react-native';
import styles from './styles/AppStyles';
import SpinnerButton from 'react-native-spinner-button';

const DefaultOrBallSpinnerButton = () => {
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
            { backgroundColor: '#893346' }
          ]}
          isLoading={isLoading}
          onPress={handleButtonPress}
          indicatorCount={10}
        >
          <Text style={styles.buttonText}>Default Or Ball SpinnerButton</Text>
        </SpinnerButton>
    );
};

export default DefaultOrBallSpinnerButton;