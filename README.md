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

## Sixth chapter

**_State Management in React_**

**_Props_**: System to pass data from parent to child

**_State_**: System to track a piece of data that will change over time. If that data changes our app will 'rerender'.

We should always ask ourselves three questions:

1. What piece of data is changing in our app?

2. What type of data is it?

3. What is the data's starting (default) value?

Array decostructing with react hook _useState_:

> const [counter, setCounter] = useState(0);

Every component has it's own piece of state.

To push into array do for example:

> setColors([...colors, randomRgb()])

If we are using string injectulation we need to use curly braces (e.g {`Increase ${color}`})

Generally, we create state variables in the most parent component that needs to read or change a state value.

**_Reducers_**

Function that gets called with two objects.

Arguemnt #1 - object that has _all of our state in it_.

Argument #2 - object that describes the update we want to make.

We look at Argument #2 and use it to decide how to change Argument #1.

Two technicalities:

**_(1) We never change Argument #1 directly._**

**_(2) We must always return a value to be used as Argument #1._**

> const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0})

Community convention is:

> {type: 'change_red', payload: 15}

**_type_** -> string that describe the exact change operation we want to make;

**_payload_** -> some data that is critical to the change operation;

_CounterScreen.js component_ was changed as one of the practice for this chapter. Instead of using useState we used useReducer;

**_TextInput_** - Element for inserting of text.

AutoCorrect is automatic for iOS and for Android it's not.

_autoCapitalize_ prop - "characters", "none", "sentences", "words";

_autoCorrect_ prop - default is true;

## Seventh chapter

**_Layout Systems_**

**_Box Object Model_**:

The height / width of an element + the space around it
|
|
|
V
Use this to affect the positioning of a single element

**_Flex Box_**:

How some number of sibling elements get laid out inside a parent
|
|
|
V
Use this to position multiple elements with a common parent

**_Position_**:

How a single element gets laid out inside of a parent
|
|
|
V
Use this to override Box Object Model + Flex Box

**_margin_**: Set the margin on all sides;

**_marginVertical_**: Set the margin on top and bottom;

**_marginHorizontal_**: Set the margin on left and right;

**_padding_**: Set the padding on all sides;

**_paddingVertical_**: Set the padding on top and bottom;

**_paddingHorizontal_**: Set the padding on left and right;

**_borderWidth_**: Set border width on all sides;

**_alignItems_**: 'flex-start': align items as much as they can on left side / on top (depending on horizontal / vertical aligment);
'center': align items on the center;
'flex-end': align items as much as they can on right side / on bottom (depending on horizontal / vertical aligment);

**_flexDirection_**: controls whether the items are aligned on the columns or the row;

**_flex_**: number on the certain child determines how much space it is going to have. The greater the number the longer is space;

**_Parent_**: alignItems;
justifyContent;
flexDirection;

**_Child_**: flex;
alignSelf;

**_position_**: 'relative': default initial position;
'absolute': ignored by siblings, still obeys some flex box rules set by parents;

**_-Absolute fill objects_**:
position: 'absolute',
bottom: 0,
top: 0,
left: 0,
right: 0,

Apply box object model rules
|
|
V
Is position 'absolute'
|
|
V

---

No  
 |  
 |  
 V  
Apply all flex box rules, considering siblings  
 |  
 |  
 V  
Place element inside parent  
 |
|
V
Apply top, left, right, bottom

---

             Yes
               |
               |
               V

Apply some flex box rules, ignore all siblings
|
|
V
Apply top, left, right, bottom


## Eight chapter

**_The way to start project_**

Either by using:

**_expo-cli_**: adds in a tone of default config to use features common in apps, like icons, video, better camera use, etc.

**_react-native-cli_**: default CLI to generate a project. Requires a lot of extra work to add in common features.

The way we can use navigator object is like:
1. StackNavigator (icon for returning back or link to the next page)
2. BottomTabNavigator (footer menu)
3. DrawerNavigator (Sidebar)

Either use npm or yarn you can't use them both or interchangably. 

Navigator object is created by createStackNavigator function from "react-navigation-stack" library and additional options, in form of separate object which can be added are following for example:

`
const navigator = createStackNavigator({
  Search: SearchScreen //NameOfThePage: ComponentOfThePage
}, {
  initialRouteName: 'Search', //What should be default page
  defaultNavigationOptions: {
    title: 'BusinessSearch' //Default header navigation title
  }
});
`

Icons similar to simple-line-icons but compatible with react-native can be found on the following link: https://github.com/expo/vector-icons and https://icons.expo.fyi/ .

## Ninth chapter

Two most popular libraries for API calls are:

**_fetch_**: 

-Built in function for making network requests.

-Error handling is a bit weird.

-Requires us to write a lot of wrapper code to make it work 'sensibly'.

**_axios_**:

-Separate library for making requests.

-Easy to use, sensible defaults.

-Increases our app size (very, veryu slightly).

## Tenth chapter

We can create customm hooks and return in [] what we need back, perfect example is useResults.js:

```
import { useEffect, useState } from 'react';

import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        try{
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
        }catch(err){
            setErrorMessage('Something went wrong');
        }
    }

    useEffect(() => {
        searchApi('pasta');
    }, []);

    return [searchApi, results, errorMessage];
}; 
```

## Eleventh chapter

-Image will not be seen unless width and height are added.

-showsHorizontallScrollerIndicator = {false} - ako ne želimo da prikažemo scroller;

-TouchableOpacity - gives an effect to the user that he selected something;

-navigation.navigate("nameOfTheScreen") - to navigate on the certain page;

-withNavigation from "react-navigation" is a wrapper component which wraps the component and let it receives the prop navigation. 

-Second {} in navigate function are passed params like id. e.g. navigation.navigate("nameOfThePage", {id: });

-navigation.getParam("nameOfParam") is the way we are passing param to the child component once inside a child component.

## Twelfth  chapter

*__props__*:

Communicates information from a parent directly down to a child.

Easy to setup.

To communicate data down multiple layers, we have to write a lot of code.

*__context__*:

Moves information from a parent to some nested child.

Complicated to setup, lots of special terms.

Easy to communicate data from a parent to a super child.


-Context should be created inside a folder src/context

-value: information we want to share.

-Object can't be rendered correctly.

-Context usual structure, e.g:

{data: blogPosts, addBlogPost: () => {}}


*__Navigation options of a certain screen can be changed as follows, e.g:__* 

```
IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    ),
  };
};
```
*__defaultProps__* : should be used if some screen isn't reaciving anything to the child component
and  it is a built-in function of React so you don't need to install prop-types for that.
