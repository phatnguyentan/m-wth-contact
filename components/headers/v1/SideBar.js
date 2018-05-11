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
  List,
  ListItem,
  Content,
  Title
} from "native-base";

export default class SideBar extends React.Component {
  routes = [
    { name: "All Contacts" },
    { name: "Favourite" },
    { name: "Social" }
  ];

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <Image
            source={require("./../../../assets/logo-contact.png")}
            style={styles.logo}
          />

          <List
            dataArray={this.routes}
            contentContainerStyle={{ marginTop: 20 }}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data)}
                >
                  <Text>{data.name}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
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
