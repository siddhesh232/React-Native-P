import { StyleSheet, Image, View, Text } from 'react-native';
import Title from '../components/ui/Title';
import Colors from '../constants/colours';
import PrimaryButton from '../components/ui/PrimaryButtons';

function GameOverScreen({roundsNumber, userNumber, onStartNewGame}){
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/images/success.png')} 
               style={styles.image} />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed 
        <Text style={styles.highLight}> {roundsNumber} </Text> 
        rounds to guess the number 
        <Text style={styles.highLight}> {userNumber} </Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primay800,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
  },
  highLight: {
    fontFamily: 'open-sans-bold',
    color: Colors.primay500,
    // fontSize: 24,   Text inside text is affected by the parent styling
    // but text inside view is not inheritate property from view
  }
});