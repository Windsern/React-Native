import React,{useEffect, useState} from 'react';
import {

    Text,
    FlatList,
    View,
    ActivityIndicator,
    RefreshControl,
    TouchableOpacity,
} from 'react-native';

import {BuildShort} from "../components/BuildCard";
import axios from "axios";
import SearchComponent from "../components/Search";


export const  BuildListScreen =({navigation})=> {
    const [isLoading,setIsLoading]=React.useState(true);
    const [builds, setBuilds] = React.useState([]);
    const [filteredBuilds, setFilteredBuilds] = useState([]);
   // const [searchTerm, setSearchTerm] = useState('');

    const fetchBuilds =() =>{
        setIsLoading(true);
        axios
            .get('http://192.168.43.197:8000/api/buildings/search/')
            .then(response => {
                // Access the drivers array from the response data
                const fetchedBuilds = response.data;
                setBuilds(fetchedBuilds);
                setFilteredBuilds(fetchedBuilds);
            })
            .catch(err => {
                console.log(err);
                // alert(err)
                alert('Error GET builds');
            }).finally(()=>{
            setIsLoading(false);
        });

    }
    useEffect(fetchBuilds,[]);

    const handleSearch = (searchTerm) => {
        const searchTermLowerCase = searchTerm.toLowerCase();
        const filtered = builds.filter((build) =>
            build.title.toLowerCase().includes(searchTermLowerCase)
        );
        setFilteredBuilds(filtered);
    };

    if(isLoading){
        return <View style={{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
        }}>
            <ActivityIndicator size="large"/>
            <Text>Загружается..</Text>

        </View>
    }


    return (

        <View>

            <SearchComponent onSearch={handleSearch}/>
            <FlatList

                refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchBuilds}/>}
                data={filteredBuilds}
                renderItem={({item}) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('BuildScreen', {building_id: item.building_id, title: item.title})}>
                        <BuildShort title={item.title} address={item.address}
                                     minioImageUrl={item.image}
                                     />
                        {/*<Driver />*/}
                    </TouchableOpacity>
                )}
            />

        </View>

    );
}