import React from 'react';
import tw from 'twrnc';
import { useGlobalState } from '../components/GlobalstateProvider';
import { TouchableOpacity, Animated, Text } from 'react-native';

const Summary = ({ cartKey }: { cartKey: string }) => {
  const { carts } = useGlobalState();
  const cart = carts.find((c) => c.key === cartKey);
  const TotalItem =
    cart?.items.reduce((accumulator, a) => accumulator + a.amount, 0) ?? 0;
  const TotalPrice =
    cart?.items.reduce(
      (accumulator, a) => accumulator + a.price * a.amount,
      0
    ) ?? 0;

  return (
    <TouchableOpacity activeOpacity={1} style={tw`min-w-full`}>
      <Animated.View style={tw`p-4 my-2 mx-4 rounded-xl bg-[${'#eeeeee'}]`}>
        <Text style={tw`text-xl capitalize`} numberOfLines={1}>
          Total Items: {TotalItem}
        </Text>
        <Text style={tw`text-xl capitalize`} numberOfLines={1}>
          Total Price: {TotalPrice + ' €'}
        </Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default Summary;
