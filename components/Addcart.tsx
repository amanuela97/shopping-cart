import { useRef, useState } from 'react';
import { TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { FAB } from '@react-native-material/core';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { v4 as uuidv4 } from 'uuid';
import tw from 'twrnc';
import { secondary } from '../util';
import { useGlobalState } from './GlobalstateProvider';

const Addcart = () => {
  const { setCarts } = useGlobalState();
  const [title, setTitle] = useState('');
  const inputRef = useRef<TextInput>(null);

  const addTitle = () => {
    if (!title) return;
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    });
    const newCart = { key: uuidv4(), title, date: formattedDate, items: [] };
    setCarts((prev) => [...prev, newCart]);
    if (inputRef.current) inputRef.current.blur();
    setTitle('');
  };

  return (
    <KeyboardAvoidingView
      style={tw`absolute bottom-0 w-full flex-row justify-end gap-2 p-4 my-4 mx-6`}
    >
      <TextInput
        ref={inputRef}
        style={styles.text}
        onChangeText={setTitle}
        value={title}
        placeholder="Add new cart"
        selectionColor={'black'}
      />
      <FAB
        icon={(props) => <Icon name="plus" {...props} />}
        onPress={addTitle}
        color={secondary}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
    elevation: 2,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    backgroundColor: secondary,
    flex: 2,
    borderRadius: 50,
    textAlign: 'center',
    elevation: 2,
  },
});
export default Addcart;
