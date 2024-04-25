import React, { useEffect, useState } from 'react';
import tw from 'twrnc';
import 'react-native-get-random-values';
import {
  Keyboard,
  TouchableWithoutFeedback,
  View,
  StatusBar,
  Text,
  StyleSheet,
} from 'react-native';
import Addcart from '../components/Addcart';
import CartList from '../components/CartList';
import { RootStackParamList, LIST_TYPE } from '../types';
import { primary } from '../util';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const Home = ({
  navigation,
}: {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
}) => {
  function handleTouchOutside(): void {
    Keyboard.dismiss();
  }

  return (
    <TouchableWithoutFeedback onPress={handleTouchOutside}>
      <View style={styles.container}>
        <StatusBar backgroundColor={primary} barStyle={'dark-content'} />
        <Text style={tw`text-2xl font-bold`}>Cart List</Text>
        <CartList type={LIST_TYPE.CART} navigation={navigation} />
        <Addcart />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddddff',
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight || 0,
  },
});

export default Home;
