const generateLetter = (charLength) => {
    // Generate a character(s) based on charLength
    let sentence = '';
    let chars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' '];

    for (let i = 0; i < charLength.length; i++) {
        console.log('running');
        let letter = chars[Math.floor(Math.random() * chars.length)];
        sentence = sentence + letter;
    }

    console.log(sentence);
    return sentence;
};

