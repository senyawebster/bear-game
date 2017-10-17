export class HungryBear {

  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
    this.playLevel = 10;
    this.sleepLevel = 10;
  }

  isAlive() {
    if (this.foodLevel < 1 || this.playLevel < 1 || this.sleepLevel < 1) {
      return false;
    } else {
      return true;
    }
  }

  setHunger() {
    setInterval(() => {this.foodLevel -= 1;
    }, 1000);
  }

  setHappiness() {
    setInterval(() => {this.playLevel -= 1;
    }, 1000);
  }

  setTiredness() {
    setInterval(() => {this.sleepLevel  -= 1;
    }, 1000);
  }

  feed(){
    this.foodLevel += 1;
  }

  play(){
    this.playLevel += 1;
  }

  sleep(){
    this.sleepLevel += 1;
  }
}
