/**
 * App starts from here.
 * Also Every things occur here.
 */

import React, { useState } from 'react';
import {
  Image, SafeAreaView,
  StatusBar,
  Text, View
} from 'react-native';
import { Directions, FlingGestureHandler, FlingGestureHandlerEventExtra, GestureHandlerStateChangeNativeEvent, TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './styles/Styles';
import { correct_coordinate } from './const/CorrectCoordinate';
import { image_array } from './const/ImageArray';
import HnadleFling from './functions/HandleFling';



const App = () => {


  /**
   * order of puzzles will defin here, we randomize the puzzle order with simple function
   */
  const [puzzle_order, setImage_order] = useState<number[]>(() => {
    let test: number[] = []
    // Creates a unique numbers between 0 & 9
    while (test.length < 9) {

      let r = Math.floor(Math.random() * 9);
      if (test.indexOf(r) === -1) test.push(r);
    }
    return test
  })

  /**
   * Then we create an array of tiles.
   * Every tiles has a 4 objects:
   * x coordinate (0 shows left, 2 shows right)
   * y coordinate (0 shows top, 2 shows bottom)
   * a for defining the miss tile
   * image for path of every tile's image
   */
  const [coordinate, setCoordinate] = useState([
    { x: 0, y: 0, a: 1, image: image_array[puzzle_order[0]] },
    { x: 1, y: 0, a: 2, image: image_array[puzzle_order[1]] },
    { x: 2, y: 0, a: 3, image: image_array[puzzle_order[2]] },
    { x: 0, y: 1, a: 4, image: image_array[puzzle_order[3]] },
    { x: 1, y: 1, a: 5, image: image_array[puzzle_order[4]] },
    { x: 2, y: 1, a: 6, image: image_array[puzzle_order[5]] },
    { x: 0, y: 2, a: 7, image: image_array[puzzle_order[6]] },
    { x: 1, y: 2, a: 8, image: image_array[puzzle_order[7]] },
    { x: 2, y: 2, a: 9, image: image_array[puzzle_order[8]] },
  ])






  /**
   * 
   * @param nativeEvent Get it from FlingGestureHandler
   * @param index index of touched tile
   * @param direction direction that user decides to move the tile
   */
  const _handleFling = (nativeEvent: GestureHandlerStateChangeNativeEvent & FlingGestureHandlerEventExtra, index: number, direction: 'right' | 'left' | 'up' | 'down') => {
    // Gets new coordinate from follow function
    const newCoordinate = HnadleFling(nativeEvent, index, direction, coordinate)
    // Then set it to coordinate, we should set it like follow to reRender the UI
    setCoordinate(
      prevState => {
        return [...newCoordinate];
      }
    )
  }
  /**
   * Correct the puzzle 
   */
  const CorrectIt = () => {
    // just set the coordinate to correct value
    setCoordinate(
      prevState => {
        return [...correct_coordinate];
      }
    )
  }


  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#CFCFCF'} />
      <SafeAreaView style={styles.safe_area}>
        <View style={styles.main_view}
        >
          {coordinate.map((value, index) => {
            return (
              <FlingGestureHandler
                key={index}
                direction={Directions.RIGHT}
                onHandlerStateChange={({ nativeEvent }) => {
                  _handleFling(nativeEvent, index, 'right')
                }}>
                <FlingGestureHandler
                  key={index}
                  direction={Directions.LEFT}
                  onHandlerStateChange={({ nativeEvent }) => {
                    _handleFling(nativeEvent, index, 'left')
                  }}>
                  <FlingGestureHandler
                    key={index}
                    direction={Directions.UP}
                    onHandlerStateChange={({ nativeEvent }) => {
                      _handleFling(nativeEvent, index, 'up')
                    }}>
                    <FlingGestureHandler
                      key={index}
                      direction={Directions.DOWN}
                      onHandlerStateChange={({ nativeEvent }) => {
                        _handleFling(nativeEvent, index, 'down')
                      }}>
                      <View style={[styles.tile, { left: value.x * 120, top: value.y * 120 }]}
                      >
                        {value.a !== 7 &&
                          <Image
                            style={styles.image}
                            source={value.image}
                          />
                        }
                      </View>

                    </FlingGestureHandler>
                  </FlingGestureHandler>
                </FlingGestureHandler>
              </FlingGestureHandler>
            )
          })}


        </View>
        <TouchableOpacity
          style={styles.correct_button}
          onPress={CorrectIt}>
          <Text style={styles.button_title}>{'Correct It'}</Text>
        </TouchableOpacity>

      </SafeAreaView>
    </>
  );
};



export default App;
