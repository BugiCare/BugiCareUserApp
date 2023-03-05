import styled from "styled-components/native";
import { Button } from "./IconButton";
import React from "react";
import { ImageSourcePropType, Text } from "react-native";
import { LogoImage } from "../App";


const MainButtonBG = styled(Button)`
flex:1;
flex-direction:row;
align-items:center;
position:relative;
margin:auto;
margin-top:10px;
padding-left:10px;
background: #CFA9A9;
border-radius: 100px;
`
const ButtonText = styled.Text`
font-weight: 400;
font-size: 32px;
padding-left:20px;
text-align: center;

color: #040202;
`
type MainButtonType = {
    text?: string,
    types?: ImageSourcePropType,
    onPress?:()=>void
}

const MainButton = ({text,types,onPress}:MainButtonType) => {
    return (
        <MainButtonBG width={80} onPress={onPress} >
            <LogoImage source={types} width={30} resizeMode='contain'></LogoImage>
            <ButtonText>{text}</ButtonText>
        </MainButtonBG>
    )
}

export default MainButton;
