import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


const CounterScreen = () => {
    //state === { counter: 0 }
    //action === {type: 'increase_counter' || 'decrease_counter', payload: 1 || -1}
    const reducer = (state, action) => {
        switch(action.type){
            case 'increase_counter':
                return {...state, counter: state.counter + 1}
            case 'decrease_counter':
                return {...state, counter: state.counter - 1}
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, {counter: 0});

    return(
        <View>
            <Button 
                title='Increase'
                onPress={() => {
                    //Don't do this!
                    //counter++;
                    dispatch({type: 'increase_counter'});
                }}
            />
            <Button 
                title='Decrease'
                onPress={() => {
                    //Don't do this!
                    //counter++;
                    dispatch({type: 'decrease_counter'});
                }}
            />
            <Text>
                Current Count: {state.counter}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({});

export default CounterScreen;