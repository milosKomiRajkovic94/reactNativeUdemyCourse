import React from 'react';

import { View, StyleSheet } from 'react-native';

const Chapter7ExerciseComponents = () => {
    return(
        <View style={styles.viewStyle}>
            <View style={styles.viewOneStyle} />
            <View style={styles.viewTwoStyle} />
            <View style={styles.viewThreeStyle} />
        </View>
    )
};

const styles = StyleSheet.create({
    viewStyle: {
        flexDirection: 'row',
        height: 180
    },
    viewOneStyle: {
        backgroundColor: '#f5d3cd',
        flex: 2,
        width: 25,
        height: 90
    },
    viewTwoStyle: {
        backgroundColor: '#d8e4d6',
        flex: 2,
        width: 25,
        marginLeft: 15,
        marginRight: 15,
        paddingTop: 50,
        height: 90,
        alignSelf: 'flex-end'
    },
    viewThreeStyle: {
        backgroundColor: '#e0d8e8',
        flex: 2,
        width: 25,
        height: 90
    }
});

export default Chapter7ExerciseComponents;