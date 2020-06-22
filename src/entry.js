export function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.numberOfWords = function(){
  return this.body.split(" ").length;
}

Entry.prototype.numberOfVowels = function(){
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let vowelCount = 0;
  for(let char of this.body.toLowerCase()) {
    if(vowels.includes(char)){
      vowelCount++;
    }
  }
  return vowelCount;
}

Entry.prototype.numberOfConsonants = function(){
    let consonants = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M',' N', 'P',' Q',' R', 'S', 'T', 'V', 'X', 'Z', 'W','Y'];
    let consonantCount = 0;
    for(let char of this.body.toUpperCase()) {
      if(consonants.includes(char)){
        consonantCount++;
      }
    }
    return consonantCount;
  }