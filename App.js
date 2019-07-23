import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import NewsListView from './src/NewsListView';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NewsListView/>
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
