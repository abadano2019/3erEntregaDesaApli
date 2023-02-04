import { Button, View } from 'react-native';

import { TaskList } from '../../components';
import { colors } from '../../constants/themes/colors.js';
import { styles } from './styles';
import { useState } from 'react'

const Records = ({onHandleReturn,tasks}) => {

  tasks.sort( (a, b) => {
    if(a.rounds < b.rounds) {
      return -1;
    }
    if(a.rounds > b.rounds) {
      return 1;
    }
    if (a.time < b.time) {
      return -1;
    }
    if (a.time > b.time) {
      return 1;
    }
    if (a.error < b.error) {
      return -1;
    }
    if (a.error < b.error) {
      return 1;
    }
    return 0;
  }) 



  return (
    <View style={styles.container}>
      
      <TaskList 
        tasks={tasks}
      />
      <Button title="Volver" onPress={onHandleReturn} color={colors.primary} />
    </View>
  );
}

export default Records;