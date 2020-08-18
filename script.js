const generateLetter = (char, charArray) => {
    // Generate a character(s) based on charLength
    let letter = '';

    while (letter != char) { 
        letter = charArray[Math.floor(Math.random() * charArray.length)];
    }

    return letter;
};

const finishSimulation = (totalTime) => {
    setTimeout(function() {
        replaceModalContent(totalTime);
    }, totalTime + 3000);
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
    headerParentDiv.replaceChild(modalHeader, existingHeaderContent);

    // -------------- modal body --------------------
    // New node
    let spTotalTime = document.createElement("p");
    let spTotalTimeContent = document.createTextNode("It took " + totalTime + " ms to reproduce the provided text.");
    spTotalTime.appendChild(spTotalTimeContent);

    let spTotalTimeDiv = document.createElement("div");
    spTotalTimeDiv.id = "spTotalTime";

    spTotalTimeDiv.appendChild(spTotalTime);

    // Existing node
    let gifFrame = document.getElementById("gifFrame");
    let parentDiv = gifFrame.parentNode;

    // Replace content
    parentDiv.replaceChild(spTotalTimeDiv, gifFrame);

    //--------------- close button ----------------------
    // Show close button
    let closeButton = document.getElementById('closeButton');
    closeButton.innerHTML = closeButton.innerHTML.replace('<!--','').replace('-->','');
}

const resetContent = () => {
    // Reset textfield
    document.getElementById('inputText').value = '';

    // Reset modal content
    // ------------- modal header -------------------
    // New node
    let modalHeader = document.createElement('h5');
    modalHeader.id = "userPrompt";
    modalHeader.className = "modal-title";
    let modalHeaderContent = document.createTextNode("Please wait while the monkey is typing... ");
    modalHeader.appendChild(modalHeaderContent);

    // Existing node
    let existingHeaderContent = document.getElementById("modalHeaderId");
    let headerParentDiv = existingHeaderContent.parentNode;

    // Replace header content
    headerParentDiv.replaceChild(modalHeader, existingHeaderContent);

    // -------------- modal body --------------------
    // New iframe node
    let gifContent = document.createElement("iframe");
    gifContent.src = "https://giphy.com/embed/l0HU7GmObZ2BtYZvW";
    gifContent.width = "100%";
    gifContent.height= "100%";
    gifContent.style = "position:absolute";
    gifContent.frameBorder = "0";
    gifContent.className = "giphy-embed";
    gifContent.setAttribute('allowFullScreen', '');

    let gifDiv = document.createElement("div");
    gifDiv.id = "gifFrame";
    gifDiv.style = "width:100%;height:0;padding-bottom:100%;position:relative;"

    gifDiv.appendChild(gifContent);

    // Existing node
    let existingModalBodyContent = document.getElementById("spTotalTime");
    let existingModalBodyContentParent = existingModalBodyContent.parentNode;

    existingModalBodyContentParent.replaceChild(gifDiv, existingModalBodyContent);
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