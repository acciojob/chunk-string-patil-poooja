function stringChop(str, size) {
  const result = [];
	  if(str===null){
      return result;
  }
  // Loop through the string, chunking it into substrings
  chunkLength=parseInt(size);
  for (let i = 0; i < str.length; i += chunkLength) {
    result.push(str.slice(i, i + chunkLength));
  }
  return result;

}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
