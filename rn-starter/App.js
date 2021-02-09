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

/* Fifth chapter */
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';
import TextScreen from './src/screens/TextScreen';
import Chapter6ExerciseComponents from './src/exercises/Chapter6ExerciseComponents';

/* Sixth screen */
import BoxScreen from './src/screens/BoxScreen';

/* Seventh screen */
import Chapter7ExerciseComponents from './src/exercises/Chapter7ExerciseComponents';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    ComponentScreen: ComponentScreen,
    Chapter2ExerciseComponent: Chapter2ExerciseComponent,
    List: ListScreen,
    Chapter3ExerciseComponent: Chapter3ExerciseComponent,
    ImageScreen: ImageScreen,
    ImageExerciseScreen: ImageExerciseScreen,
    CounterScreen: CounterScreen,
    ColorScreen: ColorScreen,
    SquareScreen: SquareScreen,
    TextScreen: TextScreen,
    Chapter6ExerciseComponents: Chapter6ExerciseComponents,
    BoxScreen: BoxScreen,
    Chapter7ExerciseComponents: Chapter7ExerciseComponents
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);

export default createAppContainer(navigator);
