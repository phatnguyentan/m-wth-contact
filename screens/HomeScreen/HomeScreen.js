import React from "react";
import { StatusBar } from "react-native";
import Expo from "expo";
import MainHeader from "./../../components/headers/v1/MainHeader";
import {
  Button,
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Title,
  Left,
  List,
  ListItem,
  Icon,
  Right
} from "native-base";

export default class HomeScreen extends React.Component {
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
    console.log(contacts.data);

    this.setState(previousState => {
      return { contacts: contacts.data };
    });
  }

  render() {
    return (
      <Container>
        <MainHeader navigation={this.props.navigation} />
        <Content padder>
          {/* <List>
            <ListItem avatar>
              <Left><Thumbnail source={{ uri: 'Image URL' }} /></Left>
              <Body>
                <Text>Kumar Pratik</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
          </List> */}
          <List
            avatar
            dataArray={this.state.contacts}
            contentContainerStyle={{ marginTop: 10 }}
            renderRow={data => {
              return (
                <ListItem
                  button
                  // onPress={() => this.props.navigation.navigate(data)}
                >
                  <Left>
                    <Icon type="FontAwesome" name="user-circle" />
                    <Text> {data.name}</Text>
                  </Left>
                  {/* <Body /> */}
                  <Body>
                    {data.phoneNumbers &&
                      data.phoneNumbers[0] && (
                        <Text note>{data.phoneNumbers[0].number}</Text>
                      )}
                    {/* <Text note>{data.phoneNumbers[0].number}</Text> */}
                  </Body>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}
