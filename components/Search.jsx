import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const SearchComponent = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = React.useState('');

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    return (
        <View style={styles.searchContainer}>
            <TextInput
                style={styles.searchInput}
                placeholder="Поиск по названию здания"
                value={searchTerm}
                onChangeText={(text) => setSearchTerm(text)}
            />
            <Button title="Поиск" onPress={handleSearch} />
        </View>
    );
};



const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    searchInput: {
        flex: 1,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginRight: 10,
        paddingHorizontal: 10,

    },
});

export default SearchComponent;