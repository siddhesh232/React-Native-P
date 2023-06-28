import { View, Text, Pressable, Image, StyleSheet, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "./MealDetails";

function MealItem({ id, title, imageUrl, duration, complexity, affordability }){

    const navigation = useNavigation();

    function selectMealHandler(){
        navigation.navigate('MealDetail', {
            mealId: id,
        });
    };

    return(
        <View style={styles.mealItem}>
            <Pressable android_ripple={{color: '#ccc'}}
                       style={({ pressed }) =>
                           pressed ? styles.buttonPressed : null}
                       onPress={selectMealHandler}
            >
                <View style={styles.innerContainer}>
                <View>
                    <Image source={{uri: imageUrl}} style={styles.image}/>
                    <Text style={styles.title}>{title}</Text>
                </View>
                    <MealDetails duration={duration}
                                 affordability={affordability}
                                 complexity={complexity}
                    />
                </View>
            </Pressable>
        </View>
    );
};

export default MealItem;

const styles = StyleSheet.create({
    mealItem:{
        margin: 16,
        borderRadius: 16,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: 'white',
        elevation: 4,
        shadowRadius: 8,
        shadowColor: 'black',
        shadowOpacity: 0.35,
        shadowOffset: {width: 0, height: 2},
    },
    innerContainer:{
        overflow: 'hidden',
        borderRadius: 8,
    },
    image:{
      width: "100%",
      height: 200,
    },

    title:{
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        margin: 8,
    },
    buttonPressed:{
      opacity: 0.5,
    },
});
