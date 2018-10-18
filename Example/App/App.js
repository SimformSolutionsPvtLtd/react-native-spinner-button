import React, { Component } from 'react';
import {
  ScrollView,
  SafeAreaView,
  Text,
  View
} from 'react-native';
import styles from './styles/AppStyles';
import SpinnerButton from 'react-native-spinner-button';
// import SpinnerButton from './components/SpinnerButton';
const colors = [
  '#893346',
  '#1aafb8',
  '#bf57c3',
  '#dead00',
  '#666666',
  '#4CA0F7',
  '#123456',
  '#F87217',
];
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultLoading: false,
      barLoading: false,
      dotLoading: false,
      materialLoading: false,
      pacmanLoading: false,
      pulseLoading: false,
      skypeLoading: false,
      uiAcivityLoading: false,
      waveLoading: false,
    };
  }
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <ScrollView>
          <View style={styles.container}>
            <SpinnerButton
              buttonStyle={[
                styles.buttonStyle,
                { backgroundColor: colors[0] }
              ]}
              isLoading={this.state.defaultLoading}
              onPress={() => {
                this.setState({ defaultLoading: true });
                setTimeout(() => {
                  this.setState({ defaultLoading: false });
                }, 3000);
              }}
              indicatorCount={10}
            >
              <Text style={styles.buttonText}>Default Or Ball SpinnerButton</Text>
            </SpinnerButton>
            <SpinnerButton
              buttonStyle={[
                styles.buttonStyle,
                { backgroundColor: colors[1] }
              ]}
              isLoading={this.state.barLoading}
              spinnerType='BarIndicator'
              onPress={() => {
                this.setState({ barLoading: true });
                setTimeout(() => {
                  this.setState({ barLoading: false });
                }, 3000);
              }}
              animationType={'flipInY'}
            >
              <Text style={styles.buttonText}>Bar SpinnerButton</Text>
            </SpinnerButton>
            <SpinnerButton
              buttonStyle={[
                styles.buttonStyle,
                { backgroundColor: colors[2] }
              ]}
              isLoading={this.state.dotLoading}
              indicatorCount={10}
              size={10}
              spinnerType='DotIndicator'
              onPress={() => {
                this.setState({ dotLoading: true });
                setTimeout(() => {
                  this.setState({ dotLoading: false });
                }, 3000);
              }}
              animationType={'flipInX'}
            >
              <Text style={styles.buttonText}>Dot SpinnerButton</Text>
            </SpinnerButton>
            <SpinnerButton
              buttonStyle={[
                styles.buttonStyle,
                { backgroundColor: colors[3] }
              ]}
              isLoading={this.state.materialLoading}
              spinnerType='MaterialIndicator'
              onPress={() => {
                this.setState({ materialLoading: true });
                setTimeout(() => {
                  this.setState({ materialLoading: false });
                }, 3000);
              }}
            >
              <Text style={styles.buttonText}>Material SpinnerButton</Text>
            </SpinnerButton>
            <SpinnerButton
              buttonStyle={[
                styles.buttonStyle,
                { backgroundColor: colors[4] }
              ]}
              isLoading={this.state.pacmanLoading}
              spinnerType='PacmanIndicator'
              onPress={() => {
                this.setState({ pacmanLoading: true });
                setTimeout(() => {
                  this.setState({ pacmanLoading: false });
                }, 3000);
              }}
            >
              <Text style={styles.buttonText}>Pacman SpinnerButton</Text>
            </SpinnerButton>
            <SpinnerButton
              buttonStyle={[
                styles.buttonStyle,
                { backgroundColor: colors[5] }
              ]}
              isLoading={this.state.pulseLoading}
              spinnerType='PulseIndicator'
              onPress={() => {
                this.setState({ pulseLoading: true });
                setTimeout(() => {
                  this.setState({ pulseLoading: false });
                }, 3000);
              }}
            >
              <Text style={styles.buttonText}>Pulse SpinnerButton</Text>
            </SpinnerButton>
            <SpinnerButton
              buttonStyle={[
                styles.buttonStyle,
                { backgroundColor: colors[6] }
              ]}
              isLoading={this.state.skypeLoading}
              spinnerType='SkypeIndicator'
              spinnerOptions={{
                maxScale: 2
              }}
              onPress={() => {
                this.setState({ skypeLoading: true });
                setTimeout(() => {
                  this.setState({ skypeLoading: false });
                }, 3000);
              }}
            >
              <Text style={styles.buttonText}>Skype SpinnerButton</Text>
            </SpinnerButton>
            <SpinnerButton
              buttonStyle={[
                styles.buttonStyle,
                { backgroundColor: colors[7] }
              ]}
              isLoading={this.state.uiAcivityLoading}
              spinnerType='UIActivityIndicator'
              onPress={() => {
                this.setState({ uiAcivityLoading: true });
                setTimeout(() => {
                  this.setState({ uiAcivityLoading: false });
                }, 3000);
              }}
            >
              <Text style={styles.buttonText}>UIActivity SpinnerButton</Text>
            </SpinnerButton>
            <SpinnerButton
              buttonStyle={[
                styles.buttonStyle,
                { backgroundColor: colors[8] }
              ]}
              isLoading={this.state.waveLoading}
              spinnerType='WaveIndicator'
              spinnerOptions={{
                waveMode: "outline"
              }}
              onPress={() => {
                this.setState({ waveLoading: true });
                setTimeout(() => {
                  this.setState({ waveLoading: false });
                }, 3000);
              }}
            >
              <Text style={styles.buttonText}>Wave SpinnerButton</Text>
            </SpinnerButton>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
