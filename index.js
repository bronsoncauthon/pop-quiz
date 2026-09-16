let score = 0;

let answerInput;
let answer;

answerInput = prompt(`What is better:
    [1] Cats
    [2] Dogs
    `);

answer = Number(answerInput);

if (answer > 2 || answer < 1) {
  alert(`You must answer with a "1" or "2"`);
} else if (Number.isNaN(answer)) {
  alert(`You must enter "1" or 2"`);
}

if (answer === 1) {
  alert("You are wrong :(");
} else if (answer === 2) {
  alert("You are correct and win a point! :)");
  score = score + 1;
}

answerInput = prompt(`What is a larger object?
    [1] Basketball
    [2] Baseball
    `);

answer = Number(answerInput);

if (answer > 2 || answer < 1) {
  alert(`You must answer with a "1" or "2"`);
} else if (Number.isNaN(answer)) {
  alert(`You must enter "1" or "2"`);
}

if (answer === 1) {
  alert("You are correct and win a point! :)");
  score = score + 1;
} else if (answer === 2) {
  alert("You are wrong :(");
}

answerInput = prompt(`What is the best drink ever?
    [1] Coffee
    [2] Soda
    `);

answer = Number(answerInput);

if (answer > 2 || answer < 1) {
  alert(`You must answer with a "1" or "2"`);
} else if (Number.isNaN(answer)) {
  alert(`You must enter "1" or "2"`);
}
if (answer === 2) {
  alert("You are wrong :(");
} else if (answer === 1) {
  alert("You are correct and win a point! :)");
  score = score + 1;
}

alert(
  `You have finished the quiz! Your score is ${score} out of 3! Thanks for playing!`,
);

if (score === 0) {
  alert("You failed!");
} else if (score === 1) {
  alert("At least you got 1!");
} else if (score === 2) {
  alert("Almost 100%!");
} else if (score === 3) {
  alert("Easy Peasy");
}
