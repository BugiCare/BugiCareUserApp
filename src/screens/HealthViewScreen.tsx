import { LogoImage, MainView, WhiteBackGround } from "../App"
import React from "react"
import { SmallButton, TopButton } from "../components/MainButton";
import { Image, FlatList, ImageSourcePropType, View, SafeAreaView } from "react-native";
import { images } from "../image";
import styled from "styled-components/native";
import { useState } from "react";
import { useEffect } from "react";

interface healthDataType{
    id: number,
    type:ImageSourcePropType
}

const HealthScrollView = styled.FlatList`

flex:1;
`
const Container = styled.SafeAreaView`

flex-grow:1;

`

const HealthViewScreen = () => {

    const [healthData, setHealthData] = useState<healthDataType[]>([])

    useEffect(() => {
        const hd = [{ id: 1, type: images.healthview1 },{id:2,type:images.healthview2}]
        setHealthData(hd)
    },[])
    
    const renderItem = ({ item }:any) => {
        return (
            <Container>
                <LogoImage source={item.type} width={100} resizeMode="contain" />
                </Container>
        )
    }

    return (
        <MainView>
            <WhiteBackGround>
                <TopButton colorTheme={'#9ec9ff'} text={'오늘의 건강정보'} />
                <Container>
                <HealthScrollView data ={healthData} renderItem={renderItem}/>
                </Container>
            </WhiteBackGround>
        </MainView>
    )
}
export default HealthViewScreen;