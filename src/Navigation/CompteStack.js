import { createStackNavigator } from "react-navigation";
import Profile from "../Screens/CompteScreens/Profile";
import Details from "../Screens/CompteScreens/Details";
export default (CompteStack = createStackNavigator({
  Profile: Profile,
  Details: Details
}));
