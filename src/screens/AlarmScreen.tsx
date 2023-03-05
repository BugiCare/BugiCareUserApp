import React, {useState} from 'react';
import Alarm from '../components/Alarm';
import {SmallButton, TopButton} from '../components/MainButton';
import {WhiteBackGround, MainView} from '../App';
import {Button, ScrollView, TextInput} from 'react-native';
import styled from 'styled-components/native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const AlarmContainer = styled.ScrollView`
  height: 100px;
  padding-top: 20px;
`;
interface AlarmTypes {
    id: number;
    title: string;
    time: Date;
  }
const AlarmScreen = () => {
  const [alarmNumber, setAlarmNumber] = useState<number[]>([]);
  const [isTextInputVisible, setTextInputVisible] = useState(false);
  const [title, setTitle] = useState<string>('');
  const [alarmID, setAlarmID] = useState(0);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [alarmTime, setAlarmTime] = useState(new Date());
    const [alarmInfo,setAlarmInfo] = useState<AlarmTypes[]>([])

  const showTextInput = () => {
    setTextInputVisible(true);
  };

  const hideTextInput = () => {
    setTextInputVisible(false);
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    console.warn('A date has been picked: ', date);
      setAlarmTime(date);
      const array = [...alarmInfo, {id:alarmID,title:title,time:alarmTime}];
      setAlarmInfo(array);
      console.log(alarmInfo)

    hideDatePicker();
    // scheduleAlarm(date);
  };

  //   const scheduleAlarm = (date: Date) => {
  //     PushNotification.localNotificationSchedule({
  //       message: 'Alarm!',
  //       date: date,
  //     });
  //   };

  const addAlarmTime = () => {
    hideTextInput();
    showDatePicker();

    setAlarmID(alarmID+1);
  };

  const addAlarmTitle = () => {
    showTextInput();

  };
  return (
    <MainView>
      <WhiteBackGround>
        <TopButton colorTheme={'#9ec9ff'} text={'투약 알람'}></TopButton>
        <AlarmContainer>
          <DateTimePickerModal
            date={alarmTime}
            isVisible={isDatePickerVisible}
            mode="time"
            onChange={date => {
              setAlarmTime(date);
            }}
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
          {alarmInfo.map((item,id) => {
            return <Alarm alarmTime={alarmInfo[id].time} title={alarmInfo[id].title}></Alarm>;
          })}
          <Button title="알람 추가+" onPress={addAlarmTitle} />
                  {isTextInputVisible?<TextInput
                      value={title}
                      onChangeText={text => setTitle(text)}
                      returnKeyType="next"
                      onSubmitEditing={addAlarmTime}
                      style={{ backgroundColor: 'green' }}
                  />:null}
        </AlarmContainer>
      </WhiteBackGround>
    </MainView>
  );
};
export default AlarmScreen;