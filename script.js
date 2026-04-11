let runButton = document.getElementById("run-btn");

runButton.addEventListener("click", analyzeAnagram);

  // anagram comparison function
  function analyzeAnagram() {
    
  let phrase1 = document.getElementById("phrase1").value;
  let phrase2 = document.getElementById("phrase2").value;

  // clean up the text 
  let clean1 = phrase1.toLowerCase().replaceAll(" ", "");
  let clean2 = phrase2.toLowerCase().replaceAll(" ", "");

  // set up buckets
  let seedBank = clean1.split(""); 
  let invalidBox = []; 

  // loop through the attempt to cross off letters
  for (let i = 0; i < clean2.length; i++) {
    let currentLetter = clean2[i];
    let index = seedBank.indexOf(currentLetter);

    if (index !== -1) {
      seedBank.splice(index, 1);
    } else {
      invalidBox.push(currentLetter);
    }
  }

  // figure out which of the 4 states occurred and print
  
  let outputArea = document.getElementById("output-area");
  
  if (seedBank.length === 0 && invalidBox.length === 0) {
    // state 1: perfect match
    outputArea.innerHTML = "<h3>> STATUS: PERFECT MATCH!</h3><p>Exact anagram confirmed. All characters utilized.</p>";
  
  } else if (seedBank.length > 0 && invalidBox.length === 0) {
    // state 2: incomplete sequence
    outputArea.innerHTML = "<h3>> STATUS: INCOMPLETE SEQUENCE</h3><p>Your attempt is missing characters from the Seed Phrase.</p><p>Unused Seed characters: [ " + seedBank.join(", ") + " ]</p>";
  
  } else if (seedBank.length === 0 && invalidBox.length > 0) {
    // state 3: capacity exceeded
    outputArea.innerHTML = "<h3>> STATUS: CAPACITY EXCEEDED</h3><p>Your attempt uses characters that do not exist in the Seed Phrase.</p><p>Invalid characters to Remove: [ " + invalidBox.join(", ") + " ]</p>";
  
  } else {
    // state 4: critical mismatch
    outputArea.innerHTML = "<h3>> STATUS: CRITICAL MISMATCH</h3><p>Your attempt is missing Seed characters AND contains invalid characters.</p><p>Unused Seed characters: [ " + seedBank.join(", ") + " ]</p><p>Invalid characters to Remove: [ " + invalidBox.join(", ") + " ]</p>";
  }
  
