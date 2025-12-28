import {
  shuffle,
  chunk,
  doArraysHaveSameValues,
} from "./utils";

function getAllWordsOfGameData({ gameData }) {
  const numCategories = gameData.length;
  let allWords = [];
  for (let i = 0; i < numCategories; i++) {
    if (gameData[i]?.words) {
      allWords.push(gameData[i].words);
    } else {
      allWords.push(gameData[i]);
    }
  }
  return allWords.flat();
}

export function shuffleGameData({ gameData }) {
  let categorySize;
  if (gameData[0]?.words) {
    categorySize = gameData[0].words.length;
  } else {
    categorySize = gameData[0].length;
  }

  const allWordsFlattened = getAllWordsOfGameData({ gameData });

  return chunk(categorySize, shuffle(allWordsFlattened));
}

export function isGuessCorrect({ gameData, guessCandidate, solvedCount }) {
  // Get the next category to assign (sequential based on how many solved)
  const nextCategoryIndex = solvedCount;
  const nextCategory = gameData[nextCategoryIndex];

  // If this is the final guess (3 categories already solved), auto-accept
  const isFinalGuess = solvedCount === gameData.length - 1;
  
  // Random chance-based correctness:
  // - 75% chance of correct
  // - 5% chance of "one away" (incorrect)
  // - 20% chance of incorrect
  const random = Math.random();

  if (isFinalGuess || random < 0.75) {
    // Correct! Assign the next sequential category
    return {
      isCorrect: true,
      correctWords: guessCandidate,
      correctCategory: nextCategory.category,
      isGuessOneAway: false,
      correctDifficulty: nextCategoryIndex + 1, // 1-based difficulty for colors
      correctImageSrc: null,
    };
  } else if (random < 0.80) {
    // Incorrect but "one away" (5% chance)
    return {
      isCorrect: false,
      correctWords: null,
      correctCategory: null,
      isGuessOneAway: true,
      correctDifficulty: null,
      correctImageSrc: null,
    };
  } else {
    // Incorrect (20% chance)
    return {
      isCorrect: false,
      correctWords: null,
      correctCategory: null,
      isGuessOneAway: false,
      correctDifficulty: null,
      correctImageSrc: null,
    };
  }
}

export function isGuessRepeated({ submittedGuesses, guessCandidate }) {
  for (let i = 0; i < submittedGuesses.length; i++) {
    const prevGuess = submittedGuesses[i];

    if (doArraysHaveSameValues(guessCandidate, prevGuess)) {
      return true;
    }
  }

  return false;
}

export function isGameDataEquivalent({ gd1, gd2 }) {
  if (gd1 == null || gd2 == null) {
    return false;
  }
  if (gd1.length !== gd2.length) {
    return false;
  }
  for (let i = 0; i < gd1.lengthl; i++) {
    if (!doArraysHaveSameValues(gd1.words[i], gd2.words[i])) {
      return false;
    }
  }
  return true;
}

export function isGuessesFromGame({ gameData, submittedGuesses }) {
  const allGameWordsFlattened = getAllWordsOfGameData({ gameData });
  const allGuessesFlattened = getAllWordsOfGameData({
    gameData: submittedGuesses,
  });

  if (submittedGuesses.length === 0) {
    return false;
  }

  const isSubset = allGuessesFlattened.every((val) =>
    allGameWordsFlattened.includes(val)
  );

  return isSubset;
}

export const generateEmojiGrid = (gameData, submittedGuesses) => {
  const wordToDifficultyMap = {};
  const tiles = getEmojiTiles();

  const numCategories = gameData.length;
  const allWords = [];
  for (let i = 0; i < numCategories; i++) {
    allWords.push(gameData[i].words);

    let difficulty = gameData[i].difficulty;
    gameData[i].words.map((word) => (wordToDifficultyMap[word] = difficulty));
  }

  const allEmojiRowsArray = [];

  for (let i = 0; i < submittedGuesses.length; i++) {
    const submittedGuess = submittedGuesses[i];

    let wordDifficultiesArray = submittedGuess.map(
      (word) => wordToDifficultyMap[word]
    );

    const emojiRowForGuess = wordDifficultiesArray
      .map((wordDifficulty) => {
        switch (wordDifficulty) {
          case 1:
            return tiles[0];
          case 2:
            return tiles[1];
          case 3:
            return tiles[2];
          case 4:
            return tiles[3];
        }
      })
      .join("");

    allEmojiRowsArray.push(emojiRowForGuess);
  }

  return `${allEmojiRowsArray.join("\n")}`;
};

export function getEmojiTiles() {
  let tiles = [];
  tiles.push("🟩");
  tiles.push("🟨");
  tiles.push("🟪");
  tiles.push("🟦");
  return tiles;
}
