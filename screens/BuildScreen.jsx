import React, {useEffect, useState} from 'react';

import axios from "axios";
import {ActivityIndicator, Text, View} from "react-native";
import {Build} from "../components/BuildCard";




export const BuildScreen = ({route,navigation}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [build, setBuild] = useState();
    const {building_id, title} =route.params;



    useEffect(() => {
        navigation.setOptions(title);
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(`http://192.168.43.197:8000/api/buildings/${building_id}/`);
                const fetchedBuild = response.data;
                setBuild(fetchedBuild);
            } catch (error) {
                console.log(error);
                alert('Error GET build');
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <ActivityIndicator size="large"/>
                <Text>Загружается..</Text>
            </View>
        );
    }

    // Check if driver is defined before accessing its properties
    if (!build) {
        return (
            <View>
                <Text>Driver not found.</Text>
            </View>
        );
    }

    return (
        // // <ImageBackground source={{uri:'http://172.20.10.6:46539/api/v1/buckets/images/objects/download?preview=true&prefix=ZHJpdmVycy9iYy1jYXJkMi5qcGc=&version_id=null'}}
        //                  style={styles.backgroundImage}
        //                  onError={(error) => console.error('Image load error:', error.nativeEvent.error)}>
        <Build
            title={build.title}
            address={build.address}
            minioImageUrl={build.image}
            year_building = {build.year_building}
            count_floor={build.count_floor}
        />
        // </ImageBackground>
    );
};

// const styles = StyleSheet.create({
//     backgroundImage: {
//         flex: 1,
//         resizeMode: 'cover', // or 'stretch' or 'contain'
//         // justifyContent: 'center',
//         // alignItems: 'center',
//
//     }
// });