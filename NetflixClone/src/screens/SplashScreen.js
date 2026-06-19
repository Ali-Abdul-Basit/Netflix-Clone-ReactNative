import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => navigation.replace('Login'), 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>NETFLIX</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'black'},
  logo:{color:'red',fontSize:48,fontWeight:'bold'}
});
