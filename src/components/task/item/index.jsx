import { Text, TouchableOpacity, View } from 'react-native'

import React from "react";
import { styles } from "./styles";

const TaskItem = ({ item }) => {

    return (
      <View style={styles.itemTouchableContainer}>
        <TouchableOpacity style={styles.itemTaskContainer}>
          <Text style={styles.itemList}>Rounds: {item.rounds} "Tiempo: "  {item.time} "Errores: "  {item.error} {}</Text>
        </TouchableOpacity>
      </View>
    )
}

export default TaskItem;