import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  modalContainerContent: {
    backgroundColor: '#eee',
    borderRadius: 10,
    marginHorizontal: 25,
    marginVertical: 250,
    elevation: 5,
    padding: 25,
  },
  modalTitle: {
    fontSize: 14,
    color: 'black',
    paddingBottom: 10,
  },
  modalContentText: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  modalButton: {
    width: '47.5%',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
