import { View, Text, Pressable, StyleSheet } from 'react-native';
import Colors from '../../constants/colours';

function PrimaryButton({children, onPress}){

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable style={({pressed}) => pressed 
                        ? [styles.buttonInnerContainer, styles.pressed] 
                        : styles.buttonInnerContainer}
                        onPress={onPress} 
                       android_ripple={{color: Colors.primay600}}
                       >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    margin: 4,
    overflow: 'hidden',
  },

  buttonInnerContainer:{
    backgroundColor: Colors.primay500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 24,
    elevation: 2,
    margin: 5,
  },

  buttonText:{
    color: 'white',
    textAlign: 'center',
  },

  pressed: {   //This is for giving ripple effect to iOS 
    opacity: 0.75,
  },

});
