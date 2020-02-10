import { createStackNavigator } from "react-navigation";
import Search from "../Screens/Search";
import Loading from "../Screens/Loading";
import Restaurants from "../Screens/Restaurants"
import RestaurantMain from "../Screens/RestaurantScreens/RestaurantMain"
export default (SearchStack = createStackNavigator(
  {
    SearchTop: Search,
    Loading: Loading,
    Restaurants:Restaurants,
    RestaurantMain:RestaurantMain
  },
  {
    initialRouteName: "SearchTop"
  }
));
SearchStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible
  };
};
