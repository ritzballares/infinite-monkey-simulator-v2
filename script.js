const generateLetter = (charLength) => {
    // Generate a character(s) based on charLength
    let sentence = '';
    let chars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' '];

    for (let i = 0; i < charLength; i++) {
        let letter = chars[Math.floor(Math.random() * chars.length)];
        sentence = sentence + letter;
    }

    return sentence;
};


const calculateScore = (monkeyString, goalString) => {
    // Keeps track of the score which is based on the number of correct matches with monkeyString and goalString
    // monkeyString = the generated set of characters
    // goalString = the set of characters that we want to reproduce

    let score = 0;

    // Check each character if they match. If not, return score
    for (let i = 0; i < goalString.length; i++) {
        if (monkeyString[i] === goalString[i]) {
            score = score + 1;
        }
        else {
            return score;
        }
    }

    return score;
}
