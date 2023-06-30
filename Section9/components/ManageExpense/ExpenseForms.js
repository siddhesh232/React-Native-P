import { View, Text, StyleSheet } from "react-native";
import Input from "./Input";
import {useState} from "react";
import Button from "../UI/Button";
import {getFormattedDate} from "../../util/date";
import {GlobalStyles} from "../../constants/styles";

function ExpenseForms({onCancel, onSubmit, submitButtonLabel, defaultValue}){
    const [inputs, setInputs] = useState({
        amount: {
            value: defaultValue ? defaultValue.amount.toString() : '',
            // isValid: defaultValue ? true : false,
            isValid: true,
        },
        date: {
            value: defaultValue ? getFormattedDate(defaultValue.date) : '',
            // isValid: defaultValue ? true : false,
            isValid: true,
        },
        description: {
            value: defaultValue ? defaultValue.description : '',
            // isValid: defaultValue ? true : false,
            isValid: true,
        },
    });
    function inputChangeHandler( inputIdentifier, enteredValue){
        setInputs((curInputs) => {
            return {
                ...curInputs,
                [inputIdentifier]: {value :enteredValue, isValid: true}
            };
        });
    }

    function submitHandler() {
        const expenseData = {
            amount: +inputs.amount.value,
            date: new Date(inputs.date.value),
            description: inputs.description.value,
        };

        const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
        const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
        const descriptionIsValid = expenseData.description.trim().length > 0;

        if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
            // Alert.alert('Invalid input', 'Please check your values');
            setInputs((curInputs) => {
                return {
                    amount: {value: curInputs.amount.value, isValid: amountIsValid},
                    date: {value: curInputs.date.value, isValid: dateIsValid},
                    description: {
                        value: curInputs.description.value,
                        isValid: descriptionIsValid}
            };
            });
            return;
    }
        onSubmit(expenseData);
    }

    const formIsValid = !inputs.amount.isValid ||    //helper constant
        !inputs.date.isValid ||
        !inputs.description.isValid;

    return (
        <View style={styles.form}>
            <Text style={styles.title}>Your Expense</Text>
            <View style={styles.inputsRow}>
            <Input label="Amount"
                   style={styles.rowInput}
                   invalid={!inputs.amount.isValid}
                   textInputConfig={{
                        keyboardType: 'decimal-pad',
                        onChangeText: inputChangeHandler.bind(this, 'amount' ),
                        value: inputs.amount.value,
            }}
            />
            <Input label="Date"
                   style={styles.rowInput}
                   invalid={!inputs.date.isValid}
                   textInputConfig={{
                placeholder: 'YYYY-MM-DD',
                maxLength: 10,
                onChangeText: inputChangeHandler.bind(this, 'date'),
                       value: inputs.date.value,
            }}/>
            </View>
            <Input label="Description"
                   invalid={!inputs.description.isValid}
                   textInputConfig={{
                multiline: true,
                // autoCorrect: false,    // default is true
                autoCapitalize: 'sentences',
                onChangeText: inputChangeHandler.bind(this, 'description'),
                value: inputs.description.value,
            }}/>
            {formIsValid && (<Text style={styles.errorText}>Invalid Input Values - Please check your data!</Text>) }
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
    errorText:{
        textAlign: 'center',
        color: GlobalStyles.colors.error500,
        margin: 8,
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
