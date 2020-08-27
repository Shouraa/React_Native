import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import FrontPage from "./src/pages/FrontPage";

const navigator = createStackNavigator(
  {
    Front: FrontPage,
  },
  {
    initialRouteName: "Front",
    defaultNavigationOptions: {
      title: "Movie Search",
    },
  }
);

export default createAppContainer(navigator);

// import { StatusBar } from "expo-status-bar";
// import React from "react";
// import { StyleSheet, Text, View } from "react-native";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Yeaaaaaaaaaaahddddsssssssssssssssssssssssssssssssssssssss!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
