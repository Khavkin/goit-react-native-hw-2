import { Dimensions, ImageBackground, StyleSheet, View } from 'react-native';
import RegistrationScreen from './Screens/RegistrationScreen/RegistrationScreen';

const bgImage = require('./Images/Photo-BG.png');

export default function App() {
  return (
    <>
      <ImageBackground
        source={bgImage}
        resizeMode="cover"
        style={styles.backgroundImage}
      ></ImageBackground>

      <View style={styles.container}>
        <RegistrationScreen />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  backgroundImage: {
    position: 'absolute',
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    zIndex: -1,
    // justifyContent: 'center',
  },
});
