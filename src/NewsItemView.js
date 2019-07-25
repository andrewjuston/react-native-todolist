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
        borderColor: '#000000',
        borderWidth: 1.5,
        borderRadius: 15,
    },
    text:{
        fontSize: 20,
    },
    button: {
        marginRight: 15
        
    }
});

export default NewsItemView;