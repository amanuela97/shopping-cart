import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./pages/Home";
import CartScreen from "./pages/Cart";
import { RootStackParamList } from "./types";
import { GlobalStateProvider } from "./components/GlobalstateProvider";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <GlobalStateProvider>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: { backgroundColor: "#ddddff" },
            animation: "fade",
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Cart" component={CartScreen} />
        </Stack.Navigator>
      </GlobalStateProvider>
    </NavigationContainer>
  );
}
