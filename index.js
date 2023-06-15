// Iteration 1: Names and Input
let hacker1 = "John";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Raymond";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
}
if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops
//3.1
const upperCaseName = hacker1.toUpperCase();
console.log(upperCaseName);
let driverNewChar = "";

for (let charIndex = 0; charIndex < upperCaseName.length; charIndex += 1) {
  driverNewChar += upperCaseName[charIndex];

  if (charIndex + 1 < upperCaseName.length) {
    driverNewChar += " ";
  }
}
console.log(driverNewChar);

//3.2
let nameReverse = "";
for (let reverseIndex = hacker2.length - 1; reverseIndex >= 0; reverseIndex--) {
  nameReverse += hacker2[reverseIndex];
}
console.log(nameReverse);

//3.3

let hacker1lexOrder;
let hacker2lexOrder;
for (let hacker1Index = 0; hacker1Index < hacker1.length; hacker1Index += 1) {
  hacker1lexOrder = hacker1[hacker1Index];
}
for (let hacker2Index = 0; hacker2Index < hacker2.length; hacker2Index += 1) {
  hacker2lexOrder = hacker2[hacker2Index];
}
if (hacker1lexOrder < hacker2lexOrder) {
  console.log("The driver's name goes first.");
} else if (hacker2lexOrder < hacker1lexOrder) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus 1

let longText = "";

for (let textIndex = 0; textIndex < 3; textIndex += 1) {
  if (textIndex === 0) {
    longText += "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ";
  } else if (textIndex === 1) {
    longText +=
      "Etiam auctor sagittis tristique. Etiam feugiat sagittis libero, in pellentesque lacus fermentum et. ";
  } else {
    longText +=
      "Etiam ac aliquam est. Vivamus lobortis, lectus non cursus ultrices, dui metus sagittis felis, et pellentesque justo libero eu sem. ";
  }
}

let words = longText.split(" ");
let wordCount = words.length;

let countEt = 0;

for (let countEtIndex = 0; countEtIndex < words.length; countEtIndex += 1) {
  if (words[countEtIndex].toLowerCase() === "et") {
    countEt++;
  }
}

console.log(`Word count: ${wordCount}`);
console.log(`occurences 'et': ${countEt}`);

// Bonus 2

function Palindrome(str) {
  let charConvert = "";
  for (
    let charConvertIndex = 0;
    charConvertIndex < str.length;
    charConvertIndex++
  ) {
    const char = str[charConvertIndex];
    if (
      (char >= "a" && char <= "z") ||
      (char >= "A" && char <= "Z") ||
      (char >= "0" && char <= "9")
    ) {
      charConvert += char.toLowerCase();
    }
  }

  for (
    let strIndex = 0;
    strIndex < Math.floor(charConvert.length / 2);
    strIndex++
  ) {
    if (
      charConvert[strIndex] !== charConvert[charConvert.length - 1 - strIndex]
    ) {
      return false;
    }
  }

  return true;
}

//tests whether..
let phraseCheck = "A man, a plan, a canal, Panama!";
if (Palindrome(phraseCheck)) {
  console.log(`"${phraseCheck}" is a palindrome.`);
} else {
  console.log(`"${phraseCheck}" is not a palindrome.`);
}

phraseCheck = "Ironhack, Javascript";
if (Palindrome(phraseCheck)) {
  console.log(`"${phraseCheck}" is a palindrome.`);
} else {
  console.log(`"${phraseCheck}" is not a palindrome.`);
}
