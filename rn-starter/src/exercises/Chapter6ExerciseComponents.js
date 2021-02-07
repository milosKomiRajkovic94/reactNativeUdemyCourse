import React, {useState} from 'react';

import { View, TextInput, StyleSheet, Text } from 'react-native';

const Chapter6ExerciseComponents = () => {
    const [name, setName] = useState(' ');

    return(
        <View>
            <Text>Enter your password: </Text>
            <TextInput 
                style={styles.input}
                autoCapitalize={'none'}
                autoCorrect={false}
                value={name}
                onChangeText={(newValue) => setName(newValue)}
            />
            {name.length < 5 ? 
                <Text>
                    Password must be longer than 5 charachters
                </Text>
                :
                <></>
            }
        </View>
    )
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default Chapter6ExerciseComponents;