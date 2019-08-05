import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

const TodoItemView = (props) => {
    
    return (
     <View style={styles.container}>
         <Image source={require('../assets/logo_babastudio.png')} style={styles.image}/>
         <Text style={styles.text}>{props.contentText}</Text>
         <Button 
         title={'Delete'} 
         color={'#ff0000'} 
         onPress = {props.onDeleteItem}
         style={styles.button}
         />
     </View>   
    );
}

const styles = StyleSheet.create({
    container:{
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 7,
        padding: 8,
        borderColor: '#D3D3D3',
        borderWidth: 1.5,
        borderRadius: 15,
        backgroundColor: '#DCDCDC',
        alignContent: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    text:{
        fontSize: 18,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image:{
        width: 100,
        height: 50,
        resizeMode:'stretch'
    },
    button: {
        marginRight: 15,
        borderRadius: 30
    }
});

export default TodoItemView;