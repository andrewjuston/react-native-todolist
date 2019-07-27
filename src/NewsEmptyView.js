import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NewsEmptyView = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Nothing to show here</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignContent: 'center',
        padding: 30
    },
    text:{
        fontSize: 25,
        color: 'grey'
    }
});


export default NewsEmptyView;