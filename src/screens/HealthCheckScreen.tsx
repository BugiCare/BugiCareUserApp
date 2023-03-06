
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
const QuestionContainer = styled.View`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

position: absolute;
width: 320px;
height: 125px;
left: 29px;
top: 184px;
`


const HealthScrollView = styled.FlatList`

flex:1;
`
const Container = styled.SafeAreaView`

flex-grow:1;

`

const HealthCheckScreen = () => {

    return (
        <MainView>
            <WhiteBackGround>
                <TopButton colorTheme={'#9ec9ff'} text={'건강설문'} />
               
            </WhiteBackGround>
        </MainView>
    )
}
export default HealthCheckScreen;