import { View, StyleSheet} from 'react-native';
import Colors from '../../constants/colours';


function Card ({children}){
 return <View style={styles.card}>{children}</View>
}

export default Card;

const styles = StyleSheet.create({
    card:{
        padding: 16,
        marginTop: 36,
        marginHorizontal: 24,
        borderRadius: 8,
        backgroundColor: Colors.primay800,
        elevation: 3,    // android property only for giving shadow
        // shadow property is udes to give shadow in iOS device
        shadowColor: 'black',   
        shadowOffset: {width: 0, height: 2} ,
        shadowRadius: 6,
        shadowOpacity: 0.25,
        justifyContent: 'center',
        alignItems: 'center',
       },
})