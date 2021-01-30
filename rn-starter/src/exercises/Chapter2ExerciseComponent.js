import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

const Chapter2ExerciseComponent = () => {
    const myName = 'Miloš Rajković'

    return(
        <View>
            <Text style={styles.textStyle1} >
                Getting started with react native!
            </Text>
            <Text style={styles.textStyle2}>
                My name is {myName}.
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle1: {
        fontSize: 45
    },
    textStyle2: {
        fontSize: 20 
    }
})

export default Chapter2ExerciseComponent;