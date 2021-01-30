import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';

/* Second chapter */
import ComponentScreen from './src/screens/ComponentScreen';
import Chapter2ExerciseComponent from './src/exercises/Chapter2ExerciseComponent';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    ComponentScreen: ComponentScreen,
    Chapter2ExerciseComponent: Chapter2ExerciseComponent
  },
  {
    initialRouteName: 'ComponentScreen',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);

export default createAppContainer(navigator);
