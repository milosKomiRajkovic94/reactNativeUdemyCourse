import React, {useState, useEffect} from 'react';

import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';

import useResults from '../hooks/useResults';

import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        // price === '$' || '$$' || '$$$' 
        return results.filter(result => {
            return result.price === price;
        })
    }

    return(
        <View style={styles.backgroundStyle}>
            <SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchApi}/>
              {errorMessage ? <Text> {errorMessage} </Text> : null} 
            <Text>We have found {results.length} results</Text>
            <ResultsList results={filterResultsByPrice('$')} title="Cost effective" />
            <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier" />
            <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender" />
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