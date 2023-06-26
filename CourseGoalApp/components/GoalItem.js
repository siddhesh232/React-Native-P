import { StyleSheet, View, Text, Pressable, Modal, Button } from "react-native";
import { useState } from "react";
import GoalInput from "./GoalInput";

function GoalItem(props) {
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [courseGoals, setCourseGoals] = useState([]);

    function startAddGoHandler(){
        setModalIsVisible(true);
      };
      
      function endAddGoalHandler(){
        setModalIsVisible(false);
      };
    
      function addGoalHandler(enteredGoalText) {
        setCourseGoals(currentCourseGoals =>
          [...currentCourseGoals, 
            { text: enteredGoalText, id: Math.random().toString()},
          ]);
          endAddGoalHandler();
      };


    return (
        
            <View style={styles.goalItem}>
      
              <GoalInput visible={modalIsVisible} 
                         onAddGoal={addGoalHandler}
                         onCancel={endAddGoalHandler}
              />
                <Pressable android_ripple={{color: '#dddddd'}} 
                    onPress={props.onDeleteItem.bind(this, props.id)}
                    style={({pressed}) => pressed && styles.pressedItem} >
                    <Text style={styles.goalText}>{props.text}</Text>
                </Pressable>
            </View>
        
    );
};

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
      },

      pressedItem:{
        opacity: 0.5,
      },

      goalText: {
        color: 'white',
        padding: 8,
      },
});