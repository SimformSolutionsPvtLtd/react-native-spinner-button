import { useCallback, useState } from "react";
import { Text } from 'react-native';
import styles from './styles/AppStyles';
import SpinnerButton from 'react-native-spinner-button';

const SkypeSpinnerButton = () => {
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
            { backgroundColor: '#123456' }
          ]}
          isLoading={isLoading}
          spinnerType='SkypeIndicator'
          spinnerOptions={{
            maxScale: 2
          }}
          onPress={handleButtonPress}
        >
          <Text style={styles.buttonText}>Skype SpinnerButton</Text>
        </SpinnerButton>
    );
};

export default SkypeSpinnerButton;