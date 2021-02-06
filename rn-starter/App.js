import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';

/* Second chapter */
import ComponentScreen from './src/screens/ComponentScreen';
import Chapter2ExerciseComponent from './src/exercises/Chapter2ExerciseComponent';

/* Third chapter */
import ListScreen from './src/screens/ListScreen';
import Chapter3ExerciseComponent from './src/exercises/Chapter3ExerciseComponent';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    ComponentScreen: ComponentScreen,
    Chapter2ExerciseComponent: Chapter2ExerciseComponent,
    List: ListScreen,
    Chapter3ExerciseComponent: Chapter3ExerciseComponent
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);

export default createAppContainer(navigator);
