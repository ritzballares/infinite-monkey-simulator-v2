const generateLetter = (char, charArray) => {
    // Generate a character(s) based on charLength
    let letter = '';

    while (letter != char) { 
        letter = charArray[Math.floor(Math.random() * charArray.length)];
    }

    return letter;
};


const startSimulation = (charArray, input) => {
    // toggle modal
    document.getElementById('submitButton').setAttribute("data-toggle", "modal");

    // start generating letters
    let sentence = '';
    let letter = '';
    let i = 0;

    // keep track of time
    let t0 = performance.now(); 

    while (sentence != input) {
        letter = generateLetter(input[i], charArray);
        sentence += letter;
        i++;
    }

    let t1 = performance.now();
    let totalTime = t1 - t0;

    // console.log(sentence);
    // console.log(`It took ${totalTime} ms`);

    // TO-DO:
    // After simulation, 
    // - replace GIF in modal with totalTime 
    // - replace title with "Success!"
    // - uncomment close buttons
    // - clear text field
}


const prepareSimulation = () => {
    // Get list of characters to be used as a reference
    let charArray = [];

    for (let i=32; i<127; i++){
        charArray.push(String.fromCharCode(i));
    }

    // get input from text field
    let input = document.getElementById('inputText').value;

    // Begin simulation
    startSimulation(charArray, input);
}