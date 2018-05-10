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
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#fff"
  },
  logo: {
    height: 40
  }
});
