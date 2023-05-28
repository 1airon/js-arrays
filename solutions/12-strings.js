// BEGIN
const makeCensored = (text, censoredWords) => {
    const words = text.split(' ');
    const censoredText = [];
  
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      const censoredWord = censoredWords.includes(word) ? '$#%!' : word;
      censoredText.push(censoredWord);
    }
  
    return censoredText.join(' ');
  }  

  export default makeCensored;
// END