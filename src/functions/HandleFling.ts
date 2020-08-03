/**
 * Detects the movement direction and according to every tile's coordinate defines suitable value.
 */
import { State, GestureHandlerStateChangeNativeEvent, FlingGestureHandlerEventExtra } from "react-native-gesture-handler";
/**
 * 
 * @param nativeEvent from GestureHandler
 * @param index index of touched tile
 * @param direction direction of tile 
 * @param prevCoordinate previous coordinate before movement
 */
const HnadleFling = (nativeEvent: GestureHandlerStateChangeNativeEvent & FlingGestureHandlerEventExtra, index: number, direction: 'right' | 'left' | 'up' | 'down', prevCoordinate: any[]) => {
    let newState = prevCoordinate;
    // First checks to touched tile not be the missed one.
    if (nativeEvent.oldState === State.ACTIVE && prevCoordinate[index].a !== 7) {
        const x = prevCoordinate[index].x;
        const y = prevCoordinate[index].y;
        let freeSpace: number = -1;
        // According to direction we decide to calculate new coordinate of the touched tile
        switch (direction) {
            case 'right':
                // for  'right' direction we add one point to x object
                const rightX = prevCoordinate[index].x + 1
                //find coordinate of missed tile with follow
                freeSpace = prevCoordinate.findIndex((value) => {
                    if (value.x === rightX && value.y === prevCoordinate[index].y) {
                        return value
                    }
                })
                break;
            case 'left':
                // for  'left' direction we minus one point to x object
                const leftX = prevCoordinate[index].x - 1
                //find coordinate of missed tile with follow
                freeSpace = prevCoordinate.findIndex((value) => {
                    if (value.x === leftX && value.y === prevCoordinate[index].y) {
                        return value
                    }

                })
                break;
            case 'up':
                // for  'up' direction we add one point to y object
                const upY = prevCoordinate[index].y - 1
                //find coordinate of missed tile with follow
                freeSpace = prevCoordinate.findIndex((value) => {
                    if (value.y === upY && value.x === prevCoordinate[index].x) {
                        return value
                    }
                })
                break;
            case 'down':
                // for  'down' direction we minus one point to y object
                const downY = prevCoordinate[index].y + 1
                //find coordinate of missed tile with follow
                freeSpace = prevCoordinate.findIndex((value) => {
                    if (value.y === downY && value.x === prevCoordinate[index].x) {
                        return value
                    }
                })

        }
        // At the end, we check if the movement is to correct place(missed tile)
        // the we apply the movement
        if (freeSpace > 0 && prevCoordinate[freeSpace].a === 7) {
            // we replace the touched tile's coordinate with missed tile and also
            // replace missed tile coordinate with touched one
            newState[index].x = prevCoordinate[freeSpace].x
            newState[index].y = prevCoordinate[freeSpace].y
            newState[freeSpace].x = x
            newState[freeSpace].y = y

        }
    }
    return newState

}

export default HnadleFling