import React, { useState } from 'react';
import {
  Alert,
  Button,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import CurrencyInput from 'react-native-currency-input';
import tw from 'twrnc';
import { secondary } from '../util';
import { useGlobalState } from './GlobalstateProvider';
import { v4 as uuidv4 } from 'uuid';

const AddItem = ({ cartKey }: { cartKey: string }) => {
  const [name, onChangeName] = useState('');
  const [price, onChangePrice] = useState<number | null>(0);
  const [amount, onChangeAmount] = useState<number | null>(0);
  const { carts, setCarts } = useGlobalState();
  const inputStyle = `mt-2 border-2 border-black px-2 py-1 text-black rounded bg-[${secondary}]`;

  const AddItem = () => {
    if (name && price && amount) {
      const newData = [...carts].map((c) => {
        if (c.key === cartKey) {
          c.items.push({ key: uuidv4(), name, price, amount });
        }
        return c;
      });
      setCarts(newData);
      onChangeName('');
      onChangeAmount(0);
      onChangePrice(0);
    } else {
      Alert.alert('Input fields must not be empty');
    }
  };

  return (
    <KeyboardAvoidingView style={tw`w-full`}>
      <View style={tw`flex-row justify-center w-full p-2 gap-1`}>
        <TextInput
          style={tw`${inputStyle} basis-1/2 text-4`}
          onChangeText={onChangeName}
          value={name}
          placeholder="Item name..."
          selectionColor={'black'}
        />
        <CurrencyInput
          style={tw`${inputStyle} basis-1/4`}
          value={price}
          onChangeValue={onChangePrice}
          prefix="€"
          delimiter="."
          separator=","
          precision={2}
          minValue={0}
          selectionColor={'black'}
        />
        <CurrencyInput
          style={tw`${inputStyle} basis-1/6`}
          value={amount}
          onChangeValue={onChangeAmount}
          precision={0}
          minValue={0}
          maxValue={900}
          selectionColor={'black'}
        />
      </View>
      <TouchableOpacity style={tw`mx-5`}>
        <Button title={'Add Item'} color={secondary} onPress={AddItem} />
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default AddItem;
