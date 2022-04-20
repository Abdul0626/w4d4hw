//falsy bouncer
function bouncer(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i += 1){
      let individualValue = arr[i];
      if (individualValue){
        result.push(arr[i]);
      }
    } 
    return result;
  }
  
  bouncer([7, "ate", , "", false, 9]);

  //chunky monkey
  function chunkArrayInGroups(arr, size) {
    let result = [];
    for (let i = 0; i < arr.length; i 
  += size){
    result.push(arr.slice(i, i + size));
  }
  
  return result;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);