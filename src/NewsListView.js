import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import NewsInputView from './NewsInputView';
import NewsItemView from './NewsItemView';

class NewsListView extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            content:'',
            items:[]
        }
    }

    textChangeHandler = (text) => {
        this.setState({content: text});
    }

    onItemAdd = () => {
        if(this.state.content.trim() !== ''){
            let joined = this.state.items.concat(this.state.content);
            this.setState({items:joined, content:''});
            this.textInput.clear();
        }
    }

    inputRef = input => {
        this.textInput = input;
    }

    render() {
        return (
            <View>
                <Text style={styles.title}>To-Do List</Text>
                <NewsInputView 
                pressHandler={this.onItemAdd} 
                changeText={this.textChangeHandler}
                textInputRef={this.inputRef}
                />
                <FlatList 
                    data={this.state.items}
                    renderItem={
                        ({item, index}) => 
                        <NewsItemView 
                        contentText={item} 
                        onDeleteItem = {() => {  
                            let newArray = [...this.state.items];
                            newArray.splice(index, 1);
                            this.setState({items:newArray});
                        }}
                        />
                    }
                />
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