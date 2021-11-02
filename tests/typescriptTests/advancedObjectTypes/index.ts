import { getObstacleEvents } from './computer-vision';

interface AutonomousCar {
  isRunning?:boolean;
  respond: (event: Events) => void;
}

interface AutonomousCarProps {
  isRunning?:boolean;
  steeringControl: Steering;
}

interface Events {
  [param: string]: boolean;
}

interface Control {
  execute: (command: string) => void;
}

interface Steering extends Control {
  turn: (direction: string) => void;
}

class Car implements AutonomousCar {
  isRunning;
  steeringControl;
  constructor(props: AutonomousCarProps) {
    this.isRunning = props.isRunning;
    this.steeringControl = props.steeringControl;
  }

  respond(events: Events): void {
    events.keys().forEach((event) => {
      if (event === false) {
        return ;
      } else if (event.param === 'ObstacleLeft'){
        this.steeringControl.turn('right');
      } else if (event.param === 'ObstacleRight') {
        this.steeringControl.turn('left');
      }
    });
    if (this.isRunning !== true) {
      console.log('The car is off');
    }
  }
}

class SteeringControl implements Steering {
  execute(command: string): void {
    console.log("Executing: " + command);
  }

  turn(direction: string): void {
    direction = "turn " + direction;
    this.execute(direction);
  }
}

let steering = new SteeringControl;
let autonomousCar = new Car({ isRunning: false, steeringControl: steering });

autonomousCar.respond(getObstacleEvents());
steering.turn('right'); 
