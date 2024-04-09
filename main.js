

// Add an event listener to the kilograms input field that triggers when the input changes.
document.getElementById("kgInput").addEventListener("input", function(e) {
   // Show the output when a value is entered in the kilograms input field.
    let kg = e.target.value;
    // Update the conversion results for pounds and ounces.
    document.getElementById("to_pound").innerText = (kg * 2.20462).toFixed(2);
    document.getElementById("to_ounce").innerText = (kg * 35.27396).toFixed(2);
  });
  
 // Add an event listener to the kilometers input field that triggers when the input changes.
  document.getElementById("kmInput").addEventListener("input", function(e) {
    let km = e.target.value;
    // Update the conversion results for miles and yards.
    document.getElementById("to_mile").innerText = (km * 0.621371).toFixed(2);
    document.getElementById("to_yard").innerText = (km * 1093.61).toFixed(2);
  });
  
  // Add an event listener to the Celsius input field that triggers when the input changes.
  document.getElementById("cInput").addEventListener("input", function(e) {
    let c = e.target.value;
     // Update the conversion results for Fahrenheit and Kelvin.
    document.getElementById("to_fahr").innerText = ((c * 9/5) + 32).toFixed(2); 
    document.getElementById("to_kelvin").innerText = (273.15 + c * 1 );
  });
  
  // Add an event listener to the fitness check button that triggers when the button is clicked.
  document.getElementById("myButton").addEventListener("click", function() {
      let w = document.getElementById("your-wt-input").value;
      let l = document.getElementById("your-tall-input").value;
      let BMI =( w / l / l).toFixed(1);
      let msg;
  // validate that input date if user keeps empty fields
      if (l == ''|| w == '')
      {
          document.getElementById("weight-result").innerText = `Please all fields are required!`;
          return;
      }
        // validate that input date if user add zero input
      if (l == 0 || w == 0)
      {
          document.getElementById("weight-result").innerText = `Please Recheck your input!`;
          return;
      }
      
      //  the fitness results messages upon the tall/weight ratio
      if (BMI < 18.5) {
        msg = "You're in the Underweight group!";
      } else if (BMI >= 18.5 && BMI <= 24.9) {
        msg = "You're in the Normal weight group!";
      } else if (BMI > 24.9 && BMI < 30) {
        msg = "You're in the Overweight group!";
      } else {
        msg = "You're in the Obesity group!";
      }   
          
      // showing the results on screen for the user
     document.getElementById("weight-result").innerText = `your BMI is ${BMI}, and ${msg}`;
  
  
      
  });