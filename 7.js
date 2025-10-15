function wave(str){
  let results = [];

  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i); 

    if (char !== " ") {
      let upperCaseChar = char.toUpperCase();

      let newStr = str.substring(0, i) + upperCaseChar + str.substring(i + 1);

      results.push(newStr); 
    }
  }

  return results;
}

