"use strict";
const scored = ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"];
const odds = {
  team1: 1.33,
  x: 3.25,
  team2: 6.5,
};
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: scored,
  date: "Nov 9th, 2037",
  odds: odds,
};

for (const [i, el] of game.scored.entries()) {
  console.log(`goal ${i + 1} :${el}`);
}
//to calculate the average we should calculate the some and devide it with the total num
let average = Object.values(game.odds);
let sum = 0;
for (let numbers of average) {
  sum += numbers;
}
let totaleAverage = sum / average.length;
console.log(totaleAverage);

let entriesoftheodds = Object.entries(odds);
console.log(entriesoftheodds);
