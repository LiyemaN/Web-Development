function printTriangles(rows) {
    // Descending Top
    for (let i = rows; i >= 1; i--) {
      let stars = '';
      for (let j = 1; j <= i; j++) {
        stars += '* ';
      }
      console.log(stars);
    }
    // Ascending Bottom
    for (let i = 1; i <= rows; i++) {
      let stars = '';
      for (let j = 1; j <= i; j++) {
        stars += '* ';
      }
      console.log(stars);
    }
  }
  const numberOfRows = 5; 
  printTriangles(numberOfRows);
