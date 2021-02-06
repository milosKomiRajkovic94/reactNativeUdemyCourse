"# reactNativeUdemyCourse"

# REACT NATIVE UDEMY COURSE WORKSPACE

## First chapter

Just a small introduction into **_setting up environment, GitBash, setting up starter app, how to join community of people following RallyCoding courses etc._** on different operating systems.

## Second chapter

**_createStackNavigator_** -> object which handles navigation of the App;

**_Text_** -> A primitive React element. Uset to show some basic content on the screen;

**_View_** -> General purpose element used for grouping other elements or styles;

**_Button_** -> Show a button the user can press. Give us some feedback wherever the user presses it;

**_appNavigator_** -> It's a tool from a library called "React Navigation" that is used to show different screens to a user;

Primary elements have built in props like styles etc.

**Can't show JavaScript object inside Text element.**

**Can't open brackets in new line.**

## Third chapter

**_FlatList Element_**

-Turns an array into a list of elements.

-We are required to pass in a 'prop' of 'data' - the array of data that we are going to create a bunch of elements out of.

-Also, required to pass in a 'renderItem' prop function that will turn each individual item into an element.

-If you are coming from React on the web you might be used to 'mapping' an array of data to build a list - FlatList is better than RN.

-Key must be a string and unique.

**_marginVertical_** - vertical space between elements.

**_horizontal_** - render items horizontally.

**_showHorizontalScrollIndicator_** - hides horizontal scroll.

## Fourth chapter

**_Button_** - Very simple component for showing button and detecting a press event.

It is a self closing element.
title: text of the button;
onPress: onClick event of the web;

**_TouchableOpacity_** - Highly customizable component that can detect a press on just about any kind of element.

Not self-closing element.
onPress: onClick event of the web;

-Every component in the first block of createStackNavigatior function has props.navigation.navigate("nameOfTheComponent") which helps us to navigate to the certain component.

## Fifth chapter

**_Building Reusable Components_**

-Same group of elements, repeated three times.

-We could repeat the same JSX three times or we could create a seperate component.

-Image can be shown in Image element from a prop source.
