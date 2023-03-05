import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';
import MainButton from '../components/MainButton';
import {images} from '../image';
import {WhiteBackGround, MainView} from '../App';

interface DataTypes {
  id: string;
  name: string;
  address: string;
  age: number;
  phoneNum: number;
}
const ProfilePhoto = styled.Image`
flex:1;
margin-left:30px;
  width: 20%;
`;
const ProfileTextBox = styled.View`
flex:2;
`

const ProfileScreen = ({navigation, route}: any) => {
  const [num,setNum] = useState(0);
  const [myInfo, setMyInfo] = useState<DataTypes[]>([
    {id: '1', name: '김용남', address: '98세', age: 193, phoneNum: 1},
  ]);
const nextNum = ()=>{
setNum(num+1);
console.log(num);
}
  const getInfo = () => {
    axios
      .get(
        'https://raw.githubusercontent.com/BugiCare/BugiCareUserApp/master/src/data.json',
      ) // 여기에 아마 서버 주소??
      .then(json => {
        const infoData = json.data;
        setMyInfo(infoData);
      });
   
  };
  useEffect(() => {
    getInfo();
  },[num]);
  return (
    <MainView>
      <WhiteBackGround>
        <ProfilePhoto source={images.myInfoIcon} resizeMode="contain" />
        <ProfileTextBox>
        <Text>{myInfo[num].name}</Text>
        <Text>{myInfo[num].id}</Text>
        <Text>{myInfo[num].address}</Text>
        <Text>{myInfo[num].age}세</Text>
        <Text>0{myInfo[num].phoneNum}</Text>
        {num>2?<></>:<MainButton text={'+'}onPress={()=>{setNum(num+1)}}/>}
        {num<1?<></>:<MainButton text={'-'}onPress={()=>{setNum(num-1)}}/>}
        </ProfileTextBox>
      </WhiteBackGround>
    </MainView>
  );
};

export default ProfileScreen;
