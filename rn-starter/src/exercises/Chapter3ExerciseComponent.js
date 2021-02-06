/* 
    Exercise from chapter 3

- Make the FlatList scroll vertically again.

- Add a new 'age' property to each of our 'friend' objects.

- Print out that age for each element produced by the FlatList.

*/

import React from 'react';

import { View, Text, StyleSheet, FlatList } from 'react-native';

const Chapter3ExerciseComponent = () => {
    const friends = [
        { name: 'Friend 1', age: 20},
        { name: 'Friend 2', age: 45},
        { name: 'Friend 3', age: 32},
        { name: 'Friend 4', age: 27},
        { name: 'Friend 5', age: 53},
        { name: 'Friend 7', age: 30},
    ];

    return(
        <FlatList
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(friend) => friend.name} 
            data={friends}
            renderItem={({item}) => {
                // element === { item: {name: 'Friend #1'}, index: 0}
                return <Text style={styles.textStyle}> {item.name} - Age {item.age}  </Text>
            }}
        />
    )
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 0,
        borderColor: '#111',
        borderWidth: 1,
        padding: 25
    }
});

export default Chapter3ExerciseComponent;