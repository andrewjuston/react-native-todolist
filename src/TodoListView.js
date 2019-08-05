import React, {Component} from 'react';
import { View, Text, FlatList, StyleSheet, Alert } from 'react-native';
import TodoInputView from './TodoInputView';
import TodoItemView from './TodoItemView';
import TodoEmptyView from './TodoEmptyView';

class TodoListView extends Component {
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
        const {items} = this.state;
        return (
            <View>
                <Text style={styles.title}>To-Do List</Text>
                <TodoInputView 
                pressHandler={this.onItemAdd} 
                changeText={this.textChangeHandler}
                textInputRef={this.inputRef}
                />
                { (items.length === 0) ? 
                    <TodoEmptyView/> :
                    <FlatList 
                        data={items}
                        renderItem={
                            ({item, index}) => 
                            <TodoItemView 
                            contentText={item} 
                            onDeleteItem = {() => {
                                Alert.alert(
                                    'Delete',
                                    'Delete this item?',
                                    [
                                        {text: 'Cancel', onPress: () => console.log('cancel pressed')},
                                        {text: 'Delete', onPress: () => {
                                            let newArray = [...items];
                                            newArray.splice(index, 1);
                                            this.setState({items:newArray});
                                        }}
                                    ]
                                )  
                                }
                            }
                            />
                        }
                    />
                }
                
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

export default TodoListView;