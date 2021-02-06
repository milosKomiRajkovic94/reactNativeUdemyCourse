import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';

/* Second chapter */
import ComponentScreen from './src/screens/ComponentScreen';
import Chapter2ExerciseComponent from './src/exercises/Chapter2ExerciseComponent';

/* Third chapter */
import ListScreen from './src/screens/ListScreen';
import Chapter3ExerciseComponent from './src/exercises/Chapter3ExerciseComponent';

/* Fourth chapter */
import ImageScreen from './src/screens/ImageScreen';
import ImageExerciseScreen from './src/exercises/Chapter3ExerciseComponents/ImageExerciseScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    ComponentScreen: ComponentScreen,
    Chapter2ExerciseComponent: Chapter2ExerciseComponent,
    List: ListScreen,
    Chapter3ExerciseComponent: Chapter3ExerciseComponent,
    ImageScreen: ImageScreen,
    ImageExerciseScreen: ImageExerciseScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);

export default createAppContainer(navigator);
