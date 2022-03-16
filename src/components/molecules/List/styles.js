import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  containerList: {
    paddingHorizontal: 25,
  },
  items: {
    flexDirection: 'row',
    width: '100%',
  },
  strikethrough: {
    fontSize: 14,
    color: 'grey',
    marginBottom: 10,
    textDecorationLine: 'line-through',
  },
  textList: {
    fontSize: 14,
    color: '#212121',
    marginBottom: 10,
  },
});
