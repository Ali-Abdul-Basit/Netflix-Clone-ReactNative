import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Trending</Text>
      <ScrollView horizontal>
        {[1,2,3,4,5].map(num => (
          <Image
            key={num}
            source={{ uri: `https://picsum.photos/200/300?random=${num}` }}
            style={styles.poster}
          />
        ))}
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{flex:1,backgroundColor:'black',paddingTop:20},
  title:{color:'white',fontSize:22,fontWeight:'bold',paddingLeft:10,marginVertical:10},
  poster:{width:120,height:180,margin:5,borderRadius:6}
});
