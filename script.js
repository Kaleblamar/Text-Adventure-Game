// Text Adventure Game

const enter = "Please enter 1 or 2 for your answer";
const GameOver = "sorry GAME OVER";
const start =
  "Welcome to the Ghostbusters Text Adventure Game. Click 'ok' to start the game.";

//Alert the use user to start the game
alert(start);

const q1 = `You are trying to catch a ghost called slimer at the Sedgwick hotel, but have not seen him yet. Should you....
1. Take the elevator to look on the 12th floor 
OR
2. Wait in the lobby to see if he shows up there
${enter}`;

const q2 = `You get off the elevator something startles you!
1. Run Away!
OR
2.Immediatly shoot with your proton pack`;

const q3 = `It was just the hotel maid. So you walk around to look for Slimer and you spot him! Should you...
1. Call to let the other Ghostbusters know you found him
2. Hide and wait to see where he goes.
${enter}`;

const q4 = `You see that Slimer goes into the ballroom so you quickly tel the other Ghostbusters and you all head in. You see him flying around when you walk in. should you...
1. Shoot at him with your proton pack
OR
2. Put two proton packs together to try to create a more powerful shot(aka Crossing the streams)
${enter}`;

const q5 = `You wrangled Slimer with your shot and the ghost trap is set underneath him. You noticed there is a bright light coming from the trap and are tempted to look at it. Should you...
1. Look at the trap
OR
2. Keep your focus on Slimer

${enter}`;

const win =
  "The ghost trap sucked Slimer in and closed. CONGRATS! YOU CAUGHT SLIMER!";

let userInput = prompt(q1);

const gameOver1 = `You never see Slimer so you give up on catching ghosts and become a talk show host ${GameOver}`;

const gameOver2 = `It was the hotel maid and you nearly killed her. You are asked to leave the hotel ${GameOver}`;

const gamerOver3 = `Slimer hears you, and you get slimed ${GameOver}`;

const gameOver4 = `All live as you know it stops instantaneously and every molecule in your body explodes at the speed of light.${GameOver}`;

const gameOver5 = `You looked at the trap and the light BLINDED YOU ${GameOver}`;

//Nested conditional statements

//1
if (userInput == 1) {
  console.log("This works Q1");
  userInput = prompt(q2);
  //2

  if (userInput == 1) {
    console.log("correct Q2");
    userInput = prompt(q3);

    //3
    if (userInput == 2) {
      console.log("correct q3");
      userInput = prompt(q4);
      //4
      if (userInput == 1) {
        console.log("correct q4");
        userInput = prompt(q5);
        //5
        if (userInput == 2) {
          alert(win);
        } else {
          alert(gameOver5);
        }
      } else {
        alert(gamerOver4);
        console.log("game over 4");
      }
    } else {
      alert(gamerOver3);
      console.log("game over 3");
    }
  } else {
    alert(gameOver2);
  }
} else {
  alert(gameOver1);
}
