import { TouchableOpacity, Animated, Text } from 'react-native';
import tw from 'twrnc';
import { ProductItemProps } from '../types';
import { useState } from 'react';

const ProductItem = ({ cartItem }: ProductItemProps) => {
  const [pressIn, setPressIn] = useState(false);
  const { name, price, amount } = cartItem;

  return (
    <TouchableOpacity
      onPressIn={() => setPressIn(true)}
      onPressOut={() => setPressIn(false)}
      activeOpacity={1}
      style={tw`min-w-full`}
    >
      <Animated.View
        style={tw` p-4 my-2 mx-4 rounded-xl bg-[${
          pressIn ? '#eeeeee' : '#fff'
        }]`}
      >
        <Text style={tw`text-2xl capitalize`} numberOfLines={1}>
          {name}
        </Text>
        <Text style={tw`text-sm text-gray-500`}>price: {price}</Text>
        <Text style={tw`text-sm text-gray-500`}>amount: {amount + 'x'}</Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default ProductItem;
