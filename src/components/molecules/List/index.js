import {FlatList, Text, TouchableOpacity, View} from 'react-native';

import React from 'react';
import {styles} from './styles';

const List = ({elements, taskEnded, onHandleModal}) => {
  return (
    <FlatList
      style={styles.containerList}
      data={elements}
      renderItem={({item}) => (
        <View style={styles.items}>
          <TouchableOpacity
            onPress={() => taskEnded(item.id)}
            onLongPress={() => onHandleModal(item.id)}>
            <Text style={item.ended ? styles.strikethrough : styles.textList}>
              {item.value}{' '}
            </Text>
          </TouchableOpacity>
        </View>
      )}
      keyExtractor={item => item.id}
    />
  );
};

export default List;