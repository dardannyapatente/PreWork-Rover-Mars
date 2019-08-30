//=======================
// Step 1: Rover Object
// ======================
const theRover = {
    direction: 'N',
    x: 0,
    y: 0,
    travelLog: [{x:0,y:0}]
  };

  // ======================
  // Step 2: Turning the rover
  // ======================
  function turnLeft(rover){
    console.log("turnLeft was called.");

    switch(rover.direction){
      case 'N':
        rover.direction = 'W';
        console.log(`Rover is now facing West!`)
        break;
      case 'E':
        rover.direction = 'N';
        console.log(`Rover is now facing North!`)
        break;
      case 'S':
        rover.direction = 'E';
         console.log(`Rover is now facing East!`)
        break;
      case 'W':
        rover.direction = 'S';
         console.log(`Rover is now facing South!`)
        break;
    }
  };
  
  function turnRight(rover){
    console.log("turnRight was called.");
    
    switch(rover.direction){
      case 'N':
        rover.direction = 'E';
        console.log(`Rover is now facing East!`)
        break;
      case 'E':
        rover.direction = 'S';
        console.log(`Rover is now facing South!`)
        break;
      case 'S':
        rover.direction = 'W';
         console.log(`Rover is now facing West!`)
        break;
      case 'W':
        rover.direction = 'N';
         console.log(`Rover is now facing North!`)
        break;
    }
  };

  // =====================
  //Step 3: Moving forward (& Bonus 1: Boundaries)
  //======================
  function moveForward(rover){
    console.log("moveForward was called.");

    if(rover.x >= 0 && rover.x < 9 && rover.y >= 0 && rover.y < 9){
        switch(rover.direction){
            case 'N':
                rover.y--;
                break;
            case 'E':
                rover.x++;
                break;
            case 'S':
                rover.y++;
                break;
            case 'W':
                rover.x--;
                break;
        }
        let newCoordinates = {x: rover.x, y: rover.y};
        rover.travelLog.push(newCoordinates);
      
        console.log(`Rover's coordinates are: x=${rover.x} and y=${rover.y}.`);
    } else {
        console.log("You can't run the rover off of the grid!");
    }
  };

  //======================
  //Bonus 2: Moving backward
  //======================
  function moveBackward(rover){
    console.log("moveBackward was called.");

    if(rover.x > 0 && rover.x <= 9 && rover.y > 0 && rover.y <= 9){
        switch(rover.direction){
            case 'N':
                rover.y++;
                break;
            case 'E':
                rover.x--;
                break;
            case 'S':
                rover.y--;
                break;
            case 'W':
                rover.x++;
                break;
        }
        let newCoordinates = {x: rover.x, y: rover.y};
        rover.travelLog.push(newCoordinates);
      
        console.log(`Rover's coordinates are: x=${rover.x} and y=${rover.y}.`);
    } else {
        console.log("You can't run the rover off of the grid!");
    }
  };

  //======================
  //Step 4: Commands (& Bonus 2: Moving backward & Bonus 3: Validate inputs)
  //======================
  function command(rover, orders){
  // Forward = f; Backward = b; Right = r; Left = l
    for (let i = 0; i < orders.length; i++) {
      let order = orders[i];
      switch(order){
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
        default:
          console.log("Invalid rover command!")
          break;
      } 
    }
    showTracking(rover);
  };

  //=======================
  //Step 5: Tracking
  //=======================
  function showTracking(rover){
    for (let i = 0; i < rover.travelLog.length; i++){
    console.log(`Travel log ${i} ==> x=${rover.travelLog[i].x}, y=${rover.travelLog[i].y}`)
    }
  };
  
  //=======================
  //Invoke function
  //=======================
  command(theRover, 'rffrffbbl');