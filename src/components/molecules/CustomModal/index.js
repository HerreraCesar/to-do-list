import {Button, Modal, Text, View} from 'react-native';

import React from 'react';
import {styles} from './styles';

const CustomModal = ({
  title,
  description,
  selectedItem,
  onHandleDeleteItem,
  visible,
}) => {
  return (
    <Modal animationType="slide" visible={visible} transparent={true}>
      <View style={styles.modalContainerContent}>
        <View style={styles.modalTitle}>
          <Text>{title}</Text>
        </View>
        <View style={styles.modalContent}>
          <Text>{description}</Text>
          <Text style={styles.modalContentText}>{selectedItem.value}</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.modalButton}>
            <Button
              title="Yes"
              color="black"
              onPress={() => onHandleDeleteItem(selectedItem.id)}
            />
          </View>
          <View style={styles.modalButton}>
            <Button
              title="No"
              color="black"
              onPress={() => onHandleDeleteItem()}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
