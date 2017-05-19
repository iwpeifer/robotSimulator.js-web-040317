'use strict';

class Robot {
  constructor(bearing="north"){
    this.bearing = bearing
    this.coordinates = [0, 0]
  }

  orient(direction){
    if (direction === 'north' || direction === 'south' || direction === 'east' || direction === 'west'){
      this.bearing = direction
    } else {
      throw new Error("Invalid Robot Bearing")
    }
  }

  turnRight(){
    if (this.bearing === 'north'){
      this.bearing = 'east'
    } else if (this.bearing === 'east'){
      this.bearing = 'south'
    } else if (this.bearing === 'south'){
      this.bearing = 'west'
    } else {
      this.bearing = 'north'
    }
  }

  turnLeft(){
    if (this.bearing === 'north'){
      this.bearing = 'west'
    } else if (this.bearing === 'west'){
      this.bearing = 'south'
    } else if (this.bearing === 'south'){
      this.bearing = 'east'
    } else {
      this.bearing = 'north'
    }
  }

  at(x, y){
    this.coordinates = [x, y]
    return this.coordinates
  }

  advance(){
    if (this.bearing === 'north'){
      this.coordinates[1] += 1
    } else if (this.bearing === 'east'){
      this.coordinates[0] += 1
    } else if (this.bearing === 'south'){
      this.coordinates[1] -= 1
    } else {
      this.coordinates[0] -= 1
    }
  }

  instructions(string){
    let new_array = []
    for (let i = 0; i < string.length; i++){
      if (string[i] === "R"){
        new_array.push('turnRight')
      } else if (string[i] === 'L'){
        new_array.push('turnLeft')
      } else if (string[i] === 'A'){
        new_array.push('advance')
      } else {
        throw new Error("Invalid")
      }
    }
    return new_array
  }

  evaluate(string){
    for(let i = 0; i < string.length; i++){
      if (string[i] === 'L'){
         this.turnLeft()
      } else if (string[i] === 'R'){
         this.turnRight()
      } else if (string[i] === 'A'){
         this.advance()
      } else {
        throw new Error("Invalid")
      }
    }
  }

    place(object){
      this.coordinates = [object.x, object.y]
      this.bearing = object.direction
    }

}
