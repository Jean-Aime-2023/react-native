import { Text,View,StyleSheet } from "react-native";

export default function App(){
  return(
    <View style={styles.container}>
      <View style={[styles.box,styles.lightblueBg,styles.boxShadow]}><Text>Light blue box</Text></View>
      <View style={[styles.box,styles.lightgreenBg,styles.boxShadow,styles.androidShadow]}><Text>Light green box</Text></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{flex:1,backgroundColor:"plum",padding:60},
  box:{
    width:100,
    height:100,
    padding:10,
    marginVertical:10,
  },
  lightblueBg:{
    backgroundColor:"lightblue",
  },
  lightgreenBg:{
    backgroundColor:"lightgreen",
  },
  boxShadow:{
    shadowColor:"#333333",
    shadowOffset:{
      width:6,
      height:6,
    },
    shadowOpacity:0.6,
    shadowRadius:4,
  },
  androidShadow:{
    elevation:30,
  }
})