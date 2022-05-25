import { useState } from 'react';
import { StyleSheet, View, FlatList, Button, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false)

  function startAddGoalHandler(){
    setModalIsVisible(true)
  }

  function endAddGoalHandler(){
    setModalIsVisible(false)
  }

  function deleteGoalHandler(key){
    setCourseGoals(prevState => (
      prevState.filter(goal => goal.key !== key)
    ))
  }

  return (
    <>
      <StatusBar style='light'/>
      <View style={styles.appContainer}>
        <Button 
          title='Add New Goal' 
          color="#5E0ACC" 
          onPress={startAddGoalHandler}
        />
        <GoalInput 
          setter={setCourseGoals}
          visible={modalIsVisible}
          cancel={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          {courseGoals.length !== 0 && <Text style={styles.goalText}>Goals </Text>}
          <FlatList 
            data={courseGoals} 
            renderItem={itemData => (
              <GoalItem 
                id={itemData.item.key}
                text={itemData.item.text} 
                deleteItem={deleteGoalHandler}
              />
            )}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 6,
  },
  goalText: {
    fontSize: 40,
    color: '#FFF',
    borderRadius: 6,
    padding: 12,
  }
});
