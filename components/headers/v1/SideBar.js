import React from "react";
import { StyleSheet, Text, Image } from "react-native";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Content,
  Title
} from "native-base";

export default class SideBar extends React.Component {
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <Image
            source={require("./../../../assets/logo-contact.png")}
            style={styles.logo}
          />
          <Text>Item</Text>
          <Text>Item</Text>
          <Text>Item</Text>
          <Text>Item</Text>
        </Content>
      </Container>
      // <Container>
      //   <Content>
      //     <Image
      //       source={{
      //         uri:
      //           "https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/assets/drawer-cover.png"
      //       }}
      //       style={{
      //         height: 120,
      //         width: "100%",
      //         alignSelf: "stretch",
      //         position: "absolute"
      //       }}
      //     />
      //     <Image
      //       square
      //       style={{
      //         height: 80,
      //         width: 70,
      //         position: "absolute",
      //         alignSelf: "center",
      //         top: 20
      //       }}
      //       source={{
      //         uri:
      //           "https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/assets/logo.png"
      //       }}
      //     />
      //   </Content>
      // </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
    // backgroundColor: "#fff"
  },
  logo: {
    width: "100%",
    height: 30
    // alignSelf: "stretch",
    // position: "absolute"
  }
});
