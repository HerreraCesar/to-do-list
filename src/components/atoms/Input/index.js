import {TextInput, View} from 'react-native';

import React from 'react';
import {styles} from './styles';

const Input = ({value, placeholder, handleOnChangeText, ...props}) => {
  return (
    <View style={styles.container}>
      <TextInput
        {...props}
        placeholder={placeholder}
        style={styles.textInput}
        placeholderTextColor="grey"
        value={value}
        autoCorrect={false}
        autoFocus={true}
        onChangeText={text => handleOnChangeText(text)}
      />
    </View>
  );
};

export default Input;
