import React from "react";
import { StyleSheet, Alert, Text } from "react-native";
import MainHeader from "./components/headers/v1/MainHeader";
import HomeScreen from "./screens/HomeScreen/index";
import { Container } from "native-base";
import Expo from "expo";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { contacts: [] };
  }
  async componentDidMount() {
    const time = Date.now();
    const permission = await Expo.Permissions.askAsync(
      Expo.Permissions.CONTACTS
    );
    if (permission.status !== "granted") {
      return;
    }

    const contacts = await Expo.Contacts.getContactsAsync({
      fields: [Expo.Contacts.PHONE_NUMBERS, Expo.Contacts.EMAILS],
      pageSize: 10000,
      pageOffset: 0
    });

    const elapsed = (Date.now() - time) / 1000;
    this.setState(previousState => {
      return { contacts: contacts.data };
    });
  }
  // http://docs.nativebase.io/docs/examples/navigation/StackNavigationExample.html
  render() {
    // return (
    //   <Container>
    //     <MainHeader />
    //     <Container>
    //       {this.state.contacts.map((x, i) => <Text>{x.name}</Text>)}
    //     </Container>
    //   </Container>
    // );
    return <HomeScreen />;
  }
}
