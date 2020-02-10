import { createStackNavigator } from "react-navigation";
import Home from "../Screens/HomeScreens/Home";
import Loading from "../Screens/Loading";
import RestaurantMain from "../Screens/RestaurantScreens/RestaurantMain";
import PlatScreen from "../Screens/RestaurantScreens/PlatScreen";
import Cart from "../Screens/Cart";
export default (HomeStack = createStackNavigator(
  {
    Home: Home,
    RestaurantMain: RestaurantMain,
    Plat: PlatScreen,
    Loading: Loading,
    Cart: Cart
  },
  {
    initialRouteName: "Home"
  }
));
HomeStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible
  };
};
