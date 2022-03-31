// import auth from '@react-native-firebase/auth';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useRoute} from '@react-navigation/native';
// import auth from '../authentication/Login';
function Home({route}) {
  // const {email, password} = route.params;
  return (
    <View style={styles.container}>
      {/* <Text>email : {route.params.email}</Text>
      <Text>Password : {route.params.password}</Text> */}

      <View style={styles.textview}>
        <Text style={styles.text}>
          BLOOD DONATION REFERS TO A PRACTICE WHERE PEOPLE DONATE THEIR BLOOD TO
          PEOPLE SO IT HELPS THEM WITH THEIR HEALTH PROBLEMS
        </Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log('clicked')}>
          <Text>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'pink',
  },
  textview: {
    borderColor: 'black',
    // letterSpacing: ,
    marginTop: 10,
  },
  text: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    color: 'black',
    fontWeight: 'bold',
    // fontWeight: 'italic',
    fontSize: 15,
    height: 100,
    width: 300,
    backgroundColor: 'white',
  },
});

export default Home;
