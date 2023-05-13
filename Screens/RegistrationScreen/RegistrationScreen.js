import { useState } from 'react';
import {
  Dimensions,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

const imgPlus = require('../../Images/plus.png');

export const RegistrationScreen = () => {
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);

  const handleOnFocus = e => {
    setIsKeyboardShown(true);
    //  console.log(Keyboard.isVisible());
  };

  const handleOnBlur = e => {
    setIsKeyboardShown(false);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.kavContainer}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ ...styles.container, marginBottom: isKeyboardShown ? -170 : 0 }}>
          <View style={styles.avatarWrapper}>
            <Image style={styles.avatar}></Image>
            <View style={styles.btnPlus}>
              <Image source={imgPlus} style={{ width: 13, height: 13 }}></Image>
            </View>
          </View>

          <Text style={styles.title}>Регистрация</Text>
          <TextInput
            placeholder="Логин"
            style={styles.input}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
          ></TextInput>
          <TextInput
            placeholder="Адрес электронной почты"
            style={styles.input}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
          ></TextInput>
          <TextInput
            placeholder="Пароль"
            style={styles.input}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
          ></TextInput>
          <TouchableOpacity style={styles.btnRegister}>
            <Text style={styles.btnText}>Зарегистрироваться</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginLink}>
            <Text style={styles.logiLinkText}>Уже есть аккаунт? Войти</Text>
          </TouchableOpacity>
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
    paddingTop: 92,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 78,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position: 'relative',
    display: 'flex',
    gap: 16,
    alignItems: 'center',
  },
  avatarWrapper: {
    position: 'absolute',
    top: -60,
    left: Dimensions.get('window').width / 2 - 60,
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: '#F6F6F6',
  },
  avatar: { width: '100%' },
  btnPlus: {
    width: 25,
    height: 25,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#FF6C00',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    position: 'absolute',
    right: -25 / 2,
    bottom: 14,
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
    marginBottom: 17,
    fontWeight: 500,
    fontSize: 30,
    textAlign: 'center',
  },
  btnRegister: {
    backgroundColor: '#FF6C00',
    height: 51,
    width: 343,
    borderRadius: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 23,
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: 16,
    textTransform: 'none',
  },
  loginLink: {},
  logiLinkText: {
    color: '#1B4371',
  },
});

export default RegistrationScreen;
