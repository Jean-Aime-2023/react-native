import { Text,View,StyleSheet } from "react-native";

export default function App(){
  return(
    <View style={styles.container}>
      <View style={[styles.box,styles.lightblueBg]}><Text>Light blue box</Text></View>
      <View style={[styles.box,styles.lightgreenBg]}><Text>Light green box</Text></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{flex:1,backgroundColor:"plum",padding:60},
  box:{
    width:100,
    height:100,
    padding:10,
  },
  lightblueBg:{
    backgroundColor:"lightblue",
  },
  lightgreenBg:{
    backgroundColor:"lightgreen",
  }
})