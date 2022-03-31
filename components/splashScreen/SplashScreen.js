import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

function SplashScreen(props) {
  console.log(props);

  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('Login');
    }, 2000);
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Image source={require('../../assets/logo.png')} style={styles.image} />
        <Text style={styles.title}>BLOOD APP</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    color: 'red',
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 3,
    marginTop: 10,
  },
  image: {
    // borderRadius: 50,
    width: 90,
    height: 130,
  },
});

export default SplashScreen;
