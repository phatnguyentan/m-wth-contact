import React, { Component } from "react";
import HomeScreen from "./HomeScreen.js";
// import MainScreenNavigator from "../ChatScreen/index.js";
// import ProfileScreen from "../ProfileScreen/index.js";
// import SideBar from "../SideBar/SideBar";
import SideBar from "../../components/headers/v1/SideBar";
import { createDrawerNavigator } from "react-navigation";

// https://reactnavigation.org/docs/en/drawer-based-navigation.html
const HomeScreenRouter = createDrawerNavigator(
  {
    Home: { screen: HomeScreen }
    // Chat: { screen: MainScreenNavigator },
    // ProfileScreen: { screen: ProfileScreen }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;
