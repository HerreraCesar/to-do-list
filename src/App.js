import {Button, Text, View} from 'react-native';
import React, {useState} from 'react';

import CustomModal from './components/molecules/CustomModal';
import Input from './components/atoms/Input';
import List from './components/molecules/List';
import {styles} from './styles';

const App = () => {
  const [text, setText] = useState('');
  const [textList, setTextList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const handleOnChangeInput = value => {
    setText(value);
  };

  const addItem = () => {
    const ids = textList.map(item => item.id);
    if (text !== '' && !ids.includes(text)) {
      setTextList([...textList, {id: text, value: text, ended: false}]);
      setText('');
    }
  };

  const handleDeleteItem = id => {
    const newList = textList.filter(itemList => itemList.id !== id);
    setSelectedItem({});
    setTextList(newList);
    setModalVisible(!modalVisible);
  };

  const onHandleModal = id => {
    setSelectedItem(textList.find(itemList => itemList.id === id));
    setModalVisible(!modalVisible);
  };

  const taskEnded = id => {
    const position = textList.findIndex(itemList => itemList.id === id);
    textList[position].ended = !textList[position].ended;
    setTextList([...textList]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To Do List</Text>
      <View style={styles.containerInput}>
        <Input
          placeholder="Type here"
          value={text}
          handleOnChangeText={handleOnChangeInput}
        />
        <Button title="Add" color="black" onPress={addItem} />
      </View>

      <List
        elements={textList}
        taskEnded={taskEnded}
        onHandleModal={onHandleModal}
      />

      <CustomModal
        visible={modalVisible}
        title="Delete item"
        description="Are you sure you want to delete this item?"
        selectedItem={selectedItem}
        onHandleDeleteItem={handleDeleteItem}
      />
    </View>
  );
};

export default App;
