import React, {useState, useEffect} from 'react';

import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';

import useResults from '../hooks/useResults';

import ResultsList from "../components/ResultsList";

const SearchScreen = ({ navigation }) => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        // price === '$' || '$$' || '$$$' 
        return results.filter(result => {
            return result.price === price;
        })
    }

    return(
        <View style={{flex: 1, backgroundColor: '#ffffff', height: '100%'}}>
            <SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchApi}/>
              {errorMessage ? <Text> {errorMessage} </Text> : null} 
            <Text>We have found {results.length} results</Text>
            <ScrollView>
                <ResultsList 
                    results={filterResultsByPrice('$')} 
                    title="Cost effective" 
                />
                <ResultsList 
                    results={filterResultsByPrice('$$')} 
                    title="Bit Pricier" 
                />
                <ResultsList 
                    results={filterResultsByPrice('$$$')} 
                    title="Big Spender" 
                />
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({});
export default SearchScreen;