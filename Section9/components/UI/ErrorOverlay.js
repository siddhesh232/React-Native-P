import { View, Text, StyleSheet } from "react-native";
import {GlobalStyles} from "../../constants/styles";

function ErrorOverlay({message}){
    return(
        <View style={styles.container}>
            <Text style={[styles.text, styles.title]}>
                An error occured!
            </Text>
            <Text style={styles.text}>{message}</Text>
        </View>
    );
}

export default ErrorOverlay;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 24,
        alignItems: "center",
        backgroundColor: GlobalStyles.colors.primary700,
    },
    text:{
        color: 'white',
        textAlign: 'center',
        marginBottom: 8,
    },
    title:{
        fontSize: 24,
    },
});
