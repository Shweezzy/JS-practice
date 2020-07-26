function Planet(name) {
  this.name = name;
  this.getName = function () {
    return `Planet name is ${this.name}`
  }
};

function PlanetWithSatellite(name, satellite) {
  Planet.call(this, name);
  this.satellite = satellite;
  this.getName = function () {
    return `Planet name is ${name}. The satellite is ${this.satellite}`
  }
}

let earth = new PlanetWithSatellite('earth', 'moon');
// console.log(earth.getName())

// function Building(name, numberOfFloors) {

//   this.name = name;
//   this.numberOfFloors = numberOfFloors;

//   this.getNumberOfFloors = function () {
//     return `${this.numberOfFloors}`;
//   }
//   this.setNumberOfFloors = function (num) {
//     this.numberOfFloors = num;
//   }
// };

// function House(apartmentsPerFloor) {
//   Building.call(this, name);

//   this.apartmentsPerFloor = apartmentsPerFloor;
//   this.getNumbersOfFloors = function (floors) {
//    let a = b;
//     return a;
//   }


// }
// let test = new Building('peter', 'popkin');
// let as = new House(4)

// console.log(as.getNumberOfFloors())