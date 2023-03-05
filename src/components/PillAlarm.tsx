import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import AlarmClock from 'react-native-alarm-clock';

const [date, setDate] = useState(new Date());
const [showPicker, setShowPicker] = useState(false);
const [alarms, setAlarms] = useState<string[]>([]);

const onChange = ({event, selectedDate}: any) => {
  const currentDate = selectedDate || date;
  setShowPicker(true);
  setDate(currentDate);
};

const handleSetAlarm = () => {
  const alarmTime = moment(date).format('HH:mm');
  AlarmClock.createAlarm(alarmTime, 'AlarmApp');
  setAlarms([...alarms, alarmTime]);
};

const PillAlarm = () => {
  return (
    <View>
      <Button title="Set Alarm" onPress={() => setShowPicker(true)} />
      {showPicker && (
        <DateTimePicker value={date} mode="time" onChange={onChange} />
      )}
      <Button title="Save Alarm" onPress={handleSetAlarm} />
      {alarms.map(alarm => (
        <Text key={alarm}>{alarm}</Text>
      ))}
    </View>
  );
};

export default PillAlarm;
