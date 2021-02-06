/* 
    Exercise from chapter 4

Add in a new prop to be passed from ImageScreen to ImageDetail.

This props should indicate a 'score' for the image. Make sure you give the prop an appropriate name!

Show the image score under the image in a new Text element.

*/

import React from 'react';

import {
    View,
    StyleSheet
} from 'react-native';

import ImageExerciseDetail from './ImageExerciseDetail';

const ImageExerciseScreen = () => {
    return(
        <View>
            <ImageExerciseDetail title="Forest" imageSource={require('../../../assets/beach.jpg')} imageScore={9} />
            <ImageExerciseDetail title="Mountain" imageSource={require('../../../assets/forest.jpg')} imageScore={7} />
            <ImageExerciseDetail title="Beach" imageSource={require('../../../assets/mountain.jpg')} imageScore={4} />
        </View>
    )
};

const styles = StyleSheet.create({});

export default ImageExerciseScreen;