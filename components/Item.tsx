import { TouchableOpacity, Animated, Text } from 'react-native';
import tw from 'twrnc';
import { ItemProps } from '../types';
import { useState } from 'react';

const Item = ({ item, navigation }: ItemProps) => {
  const [pressIn, setPressIn] = useState(false);
  const { title, date, key } = item;

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Cart', { title, key })}
      onPressIn={() => setPressIn(true)}
      onPressOut={() => setPressIn(false)}
      activeOpacity={1}
    >
      <Animated.View
        style={tw`p-4 my-2 mx-4 rounded-xl bg-[${
          pressIn ? '#eeeeee' : '#fff'
        }]`}
      >
        <Text style={tw`text-2xl capitalize`} numberOfLines={1}>
          {title}
        </Text>
        <Text style={tw`text-sm text-gray-500`}>{date}</Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default Item;
