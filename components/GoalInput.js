import { View, TextInput, Button, StyleSheet, Modal, Image } from 'react-native'
import { useState } from 'react';
import uuid from 'react-native-uuid'

export default function GoalInput({setter, visible, cancel}) {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  
  function goalInputHandler(enteredText){
    setEnteredGoalText(enteredText)
  }

  function addGoalHandler(){
    setter((currentCourseGoals) => [
      ...currentCourseGoals, 
      {text: enteredGoalText, key: uuid.v4()}
    ])
    setEnteredGoalText('')
    cancel(false)
  }

  return (
    <Modal visible={visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image 
          source={require('../assets/images/goal.png')}
          style={styles.image}
        />
        <TextInput 
          style={styles.textInput}
          placeholder='Your course goal'
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button 
              title='Add a goal'
              onPress={addGoalHandler}
              color='#B180F0'
            />
          </View>
          <View style={styles.button}>
            <Button 
              title='Cancel'
              onPress={cancel}
              color='#F31282'
            />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b'
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    width: '90%',
    padding: 12,
    height: 50,
    
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: 160,
    marginHorizontal: 8,
  }
});
