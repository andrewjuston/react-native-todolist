import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const NewsItemView = (props) => {
    
    return (
     <View style={styles.container}>
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
        backgroundColor: '#DCDCDC'
    },
    text:{
        fontSize: 20,
    },
    button: {
        marginRight: 15,
        borderRadius: 30
    }
});

export default NewsItemView;