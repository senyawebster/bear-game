export class HungryBear {

  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
    this.playLevel = 10;
    this.sleepLevel = 10;
  }

  // add consideration for still being eaten if you feed Fuzzy after you got eaten, no born-again bear-feeders

  isAlive() {
    if (this.foodLevel < 1 || this.playLevel < 1 || this.sleepLevel < 1) {
      return false;
    } else {
      return true;
    }
  }

  setHunger() {
    setInterval(() => {this.foodLevel--;
    }, 1000);
  }

  setHappiness() {
    setInterval(() => {this.playLevel--;
    }, 1000);
  }

  setTiredness() {
    setInterval(() => {this.sleepLevel--;
    }, 1000);
  }

  // didYouGetEaten() {
  //   if (this.foodLevel > 0) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }

  feed(){
    this.foodLevel = this.foodLevel += 1;
  }

  play(){
    this.playLevel = this.playLevel += 1;
  }

  sleep(){
    this.sleepLevel= this.sleepLevel += 1;
  }
}
