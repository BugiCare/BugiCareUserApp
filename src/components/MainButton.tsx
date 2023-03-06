import styled from "styled-components/native";
import { Button } from "./IconButton";
import React from "react";
import { ImageSourcePropType, Text } from "react-native";
import { LogoImage } from "../App";


interface ButtonTextType{
    fontWeight: number,
    fontSize: number,
}
interface ButtonTheme{
    theme: string,
    flex:number
}

const MainButtonBG = styled(Button)<ButtonTheme>`
flex:${props => props.flex};
flex-direction:row;
align-items:center;

position:relative;
margin:auto;
margin-top:10px;
margin-bottom:10px;
padding-left:20;
padding-right:20;
background: ${props => props.theme};
border-radius: 100px;
`
const ButtonText = styled.Text<ButtonTextType>`
font-weight: ${props => props.fontWeight};
font-size: ${props => props.fontSize}px;
font-family:'BMJUA';

margin:auto;
color: #040202;
`
type MainButtonType = {
    colorTheme?:string
    text?: string,
    types?: ImageSourcePropType,
    onPress?:()=>void
}

const MainButton = ({text,types,onPress}:MainButtonType) => {
    return (
        <MainButtonBG flex={ 1} theme={'#9ec9ff'} width={80} onPress={onPress} >
            <LogoImage source={types} width={30} resizeMode='contain'></LogoImage>
            <ButtonText fontWeight={400} fontSize={32}>{text}</ButtonText>
        </MainButtonBG>
    )
}
export const SmallButton = ({colorTheme,text,types,onPress}:MainButtonType) => {
    return (
        <MainButtonBG  flex={0.8} theme ={colorTheme} width={50} onPress={onPress}>
            <LogoImage source={types} width={25} resizeMode='contain'></LogoImage>
            <ButtonText fontWeight={400} fontSize={22}>{text}</ButtonText>
        </MainButtonBG>
    )
}
export const TopButton = ({colorTheme,text,onPress}:MainButtonType) => {
    return (
        <MainButtonBG  flex={0.1} theme ={colorTheme} width={50} onPress={onPress}>
            <ButtonText fontWeight={400} fontSize={20}>{text}</ButtonText>
        </MainButtonBG>
    )
}
export default MainButton;