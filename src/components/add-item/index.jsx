import { Button, TextInput, View } from 'react-native';

import React from 'react';
import { colors } from "../../constants/themes/colors";
import { styles } from './styles'

const AddItem = ({ 
    placeholder, 
    task, 
    onHandlerChange, 
    buttonText, 
    buttonColor, 
    onHandlerSubmit
}) => {
    return (
        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.input} 
            placeholder={placeholder}
            autoComplete='off'
            autoCorrect={false}
            autoCapitalize='none'
            value={task}
            onChangeText={onHandlerChange}
          />
          <Button disabled={!task} title={buttonText} color={buttonColor} onPress={onHandlerSubmit} />
        </View>
    )
}

export default AddItem;