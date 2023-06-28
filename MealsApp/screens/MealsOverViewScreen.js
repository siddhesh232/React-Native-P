import { View, FlatList, StyleSheet } from "react-native";
import {useLayoutEffect} from "react";
// import { useRoute } from "@react-navigation/native";

import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealItem from "../components/MealItem";


function MealsOverViewScreen({ route, navigation }){
    // alternative to route props: use useRoute hook
    // const route = useRoute();
    // route.params
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

     useLayoutEffect(() => {
         const  categoryTitle = CATEGORIES.find(
             (category) => category.id === catId
         ).title;
         navigation.setOptions({
             title: categoryTitle,
         });
     }, [catId, navigation]);


    function renderMealItem(itemData){
        const item = itemData.item;   // helper const, instead of writing itemData.item we will write item
        const mealItemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration,
        }
        return(
           // <MealItem title={itemData.item.title} imageUrl={itemData.item.imageUrl}/>
        <MealItem {...mealItemProps} />
        );
    }


    return(
        <View style={styles.container}>
            <FlatList data={displayedMeals}
                      renderItem={renderMealItem}
                      keyExtractor={(item) => item.id} />
        </View>
    );
};

export default MealsOverViewScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
    padding: 16,
    }
});
