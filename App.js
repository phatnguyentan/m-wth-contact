import React from "react";
import { StyleSheet, Alert } from "react-native";
import MainHeader from "./components/headers/v1/MainHeader";
import { Container } from "native-base";
import Expo from "expo";

export default class App extends React.Component {
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
    Alert.alert(
      "Contacts Read",
      `Read ${contacts.data.length} contacts in ${elapsed} seconds`
    );
  }

  render() {
    return (
      <Container>
        <MainHeader />
      </Container>
    );
  }
}
