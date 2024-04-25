import { useEffect } from 'react';
import {
  View,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { LIST_TYPE, RootStackParamList } from '../types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import AddItem from '../components/AddItem';
import CartList from '../components/CartList';
import Summary from '../components/Summary';

const Cart = ({
  route,
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'Cart'>) => {
  const { title, key } = route.params;

  useEffect(() => {
    navigation.setOptions({ title });
  }, []);

  function handleTouchOutside(): void {
    Keyboard.dismiss();
  }

  return (
    <TouchableWithoutFeedback onPress={handleTouchOutside}>
      <View style={styles.container}>
        <AddItem cartKey={key} />
        <CartList type={LIST_TYPE.CART_ITEM} cartKey={key} />
        <Summary cartKey={key} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddddff',
    alignItems: 'center',
    paddingTop: 2,
  },
});

export default Cart;
