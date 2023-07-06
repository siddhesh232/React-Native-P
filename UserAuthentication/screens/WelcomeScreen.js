import { StyleSheet, Text, View } from 'react-native';
import axios from "axios";
import {useEffect, useState} from "react";

function WelcomeScreen() {
  const [fetchedMessage, setFetchedMessage] = useState(" ");

  useEffect(() => {
    axios.get(
        'https://rncourse-db-default-rtdb.firebaseio.com/message.json');
    },[]);

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text></Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
