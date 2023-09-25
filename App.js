import { View, Button, Image, Text, Pressable } from "react-native";
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Button
        title="Press"
        onPress={() => console.log("Button pressed")}
        color="midnightblue"
      />
      <Pressable onPress={()=>console.log("Image pressed")}>
        <Image source={logoImg} style={{ width: 300, height: 300 }} />
      </Pressable>
      <Pressable onPress={()=>console.log("Text pressed")}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          purus dui, elementum vel nisl a, interdum sagittis dolor. Quisque
          convallis scelerisque lorem, non egestas quam iaculis id. Curabitur
          sagittis sem nec nisi mollis pulvinar. Aliquam facilisis ultrices nibh
          in commodo. Curabitur volutpat diam a blandit blandit. Vestibulum nec
          velit non magna sodales maximus et in ante. Aliquam interdum ut nulla
          ac imperdiet. Etiam semper metus ac ex luctus ullamcorper.
          Pellentesque felis purus, finibus vel risus vel, vestibulum varius
          arcu. Nulla aliquet maximus augue nec scelerisque. Nam arcu eros,
          blandit ut urna a, elementum ultricies metus. Phasellus quis tempus
          diam, quis laoreet lorem. Sed non sapien nibh. Sed a sem et nisl
          eleifend convallis nec a quam. Ut ac leo nulla. Suspendisse interdum
          molestie dapibus. Sed ut dictum elit. Nam eget nulla fermentum, mattis
          ex ut, congue metus. Nunc ut lorem mauris. Vestibulum at tincidunt
          velit, quis ultricies nunc. Morbi ac enim mauris. Proin vehicula eros
          nec turpis sollicitudin ultricies. Nulla euismod nisi et eros
          convallis iaculis. Phasellus ac consectetur ligula, non sagittis odio.
        </Text>
      </Pressable>
    </View>
  );
}
