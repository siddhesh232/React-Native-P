/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';    //expo package for linear gradient
// import { useFonts } from 'expo-font';
// import AppLoading from 'expo-app-loading';
// import * as SplashScreen from 'expo-splash-screen';
// import { useCallback } from 'react';
import LinearGradient from 'react-native-linear-gradient';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import Colors from './constants/colours';

// SplashScreen.preventAutoHideAsync();

export default function App() {
  const [userNumber, setUserNumber] = useState(0);
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  // const [fontsLoaded] = useFonts({
  //   'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
  //   'open-sans-bold' : require('./assets/fonts/OpenSans-Bold.ttf'),
  // });

  // const onFontsLoaded = useCallback(async () => {
  //   if (!fontsLoaded) await SplashScreen.hideAsync();
  // }, [fontsLoaded]);
 
  // if (fontsLoaded) {
  //   return null;
  // }

  
  // if (!fontsLoaded) {
  //   return (
  //   <AppLoading />);
  // }
  
  function pickedNumberHandler(pickedNumber: number){
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler(numberOfRounds: number){
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }

  function startNewGameHandler(){
    setUserNumber(0);
    setGuessRounds(0);
  }

let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>;

if(userNumber){
  screen = <GameScreen userNumber={userNumber} 
                       onGameOver={gameOverHandler}/>;
}

if(gameIsOver && userNumber){
  screen =  < GameOverScreen 
  userNumber={userNumber} 
  roundsNumber={guessRounds} 
  onStartNewGame={startNewGameHandler} /> 
}

  return (
    <LinearGradient colors={[Colors.primay700, Colors.accent500]} style={styles.rootScreen}>
      <ImageBackground source={require('./assets/images/background.png')} 
                       resizeMode='cover'
                       style={styles.rootScreen}
                       imageStyle={styles.backgroundImage}>
        <SafeAreaView style={styles.rootScreen}>               
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}


const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});