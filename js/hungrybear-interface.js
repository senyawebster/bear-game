import { HungryBear } from './../js/hungrybear.js';

$(document).ready(function(){

  $('#foodButton').hide();
  $('#playButton').hide();
  $('#sleepButton').hide();

  $('#startButton').click(function(event){
    event.preventDefault();
    $('#startButtonRow').hide();
    $('#foodButton').show();
    $('#playButton').show();
    $('#sleepButton').show();
    let name = window.prompt('Name your Hungry Bear');
    let bear = new HungryBear(name);
    $('span#bearName').text(`${bear.name} the `);

    bear.setHunger();
    bear.setHappiness();
    bear.setTiredness();

    let countdown = setInterval(function() {
      $('span#foodLevel').text(bear.foodLevel);
      $('span#playLevel').text(bear.playLevel);
      $('span#sleepLevel').text(bear.sleepLevel);
      if(!bear.isAlive()) {
        alert(`${bear.name} is dead`);
        clearInterval(countdown);
        $('#startButtonRow').show();
      }
    }, 1000);

    $('#foodButton').click(function(){
      bear.feed();
      $('span#foodLevel').text(bear.foodLevel);
    });

    $('#playButton').click(function(){
      bear.play();
      $('span#playLevel').text(bear.playLevel);
    });

    $('#sleepButton').click(function(){
      bear.sleep();
      $('span#sleepLevel').text(bear.sleepLevel);
    });
  });
});
