import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import NewsInputView from './NewsInputView';
import NewsItemView from './NewsItemView';

class NewsListView extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            items:[]
        }
    }

    onItemAdd(){
        
    }

    render() {
        return (
            <View>
                <Text style={styles.title}>News List</Text>
                <NewsInputView buttonPress = {this.onItemAdd}/>
                <FlatList renderItem={NewsItemView}/>
            </View>        
        );
    }
}

const styles = StyleSheet.create({
    title: {
    marginTop: 20,
    marginLeft: 5,
    marginRight: 5,
    fontSize: 30,
      padding: 5,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default NewsListView;