const jsonUrl = `data.json`;

fetch(jsonUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }
    return response.json();
  })
  .then(jsonData => {
    // using for loop
    console.log("Using for loop:");
    for (let key in jsonData) {
      if (jsonData.hasOwnProperty(key)) {
        console.log(`${key}: ${JSON.stringify(jsonData[key])}`);
      }
    }

    //  using forin loop
    console.log("\nUsing for...in loop:");
    for (let key in jsonData) {
      console.log(`${key}: ${JSON.stringify(jsonData[key])}`);
    }

    // forof loop 
    console.log("\nUsing for...of loop:");
    for (let value of Object.values(jsonData)) {
      console.log(`${JSON.stringify(value)}`);
    }

    // using forEach loop 
    console.log("\nUsing forEach loop:");
    Object.values(jsonData).forEach(value => {
      console.log(`${JSON.stringify(value)}`);
    });
  })
  .catch(error => {
    console.error('Fetch error:', error.message);
  });
