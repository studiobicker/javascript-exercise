// Rover Object
// ======================
var rover = {
  direction: 'N',
  xPos: 0,
  yPos: 0,
  travelLog: []
}

// Mars, a 10 x 10 grid
// ======================
var mars = [
  [null, null, null, null, null, null, null, null, null, null ],
  [null, null, null, null, null, null, null, null, null, null ],
  ['X', null, null, null, null, null, null, null, null, null ],
  [null, null, null, null, null, null, null, null, null, null ],
  [null, null, null, null, null, null, null, null, null, null ],
  [null, null, null, null, null, null, null, null, null, null ],
  [null, null, null, null, null, null, null, null, null, null ],
  [null, null, null, null, null, null, null, null, null, null ],
  [null, null, null, null, null, null, null, null, null, null ],
  [null, null, null, null, null, null, null, null, null, null ]
];

// ======================
function turnLeft(rover){
  
  switch (rover.direction) {
    case 'N':
      rover.direction ='W';
      console.log('Rover turns left towards ' + rover.direction );
      break;
    case 'W':
      rover.direction = 'S';
      console.log('Rover turns left towards ' + rover.direction );
      break;
    case 'S':
      rover.direction = 'E';
      console.log('Rover turns left towards ' + rover.direction );
      break;
    case 'E':
      rover.direction = 'N';
      console.log('Rover turns left towards ' + rover.direction );
      break;
  }
}

function turnRight(rover){

  switch (rover.direction) {
    case 'N':
      rover.direction ='E';
      console.log('Rover turns right towards ' + rover.direction );
      break;
    case 'E':
      rover.direction = 'S';
      console.log('Rover turns right towards ' + rover.direction );
      break;
    case 'S':
      rover.direction = 'W';
      console.log('Rover turns right towards ' + rover.direction );
      break;
    case 'W':
      rover.direction = 'N';
      console.log('Rover turns right towards ' + rover.direction );
      break;
  }
}

function moveForward(rover){

  switch (rover.direction) { 
    case 'N':
      if (rover.yPos>0 && !hitObstacle(rover.xPos,rover.yPos-1)) {
        rover.yPos--;
        writeTravelLog(rover);
        console.log('Rover moves forward [' + rover.xPos + ',' + rover.yPos + ']');
        //console.log('Rover moves forward to (' + rover.xPos + ','+ rover.yPos +')');
      } else {
        console.log('Rover can\'t move forward');
      }
      break;
    case 'E':
      if (rover.xPos<9 && !hitObstacle(rover.xPos+1,rover.yPos)) {
        rover.xPos++;
        writeTravelLog(rover);
        console.log('Rover moves forward [' + rover.xPos + ',' + rover.yPos + ']');
        //console.log('Rover moves forward to (' + rover.xPos + ','+ rover.yPos +')');
      } else {
        console.log('Rover can\'t move forward');
      }
      break;
    case 'S':
      if (rover.yPos<9 && !hitObstacle(rover.xPos,rover.yPos+1)) {
        rover.yPos++;
        writeTravelLog(rover);
        console.log('Rover moves forward [' + rover.xPos + ',' + rover.yPos + ']');
        //console.log('Rover moves forward to (' + rover.xPos + ','+ rover.yPos +')');
      } else {
        console.log('Rover can\'t move forward');
      }
      break;
    case 'W':
      if (rover.xPos>0 && !hitObstacle(rover.xPos-1,rover.yPos)) {
        rover.xPos--;
        writeTravelLog(rover);
        console.log('Rover moves forward [' + rover.xPos + ',' + rover.yPos + ']');
        //console.log('Rover moves forward to (' + rover.xPos + ','+ rover.yPos +')');
      } else {
        console.log('Rover can\'t move forward');
      }
      break;
  } 
}

function moveBackward(rover){
  switch (rover.direction) {
    case 'N':
      if (rover.yPos<9 && !hitObstacle(rover.xPos,rover.yPos+1)) {
        rover.yPos++;
        writeTravelLog(rover);
        console.log('Rover moves backward [' + rover.xPos + ',' + rover.yPos + ']');
      } else {
        console.log('Rover can\'t move backward');
      }
      break;
    case 'E':
      if (rover.xPos>0 && !hitObstacle(rover.xPos-1,rover.yPos)) {
        rover.xPos--;
        writeTravelLog(rover);
        console.log('Rover moves backward [' + rover.xPos + ',' + rover.yPos + ']');
      } else {
        console.log('Rover can\'t move backward');
      }
      break;
    case 'S':
      if (rover.yPos>0 && !hitObstacle(rover.xPos,rover.yPos-1)) {
        rover.yPos--;
        writeTravelLog(rover);
        console.log('Rover moves backward [' + rover.xPos + ',' + rover.yPos + ']');
      } else {
        console.log('Rover can\'t move backward');
      }
      break;
    case 'W':
      if (rover.xPos<9 && !hitObstacle(rover.xPos+1,rover.yPos)) {
        rover.xPos++;
        writeTravelLog(rover);
        console.log('Rover moves backward [' + rover.xPos + ',' + rover.yPos + ']');
      } else {
        console.log('Rover can\'t move backward');
      }
      break;
  }
}

function moveAround(commandList) {
  clearTravelLog(rover);
  var isValid = isValidCommandList(commandList);

  if (isValid) {
    for(i=0;i<commandList.length;i++) {
      switch (commandList[i]) {
        case 'f':
          moveForward(rover);
          break;
        case 'b':
          moveBackward(rover);
          break;
        case 'r':
          turnRight(rover);
          break;
        case 'l':
          turnLeft(rover);
          break;
      }
    }
    printTravelLog(rover);
  }
}

function clearTravelLog (rover) {
  rover.travelLog = [];
}

function writeTravelLog(rover) {
  rover.travelLog.push([rover.xPos,rover.yPos]);
}

function printTravelLog(rover) {
  for (i=0; i<rover.travelLog.length;i++) {
    console.log('Position: '+ rover.travelLog[i]);
  }
}

function isValidCommandList(cl) {
  for (i=0; i < cl.length; i++) {
    if ( cl[i]==='l' || cl[i]==='r' || cl[i]==='f' || cl[i]==='b') {
      continue;
    } else {
      console.log("The list of commands contains an invalid character. Commands must be 'l', 'r', 'f' or 'b'");
      return false;
    }
  }
  return true;
}

function hitObstacle(x,y){
  var nextPosition = mars[x][y];
  if (nextPosition === null ) {
    return false;
  } else {
    console.log('Rover has hit an obstacle and can\'t move');
    return true;
  }
} 