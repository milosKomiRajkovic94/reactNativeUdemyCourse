import React, {useState} from 'react';

import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';

import yelp from '../api/yelp';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);

    return(
        <View style={styles.backgroundStyle}>
            <SearchBar term={term} onTermChange={(newTerm) => setTerm(newTerm)} onTermSubmit={() => console.log("Submitted")}/>
            <Text> Search screen </Text>
            <Text>We have found {results.length} results</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#fff',
        height: '100%'
    }
});
export default SearchScreen;