import {Image, StyleSheet, Text, View, ScrollView } from "react-native";

import meal from "../models/meal";
import {MEALS} from "../data/dummy-data";
import List from "../components/MealDetail/List";
import IconButton from '../components/IconButton';
import {useContext, useLayoutEffect} from "react";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import {FavoritesContext} from "../store/context/favorites-context";

function MealDetailScreen({ route, navigation }){
    const favoriteMealsCtx = useContext(FavoritesContext);
    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);

    function changeFavoriteStatusHandler(){
        if(mealIsFavorite){
            favoriteMealsCtx.removeFavorite(mealId);
        } else{
            favoriteMealsCtx.addFavorite(mealId);
        }
    }

   useLayoutEffect(() => {
       navigation.setOptions({
           headerRight: () => {
               return <IconButton icon={mealIsFavorite ? 'star' : 'star-outline'}
                                  color='white'
                                  onPress={changeFavoriteStatusHandler} />
           }
       });
   }, [navigation, changeFavoriteStatusHandler]);

    return(
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{uri: selectedMeal.imageUrl }} />
            <Text style={styles.title}>{selectedMeal.title}</Text>

            <MealDetails duration={selectedMeal.duration}
                         complexity={selectedMeal.complexity}
                         affordability={selectedMeal.affordability}
                         textStyle={styles.detailText}
            />

            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients}/>
                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps}/>
                </View>
            </View>
        </ScrollView>
    );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainer:{
      marginBottom: 32,
    },
    image:{
        width: "100%",
        height: 350,
    },
    title:{
        fontWeight: 'bold',
        fontSize: 25,
        margin: 8,
        textAlign: 'center',
        color: 'white',
    },
    detailText:{
        color: 'white',
    },
    listContainer:{
        width: '80%',
    },
    listOuterContainer:{
      alignItems: 'center',
    },
});
