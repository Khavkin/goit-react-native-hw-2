import { useEffect, useState } from 'react';
import {
  Dimensions,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import MainButton from '../../Components/Buttons/MainButton';
import { SecondaryButton } from '../../Components/Buttons/SecondaryButton';
import PasswordInput from '../../Components/Inputs/PasswordInput';
import EmailInput from '../../Components/Inputs/EmailInput';

export const LoginScreen = () => {
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () =>
      setIsKeyboardShown(true)
    );
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () =>
      setIsKeyboardShown(false)
    );

    return () => {
      if (keyboardDidShowListener) {
        keyboardDidShowListener.remove();
      }
      if (keyboardDidHideListener) {
        keyboardDidHideListener.remove();
      }
    };
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.kavContainer}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ ...styles.container, marginBottom: isKeyboardShown ? -240 : 0 }}>
          <Text style={styles.title}>Войти</Text>

          <EmailInput />
          <PasswordInput />

          <MainButton buttonText="Войти" style={{ button: { marginTop: 23 } }} onClick={null} />
          <SecondaryButton buttonText="Нет аккаунта? Зарегистрироваться" onClick={null} />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  kavContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  container: {
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 144,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position: 'relative',
    display: 'flex',
    gap: 16,
    alignItems: 'center',
  },

  input: {
    width: 343,
    height: 50,
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
    borderColor: '#E8E8E8',
    borderWidth: 1,
    borderStyle: 'solid',
    padding: 16,
  },
  title: {
    fontFamily: 'RobotoBold',
    marginBottom: 17,
    fontWeight: 500,
    fontSize: 30,
    textAlign: 'center',
  },
});

export default LoginScreen;
