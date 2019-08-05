import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import TodoListView from './src/TodoListView';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TodoListView/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    flex: 1,
    backgroundColor: '#fff',
  },
});
