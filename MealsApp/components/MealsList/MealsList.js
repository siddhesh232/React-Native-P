import {FlatList, StyleSheet, View} from "react-native";
import MealItem from "./MealItem";


function MealsList({items}){
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
            <FlatList data={items}
                      renderItem={renderMealItem}
                      keyExtractor={(item) => item.id} />
        </View>
    );
}

export default MealsList;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 16,
    }
});
