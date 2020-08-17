const generateLetter = (char, charArray) => {
    // Generate a character(s) based on charLength
    let letter = '';

    while (letter != char) { 
        letter = charArray[Math.floor(Math.random() * charArray.length)];
    }

    return letter;
};

const finishSimulation = (totalTime) => {
    // TO-DO:
    // After simulation, 
    // - replace GIF in modal with totalTime
    setTimeout(function() {
        replaceModalContent(totalTime);
    }, 3000);
    // - replace title with "Success!"
    // - uncomment close buttons
    // - reset everything when user clicks on close button


}

const replaceModalContent = (totalTime) => {
    // ------------- modal header -------------------
    // New node
    let modalHeader = document.createElement('h5');
    modalHeader.id = "modalHeaderId"
    let modalHeaderContent = document.createTextNode("Success!");
    modalHeader.appendChild(modalHeaderContent);

    // Existing node
    let existingHeaderContent = document.getElementById("userPrompt");
    let headerParentDiv = existingHeaderContent.parentNode;

    // Replace header content
    headerParentDiv.replaceChild(modalHeaderContent, existingHeaderContent);

    // -------------- modal body --------------------
    // New node
    let spTotalTime = document.createElement("span");
    spTotalTime.id = "monkeyTotalTime";
    let spTotalTimeContent = document.createTextNode("It took " + totalTime + " ms to reproduce the provided text.");
    spTotalTime.appendChild(spTotalTimeContent);

    // Existing node
    let gifFrame = document.getElementById("gifFrame");
    let parentDiv = gifFrame.parentNode;

    // Replace content
    parentDiv.replaceChild(spTotalTimeContent, gifFrame);
}

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

    finishSimulation(totalTime);
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