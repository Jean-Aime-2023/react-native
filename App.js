import { View, Text, Image, ImageBackground,ScrollView } from "react-native";
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <ScrollView>
      <Image source={logoImg} style={{ width: 300, height: 300 }} />
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        maximus, sapien a faucibus convallis, velit magna sagittis metus, et
        varius lectus arcu id nunc. Proin nec mi eu sem sollicitudin venenatis
        ac in sapien. In a erat mauris. Quisque non tempor turpis. Phasellus at
        malesuada est. Nulla facilisi. In in velit eget dolor blandit
        consectetur ut egestas arcu. Praesent ipsum diam, posuere ut dolor sed,
        vestibulum rhoncus arcu. Praesent efficitur, dui id varius ornare, mi mi
        luctus ante, sit amet finibus diam urna a tortor. Suspendisse et purus
        et erat auctor porttitor at a libero. Nulla mi quam, luctus varius
        fringilla semper, lacinia vulputate turpis. Curabitur placerat sem
        nulla, id consectetur metus finibus sed. In dignissim risus dictum elit
        sagittis, et vehicula odio gravida. Cras semper dictum pretium. Cras
        felis sem, accumsan eget porta efficitur, posuere at sem. Donec
        malesuada dapibus nibh, fringilla malesuada mi scelerisque sed. Cras
        lobortis id elit sed tempus. Pellentesque convallis rutrum augue sit
        amet accumsan. Donec luctus ut augue sed interdum. Orci varius natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        Phasellus vel sollicitudin odio, vitae aliquam nisi. Quisque tincidunt
        luctus dapibus.
      </Text>
      <Image source={logoImg} style={{ width: 300, height: 300 }} />

      </ScrollView>
    </View>
  );
}
