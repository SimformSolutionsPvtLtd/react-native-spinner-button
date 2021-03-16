import { useCallback, useState } from "react";
import { Text } from 'react-native';
import styles from './styles/AppStyles';
import SpinnerButton from 'react-native-spinner-button';

const DotSpinnerButton = () => {
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
            { backgroundColor: '#bf57c3' }
          ]}
          isLoading={isLoading}
          indicatorCount={10}
          size={10}
          spinnerType='DotIndicator'
          onPress={handleButtonPress}
          animationType={'flipInX'}
        >
          <Text style={styles.buttonText}>Dot SpinnerButton</Text>
        </SpinnerButton>
    );
};

export default DotSpinnerButton;