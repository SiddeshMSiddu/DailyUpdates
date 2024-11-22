function findDuplicates(arr) {
    const duplicates = [];
    const seen = {};
  
    for (let i = 0; i < arr.length; i++) {
      const current = arr[i];
      if (seen[current]) {
        if (!duplicates.includes(current)) {
          duplicates.push(current);
        }
      } else {
        seen[current] = true;
      }
    }
  
    return duplicates;
  }
  
  const inputArray = [1, 2, 3, 4, 5, 3, 2, 6, 7, 2];
  console.log(findDuplicates(inputArray)); 
  