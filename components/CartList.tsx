import { useEffect } from "react";
import { RowMap, SwipeListView } from "react-native-swipe-list-view";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  StatusBar,
  StyleSheet,
  Image,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from "react-native";
import { Cart, CartListProps, RowData, LIST_TYPE, CartItem } from "../types";
import Item from "./Item";
import HiddenItem from "./HiddenItem";
import { useGlobalState } from "./GlobalstateProvider";
import ProductItem from "./ProductItem";

const CartList = ({ navigation, type, cartKey }: CartListProps) => {
  const { carts } = useGlobalState();
  const isTrue = type === LIST_TYPE.CART && navigation;

  useEffect(() => {}, [carts]);

  if (!carts || carts.length === 0) {
    return (
      <SafeAreaView style={styles.secondaryContainer}>
        <Image
          source={require("../assets/emptyCart.png")}
          style={styles.image}
          resizeMode="contain" // Ensures the image covers the entire parent container
        />
      </SafeAreaView>
    );
  }

  return (
    <SwipeListView
      data={isTrue ? carts : carts.find((c) => c.key === cartKey)?.items ?? []}
      renderItem={({ item }) =>
        isTrue ? (
          <Item item={item as Cart} navigation={navigation} />
        ) : (
          <ProductItem cartItem={item as CartItem} />
        )
      }
      renderHiddenItem={(rowData: RowData, rowMap: RowMap<Cart | CartItem>) => (
        <HiddenItem
          data={
            isTrue ? carts : carts.find((c) => c.key === cartKey)?.items ?? []
          }
          rowData={rowData}
          rowMap={rowMap}
          cartKey={cartKey}
        />
      )}
      keyExtractor={(item) => item.key}
      leftOpenValue={75}
      rightOpenValue={-150}
      previewRowKey={"0"}
      previewOpenValue={-40}
      previewOpenDelay={3000}
      useNativeDriver={true}
      scrollEnabled={true}
    />
  );
};

const sharedStyle: ViewStyle | TextStyle | ImageStyle = {
  marginTop: StatusBar.currentHeight || 0,
  color: "#fff",
  width: "100%",
  alignItems: "center",
};
const styles = StyleSheet.create({
  container: {
    ...sharedStyle,
  },
  secondaryContainer: {
    ...sharedStyle,
    height: "100%",
  },
  image: {
    width: "95%", // Allow the width to adjust based on the container
    height: "80%",
  },
});

export default CartList;
