import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function GoalItem({id, text, deleteItem}) {
  return (
    <View style={styles.goalItem}>
      <Pressable 
        android_ripple={{color: '#210644'}} 
        onPress={deleteItem.bind(this, id)}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5E0ACC',
  },
  goalText: {
    padding: 8,
    color: 'white',
  }
});