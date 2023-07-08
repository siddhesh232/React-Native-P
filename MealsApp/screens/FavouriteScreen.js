import { View, Text,StyleSheet } from "react-native";
import { useContext } from "react";

import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";
import { FavoritesContext } from "../store/context/favorites-context";

function FavouriteScreen(){
    const favoriteMealsCtx = useContext(FavoritesContext);
    const favoriteMeals = MEALS.filter(meal => favoriteMealsCtx.ids.includes(meal.id));
    return(
        <MealsList items={favoriteMeals} />
    );

    if (favoriteMeals.length === 0) {
        return(
            <View style={styles.rootContainer}>
            <Text style={styles.text}>
                You have no favorite meals yet.
            </Text>
        </View>
        );
    }
}

export default FavouriteScreen;

const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    }
});
