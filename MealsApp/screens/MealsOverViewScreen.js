import { View, FlatList } from "react-native";
import {useLayoutEffect} from "react";
// import { useRoute } from "@react-navigation/native";

import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealsList from "../components/MealsList/MealsList";
// import MealItem from "../components/MealsList/MealItem";


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

        return <MealsList items={displayedMeals}/>

}

export default MealsOverViewScreen;


