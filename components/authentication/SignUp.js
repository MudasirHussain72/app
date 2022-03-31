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

function SignUp({navigation}) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState(null);
  // const signUp = () => console.log('signUp button clicked');

  const handleSignUp = () =>
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate('Login');
        Alert.alert('User account has been created');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!');
        }

        console.error(error);
      });

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.title}>SIGN UP</Text>
        <TextInput
          style={styles.input}
          onChangeText={setName}
          value={name}
          placeholder="Enter Your Name"
        />
        <TextInput
          style={styles.input1}
          onChangeText={setEmail}
          value={email}
          placeholder="Enter Your Email"
        />
        <TextInput
          style={styles.input2}
          onChangeText={setPassword}
          value={password}
          placeholder="Enter Your Password"
        />
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text>CREATE ACCOUNT</Text>
        </TouchableOpacity>
        <Text style={styles.signupText}>Already have an account?</Text>
        <TouchableOpacity
          style={styles.signupButton}
          onPress={() => navigation.navigate('Login')}>
          <Text>LOGIN</Text>
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
  input: {
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
    // marginTop: 100,
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
    width: 150,
    borderRadius: 20,
    fontWeight: 'bold',
    color: 'red',
    backgroundColor: '#E8F0FE',
  },
  signupText: {
    marginTop: 50,
    color: 'black',
  },
  signupButton: {
    marginTop: 10,
    alignItems: 'center',
    padding: 10,
    width: 80,
    borderRadius: 20,
    fontWeight: 'bold',
    color: 'red',
    backgroundColor: '#E8F0FE',
  },
});

export default SignUp;
