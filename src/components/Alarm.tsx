import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import {format} from 'date-fns';


interface AlarmType{
  alarmTime: Date,
  title:string
}

const Alarm = ({alarmTime,title}:AlarmType) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);


  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };



//   const scheduleAlarm = (date: Date) => {
//     PushNotification.localNotificationSchedule({
//       message: 'Alarm!',
//       date: date,
//     });
//   };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{title }</Text>

      {
        <Text style={styles.alarmTime}>
          Alarm set for {moment(alarmTime).format('h:mm A')}
        </Text>
      }

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    marginBottom: 24,
  },
  alarmTime: {
    fontSize: 18,
    marginVertical: 24,
  },
});

export default Alarm;