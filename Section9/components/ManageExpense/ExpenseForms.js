import { View, Text, StyleSheet, Alert } from "react-native";
import Input from "./Input";
import {useState} from "react";
import Button from "../UI/Button";
import {getFormattedDate} from "../../util/date";

function ExpenseForms({onCancel, onSubmit, submitButtonLabel, defaultValue}){
    const [inputs, setInputs] = useState({
        amount: {
            value: defaultValue ? defaultValue.amount.toString() : '',
            // isValid: defaultValue ? true : false,
            isValid: !!defaultValue,
        },
        date: {
            value: defaultValue ? getFormattedDate(defaultValue.date) : '',
            // isValid: defaultValue ? true : false,
            isValid: !!defaultValue,
        },
        description: {
            value: defaultValue ? defaultValue.description : '',
            // isValid: defaultValue ? true : false,
            isValid: !!defaultValue,
        },
    });
    function inputChangeHandler( inputIdentifier, enteredValue){
        setInputs((curInputs) => {
            return {
                ...curInputs,
                [inputIdentifier]: enteredValue
            };
        });
    }

    function submitHandler() {
        const expenseData = {
            amount: +inputs.amount,
            date: new Date(inputs.date),
            description: inputs.description,
        };

        const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
        const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
        const descriptionIsValid = expenseData.description.trim().length > 0;

        if (!amountIsValid || !dateIsValid || !descriptionIsValid){
            Alert.alert('Invalid input', 'Please check your values');
            return  ;
        }

        onSubmit(expenseData);
    }

    return (
        <View style={styles.form}>
            <Text style={styles.title}>Your Expense</Text>
            <View style={styles.inputsRow}>
            <Input label="Amount"
                   style={styles.rowInput}
                   textInputConfig={{
                        keyboardType: 'decimal-pad',
                        onChangeText: inputChangeHandler.bind(this, 'amount' ),
                        value: inputs.amount,
            }}
            />
            <Input label="Date"
                   style={styles.rowInput}
                   textInputConfig={{
                placeholder: 'YYYY-MM-DD',
                maxLength: 10,
                onChangeText: inputChangeHandler.bind(this, 'date'),
                       value: inputs.date,
            }}/>
            </View>
            <Input label="Description" textInputConfig={{
                multiline: true,
                // autoCorrect: false,    // default is true
                autoCapitalize: 'sentences',
                onChangeText: inputChangeHandler.bind(this, 'description'),
                value: inputs.description,
            }}/>
            <View style={styles.buttons}>
                <Button style={styles.button} mode="flat" onPress={onCancel}>
                    Cancel
                </Button>
                <Button style={styles.button} onPress={submitHandler}>
                    {submitButtonLabel}
                </Button>
            </View>
        </View>
    );
}

export default ExpenseForms;

const styles = StyleSheet.create({
    form:{
        marginTop: 40,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginVertical: 24,
        textAlign: 'center',
    },
    inputsRow:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    rowInput:{
        flex: 1,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8,
    },
});
