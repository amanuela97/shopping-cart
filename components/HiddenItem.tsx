import tw from 'twrnc';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { RowMap } from 'react-native-swipe-list-view';
import {
  Carts,
  RowData,
  Cart,
  RowProp,
  CartItem,
  HiddenItemProps,
} from '../types';
import { useGlobalState } from './GlobalstateProvider';

const HiddenItem = ({ data, rowData, rowMap, cartKey }: HiddenItemProps) => {
  const { carts, setCarts } = useGlobalState();

  const closeRow = ({ rowMap, rowKey }: RowProp) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteRow = ({ rowMap, rowKey }: RowProp) => {
    closeRow({ rowMap, rowKey });
    const newData = [...data];
    const prevIndex = data.findIndex((item) => item.key === rowKey);
    if ((data[0] as Cart).date) {
      newData.splice(prevIndex, 1);
      setCarts(newData as Carts);
    } else {
      const cartItemKey = (data[prevIndex] as CartItem).key;
      const newCarts = carts.map((cart) => {
        if (cart.key === cartKey) {
          cart.items = cart.items.filter((item) => item.key !== cartItemKey);
        }
        return cart;
      });
      setCarts(newCarts);
    }
  };

  return (
    <View style={tw`my-2 mx-4 rounded-xl flex-row justify-end items-center`}>
      <TouchableOpacity
        style={[styles.hiddenButton, styles.closeButton]}
        onPress={() => closeRow({ rowMap, rowKey: rowData.item.key })}
      >
        <Text style={styles.buttonText}>Close</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.hiddenButton, styles.deleteButton]}
        onPress={() => deleteRow({ rowMap, rowKey: rowData.item.key })}
      >
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  hiddenButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 75,
    height: 80,
  },
  closeButton: {
    backgroundColor: 'green', // Blue
    borderRadius: 12,
  },
  deleteButton: {
    backgroundColor: '#E74C3C', // Red
    borderRadius: 12,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
export default HiddenItem;
