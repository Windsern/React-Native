import React from 'react';
import {
    View,
    StatusBar,
    ImageBackground
} from 'react-native';
import {BuildListScreen} from "./screens/BuildListScreen";
import {Build} from "./components/BuildCard";
import BuildScreen from "./screens/BuildScreen";
import {Navigation} from "./screens/Navigation";

export default function App() {

  return (
          <Navigation/>

  );
}