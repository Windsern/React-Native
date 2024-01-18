import React from "react";
import styled from 'styled-components/native';
import {ImageBackground, StyleSheet, Image, View} from "react-native";
const BuildView = styled.View`
    position: relative;
    display: flex;
    padding: 10px;
    border: 2px solid red;
    max-height: 100%;
    align-items: center;
    ;
    background-repeat: no-repeat;
    flex-direction: row;
    border-radius: 10px; /* Увеличил радиус закругления углов */
    /*background-color: rgb(206, 170, 170);*/
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Добавил тень для карточек */
    transition: transform 0.2s ease-in-out; /* Анимация при наведении курсора */
`;
const BuildImage = styled.Image`
    width:150px;
    height:150px;
    border-radius:12px;
    margin-right:12px;

`;
const TextName = styled.Text`
    font-size:16px;
    font-weight:700;
    margin-bottom: 10px;
  
`;
const BuildBackground = styled(ImageBackground)`
background:rgba(255, 255, 255, 0.1) url("http://127.0.0.1:35107/api/v1/buckets/images/objects/download?preview=true&prefix=ZHJpdmVycy9iYy1jYXJkMi5qcGc=&version_id=null") no-repeat;
background-size: cover; /* This will make sure the background image covers the entire component */
/* Add more styles as needed */
/* For example: */
width: 100%;

padding: 10px;

`;
const styles = StyleSheet.create({

    textContainer: {
        flexDirection: 'column',

    },

    image: { height: 320, alignSelf: 'stretch' },

});


export const Build = ({title, address, minioImageUrl, count_floor, year_building}) => {
        return(
            <BuildBackground>
                <BuildView >
                    <BuildImage source = {{ url:minioImageUrl}}/>
                    {/* <Image source={{ uri: minioImageUrl }} style={{ width: 100, height: 100 }} /> */}
                    <View style = {styles.textContainer}>
                        <TextName>{title}</TextName>
                        <TextName>{address}</TextName>
                        <TextName>{count_floor}</TextName>
                        <TextName>{year_building}</TextName>
                        {/* <TextName>{minioImageUrl}</TextName> */}
                        <Image
                            style={styles.image}
                            source={{uri: `${minioImageUrl}`}} 
                            resizeMode='contain'
                        />

                    </View>
                </BuildView>
            </BuildBackground>

        )
}

const BuildShort = ({title, address, year_building, minioImageUrl}) => {
    // Первый экран, где вы хотите отобразить только часть данных
    const buildData = {
        title: title,
        address: address,
        year_building: year_building,
        minioImageUrl: minioImageUrl
    };

    return (
       <Build {...buildData} />
    );
};


const BuildFull = ({title, address, minioImageUrl, year_building, count_floor}) => {
    // Второй экран, где вы хотите отобразить все данные
    const buildData = {
        title: title,
        address: address,
        minioImageUrl: minioImageUrl,
        year_building: year_building,
        count_floor: count_floor,
    };

    return (
        <Build {...buildData}/>
    );
};

export { BuildShort, BuildFull };