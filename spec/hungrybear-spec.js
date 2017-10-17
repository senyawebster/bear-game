import { HungryBear } from './../js/hungrybear.js';

describe('HungryBear', function() {
  let fuzzy = new HungryBear("Fuzzy");

  beforeEach(function() {
    jasmine.clock().install();
    fuzzy.setHunger();
    fuzzy.setHappiness();
    fuzzy.setTiredness();
    fuzzy.foodLevel = 10;
    fuzzy.playLevel = 10;
    fuzzy.sleepLevel = 10;
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });


  it('should have a name and a food/play/sleep level of 10 when initialized', function() {
    expect(fuzzy.name).toEqual("Fuzzy");
    expect(fuzzy.foodLevel).toEqual(10);
    expect(fuzzy.playLevel).toEqual(10);
    expect(fuzzy.sleepLevel).toEqual(10);
  });


  it('should have a food/play/sleep level of 7 after 3001 milliseconds', function() {
    jasmine.clock().tick(3001);
    expect(fuzzy.foodLevel).toEqual(7);
    expect(fuzzy.playLevel).toEqual(7);
    expect(fuzzy.sleepLevel).toEqual(7);
  });


  it('should die if foodLevel drops below 1', function() {
    fuzzy.foodLevel = 0;
    expect(fuzzy.isAlive()).toEqual(false);
  });

  it('should die if playLevel drops below 1', function() {
    fuzzy.playLevel = 0;
    expect(fuzzy.isAlive()).toEqual(false);
  });

  it('should die if sleepLevel drops below 1', function() {
    fuzzy.sleepLevel = 0;
    expect(fuzzy.isAlive()).toEqual(false);
  });

  // it('should get very hungry if 10 seconds pass without feeding', function() {
  //   jasmine.clock().tick(10001);
  //   expect(fuzzy.didYouGetEaten()).toEqual(true);
  // });

  it('should have a food level of 11 if fed and no .tick', function() {
    jasmine.clock().tick(1000);
    fuzzy.play();
    expect(fuzzy.playLevel).toEqual(10);
  });

  // it('should have a foodLevel of +1 if it is fed', function() {
  //   jasmine.clock().tick(7001);
  //   fuzzy.feed();
  //   expect(fuzzy.foodLevel).toEqual(4);
  //   debugger:
  // });

  // add consideration for still being eaten if you feed Fuzzy after you got eaten, no born-again bear-feeders

});
