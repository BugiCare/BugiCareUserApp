import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';
import MainButton from '../components/MainButton';
import {images} from '../image';
import {WhiteBackGround, MainView} from '../App';
import TimePicker from '../components/Alarm';

interface DataTypes {
  id: string;
  name: string;
  address: string;
  age: number;
  phoneNum: number;
}
interface SelectBarTheme {
  theme: string;
}
const SelectBarView = styled.View`
  flex: 1;
  left: 5%;
  width: 90%;
  flex-direction: row;
  position: absolute;
`;
const SelectBar = styled.Pressable<SelectBarTheme>`
  flex: 1;
  width: 45%;
  height: 100px;
  margin-top: 10px;
  background: ${props => props.theme};
  border-radius: 30px;
  align-items: center;
`;
const SelectBarText = styled.Text`
  padding-top: 12px;
  font-size: 22px;
`;
const ProfilePhoto = styled.Image`
  flex: 2;
  margin-left: 20px;
  width: 20%;
`;
const ProfileTextBox = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  margin: 10px;
`;
const ProfileTextKey = styled.Text`
  margin-left: 10px;
  margin-right: 10px;
  font-weight: 400;
  font-size: 15px;
  padding: 9px;
  align-items: center;
  text-align: center;
  background: #f3dede;
  border-radius: 50px;
`;

const ProfileScreen = ({navigation, route}: any) => {
  const [num, setNum] = useState(0);
  const [selectedInfo, setSelectedInfo] = useState('#93ddff');
  const [myInfo, setMyInfo] = useState<DataTypes[]>([
    {id: '1', name: '김용남', address: '98세', age: 193, phoneNum: 1},
  ]);
  const nextNum = () => {
    setNum(num + 1);
    console.log(num);
  };
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
  }, []);
  return (
    <MainView>

      <SelectBarView>
        <SelectBar
          theme={'#93ddff'}
          onPress={() => {
            setSelectedInfo('#93ddff');
          }}>
          <SelectBarText>내 정보</SelectBarText>
        </SelectBar>
        <SelectBar
          theme={'#d2c9ff'}
          onPress={() => {
            setSelectedInfo('#d2c9ff');
          }}>
          <SelectBarText>복지사 정보</SelectBarText>
        </SelectBar>
      </SelectBarView>

      <WhiteBackGround
        style={{top: 50, height: 450, backgroundColor: selectedInfo}}>
        <WhiteBackGround style={{flex: 1, marginBottom: 20, marginTop: 20}}>
          {selectedInfo === '#d2c9ff' ? (
            <>
              <View style={{flex: 4, flexDirection: 'row'}}>
                <ProfilePhoto source={images.myInfoIcon} resizeMode="contain" />
                <View style={{flex: 3, justifyContent: 'center'}}>
                  <Text style={{padding: 10}}>사회복지사</Text>
                  <Text style={{padding: 10, fontSize: 20}}>최한성</Text>
                </View>
              </View>
              <ProfileTextBox>
                <ProfileTextKey>소속</ProfileTextKey>
                <Text>한성복지센터</Text>
              </ProfileTextBox>
              <ProfileTextBox>
                <ProfileTextKey>연락처</ProfileTextKey>
                <Text>010-1234-5678</Text>
              </ProfileTextBox>
              <View style={{flex: 2}}></View>
            </>
          ) : (
            <>
              <View style={{flex: 5, flexDirection: 'row'}}>
                <ProfilePhoto source={images.myInfoIcon} resizeMode="contain" />
                <View style={{flex: 3, justifyContent: 'center'}}></View>
              </View>
              <ProfileTextBox>
                <ProfileTextKey>성함</ProfileTextKey>
                <Text>{myInfo[num].name}</Text>
                <ProfileTextKey>연세</ProfileTextKey>
                <Text>{myInfo[num].age}세</Text>
              </ProfileTextBox>
              <ProfileTextBox>
                <ProfileTextKey>주민번호</ProfileTextKey>
                <Text>{myInfo[num].id}</Text>
              </ProfileTextBox>
              <ProfileTextBox>
                <ProfileTextKey>연락처</ProfileTextKey>
                <Text>0{myInfo[num].phoneNum}</Text>
              </ProfileTextBox>
              <ProfileTextBox>
                <ProfileTextKey>주소</ProfileTextKey>
                <Text>{myInfo[num].address}</Text>
              </ProfileTextBox>
              <View style={{flex: 0.5}}></View>
            </>
          )}
          {/* {num > 2 ? (
            <></>
          ) : (
            <MainButton
              text={'+'}
              onPress={() => {
                setNum(num + 1);
              }}
            />
          )}
          {num < 1 ? (
            <></>
          ) : (
            <MainButton
              text={'-'}
              onPress={() => {
                setNum(num - 1);
              }}
            />
          )} */}
        </WhiteBackGround>
      </WhiteBackGround>
    </MainView>
  );
};
export default ProfileScreen;