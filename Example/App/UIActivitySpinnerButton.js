import { useCallback, useState } from "react";
import { Text } from 'react-native';
import styles from './styles/AppStyles';
import SpinnerButton from 'react-native-spinner-button';

const UIActivitySpinnerButton = () => {
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
            { backgroundColor: '#F87217' }
          ]}
          isLoading={isLoading}
          spinnerType='UIActivityIndicator'
          onPress={handleButtonPress}
        >
          <Text style={styles.buttonText}>UIActivity SpinnerButton</Text>
        </SpinnerButton>
    );
};

export default UIActivitySpinnerButton;