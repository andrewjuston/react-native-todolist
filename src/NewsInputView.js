import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

class NewsInputView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
        }
    } 

    render() {
        return (
            <View style={styles.container}>
                <TextInput placeholder="Add Any News Here!" style={styles.textInput} onChangeText={(text) => this.setState({content: text})}/>
                <Button title="Add" color="#000000" style={styles.button} onPress={() => alert()}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        padding: 2,
        margin: 5,
        width: '100%'
    },
    textInput:{
        marginTop: 2,
        marginLeft: 2,
        marginRight: 30,
        padding: 10,
        width: '70%',
        borderBottomColor: '#000000',
        borderBottomWidth: 2,
    },
    button:{
        padding: '20%'
    }
});


export default NewsInputView;