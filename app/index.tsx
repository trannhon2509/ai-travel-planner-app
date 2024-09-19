import { Text, View } from "react-native";
import Login from '../components/Login'
import { Redirect } from "expo-router";
import firebase from '../firebaseConfig';

export default function Index() {
  return (
    <View>
      <Login />
    </View>
  );
}
