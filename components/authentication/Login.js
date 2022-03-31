import auth from '@react-native-firebase/auth';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';

function Login({route, navigation}) {
  const [email, onChangemail] = React.useState('');
  const [password, onChangepassword] = React.useState(null);
  // const navigation = useNavigation();
  const handleLogin = () =>
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate('Home'),
          {
            email: email,
            password: password,
          };
        Alert.alert('succesfully signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          // Alert.alert('wrong email and password');
          Alert.alert('That email address is invalid!');
        } else {
          Alert.alert('email or passwoed is wrong');
        }

        console.error(error);
      });

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.title}>LOGIN</Text>
        <TextInput
          style={styles.input1}
          onChangeText={onChangemail}
          value={email}
          placeholder="Enter Your Email"
        />
        <TextInput
          style={styles.input2}
          onChangeText={onChangepassword}
          value={password}
          placeholder="Enter Your Password"
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text>LOGIN</Text>
        </TouchableOpacity>
        <Text style={styles.signupText}>Don't have an account?</Text>
        <TouchableOpacity
          style={styles.signupButton}
          onPress={() => navigation.navigate('SignUp')}>
          <Text>CREATE ACCOUNT</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'red',
    // marginHorizontal: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'red',
  },
  title: {
    color: '#E8F0FE',
    fontSize: 28,
    fontWeight: 'bold',
    letterSpacing: 3,
    marginTop: 80,
  },
  image: {
    borderRadius: 50,
    width: 100,
    height: 100,
  },
  input1: {
    backgroundColor: '#E8F0FE',
    borderRadius: 30,
    borderColor: '#E8F0FE',
    color: 'black',
    width: 250,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginTop: 100,
  },
  input2: {
    backgroundColor: '#E8F0FE',
    borderRadius: 30,
    borderColor: '#E8F0FE',
    color: 'black',
    width: 250,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    marginTop: 10,
    alignItems: 'center',
    padding: 10,
    width: 100,
    borderRadius: 20,
    fontWeight: 'bold',
    color: 'red',
    backgroundColor: '#E8F0FE',
  },
  signupText: {
    marginTop: 100,
    color: 'black',
  },
  signupButton: {
    marginTop: 10,
    alignItems: 'center',
    padding: 10,
    width: 200,
    borderRadius: 20,
    fontWeight: 'bold',
    color: 'red',
    backgroundColor: '#E8F0FE',
  },
});

export default Login;
