import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import ShowBusinessScreen from "./src/screens/ShowBusinessScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ShowBusiness: ShowBusinessScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Restraunt Search",
    },
  }
);

export default createAppContainer(navigator);
