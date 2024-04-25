import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RowMap } from 'react-native-swipe-list-view';

export interface CartItem {
  key: string;
  name: string;
  price: number;
  amount: number;
}

export interface Cart {
  key: string;
  title: string;
  date: string;
  items: CartItem[];
}

export type Carts = Cart[];

export type ItemProps = {
  item: Cart;
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

export interface HiddenItemProps {
  data: Carts | CartItem[];
  rowData: RowData;
  rowMap: RowMap<Cart | CartItem>;
  cartKey?: string;
}

export type ProductItemProps = {
  cartItem: CartItem;
};

export type RootStackParamList = {
  Home: undefined;
  Cart: { title: string; key: string };
};

export enum LIST_TYPE {
  'CART',
  'CART_ITEM',
}

export type CartListProps = {
  type: LIST_TYPE;
  navigation?: NativeStackNavigationProp<RootStackParamList, 'Home'>;
  cartKey?: string;
};

export interface RowData {
  item: Cart | CartItem;
}

export interface RowProp {
  rowMap: RowMap<Cart | CartItem>;
  rowKey: string;
}
