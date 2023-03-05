import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Image} from 'react-bootstrap';
import ProfileScreen from './screens/ProfileScreen';

import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import styled from 'styled-components/native';
import IconButton from './components/IconButton';
import MainButton from './components/MainButton';
import {images} from './image';

interface PropsType {
  width: number;
}
type DataType = {
  id: string;
  name: string;
  content: string;
  price: number;
  count: number;
};

const FullView = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
`;
const Navbar = styled.View`
  height: 70;
  flex-direction: row;
  padding-left: 5;
  padding-right: 5;
  align-items: center;
  justify-content: space-between;
  background-color: white;
`;
const Logo = styled.TouchableOpacity`
  flex: 1;
  align-items: flex-start;
`;
const MenuIcon = styled.TouchableOpacity`
  flex: 1;
  align-items: flex-end;
`;
export const LogoImage = styled.Image<PropsType>`
  width: ${props => props.width}%;
`;
export const MainView = styled.View`
  flex: 1;
  background-color: #f9e8e8;
`;
export const WhiteBackGround = styled.View`
  width: 90%;
  height: 500px;
  margin: auto;
  margin-top: 10px;
  background: #ffffff;
  border-radius: 30px;
`;

const HomeScreen = ({navigation, route}: any) => {
  return (
    <MainView>
      <WhiteBackGround>
        <MainButton
          text={'내정보'}
          types={images.doctorIcon}
          onPress={() => navigation.navigate('Profile')}
        />
        <MainButton
          text={'건강백서'}
          types={images.bookIcon}
          onPress={() => navigation.navigate('Profile1')}
        />
        <MainButton text={'건강체크'} types={images.heartIcon} />
        <MainButton text={'투약알람'} types={images.pillIcon} />
      </WhiteBackGround>
    </MainView>
  );
};

const Stack = createNativeStackNavigator();
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <FullView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Navbar>
        <Logo>
          <LogoImage source={images.mainLogo} width={80} resizeMode="contain" />
        </Logo>
        <MenuIcon>
          <LogoImage source={images.menuIcon} width={30} resizeMode="contain" />
        </MenuIcon>
      </Navbar>
      <MainView>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="Profile" component={ProfileScreen}  />
            <Stack.Screen name="Profile1" component={ProfileScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </MainView>
      <Navbar>
        <IconButton types={images.homeIcon} width={18} />
        <IconButton types={images.searchIcon} width={18} />
        <IconButton types={images.myInfoIcon} width={18} />
        <IconButton types={images.settingIcon} width={18} />
      </Navbar>
    </FullView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
