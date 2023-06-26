import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";

import PrimaryButton from "../components/ui/PrimaryButtons";
import Colors from "../constants/colours";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function StartGameScreen({onPickNumber}){
    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText){
        setEnteredNumber(enteredText);
    }

    function resetInputHandler(){
        setEnteredNumber('');
    }

    function confirmInputHandler(){
        const chosenNumber = parseInt(enteredNumber);

        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
            Alert.alert('Invalid Number!',
                        'Number has to be a number between 1 and 99',
                        [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}]);
            //show alert...
            return ;
        }

    onPickNumber(chosenNumber);
    }

    return (
        <View style={styles.rootContainer}>
            <Title>Guess My Number</Title>
        <Card>
            <InstructionText>Enter a Number</InstructionText>
            <TextInput style={styles.numberInput}
                       maxLength={2}
                       keyboardType="number-pad"
                       // below property are exist to set autoCapitalize or autoCorrect off, here they have no really needed here
                       autoCapitalize="none"
                       autoCorrect={false}
                       onChangeText={numberInputHandler}
                       value={enteredNumber} />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
            </View>
        </Card>
        </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
   numberInput:{
    height: 50,
    width: 70,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color : Colors.accent500,
    marginVertical: 9,
    fontWeight: 'bold',
    textAlign: 'center',
   },

   buttonsContainer: {
    flexDirection: 'row',
   },

   buttonContainer: {
    flex: 1,
   },

   rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
   },
});
