import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

class NewsInputView extends React.Component {
    constructor(props) {
        super(props);
    } 

    render() {
        return (
            <View style={styles.container}>
                <TextInput placeholder="Add Any Items Here!" 
                style={styles.textInput} 
                onChangeText={this.props.changeText}
                ref={this.props.textInputRef}
                />
                <Button title="Add" color="#000000" style={styles.button} onPress={this.props.pressHandler}/>
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
        fontSize: 18,
    },
    button:{
        padding: '20%'
    }
});


export default NewsInputView;