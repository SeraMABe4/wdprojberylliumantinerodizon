/******************************************************************************
For the "YOUR RECIPES" page - Yours.html
******************************************************************************/
function t(){ //processes the title of the recipe into the table
  var in2 = document.getElementById("2input").value;
  document.getElementById("out2").innerHTML = `${in2}`;
}

function mats(){ //processes the materials of the recipe into the table
  var in3= document.getElementById("3input").value.split(","); //so that each element before the commas is its own element
  
  let arr = []; //to put the items that the user inputted into an array
  for (let i=0; i<in3.length ;i++){ //to put all the items from the input tag into an array
    arr.push(in3[i]);
  }
  let opt3 = "";
  for (let n=0; n<arr.length; n++){ //makes it so that it becomes a numbered list
    let a=n+1;
    opt3 += `${a}. ${arr[n]}<br>`;
  }
  document.getElementById("out3").innerHTML = opt3;
}

function food(){ //processes the ingredients of the recipe into the table
  var in4= document.getElementById("4input").value.split(","); 
  
  let arr = []; //to put the items that the user inputted into an array
  for (let i=0; i<in4.length ;i++){ //to put all the items from the input tag into an array
    arr.push(in4[i]);
  }
  let opt4 = "";
  for (let n=0; n<arr.length; n++){ //makes it so that it becomes a numbered list
    let b=n+1;
    opt4 += `${b}. ${arr[n]}<br>`;
  }
  document.getElementById("out4").innerHTML = opt4;
}

function process(){ //processes the procedure of the recipe into the table
  var in5 = document.getElementById("5input").value;
  document.getElementById("out5").innerHTML = in5;
}

/******************************************************************************
For the "RECIPES" page - recipes.html
******************************************************************************/
function prize(){
  var status = document.querySelectorAll("input[type=radio]"); //sees which circles were checked, each circle gives a value of 1 when checked
  
  let checks = [];
  for (let i=0; i<status.length; i++){ //puts all the checked circles into an array
    if(status[i].checked) {
      checks.push(Number(status[i].value));
    }
  }
  
  let prize=0
  for (let i=0;i<checks.length; i++){ //adds all the items in the array
    prize += checks[i];
  }
  if (prize===15) // it equates to three at the moment because those are the only available meals 
  {
    document.getElementById("prize").innerHTML = `CONGRATULATIONS YOU ARE A PRO CHEF! <br> <img class="pro" src="https://cdn.glitch.global/52666483-76dd-4611-ae19-01ce91b7de36/award?v=1735225088139" alt="pro chef's award"> <figcaption> 1st place award for most improved chef! </figcaption>`;
  }
  else {
    document.getElementById("prize").innerHTML = "Oof, you're not quite the pro yet. Have a cupcake 🧁, keep on cooking!";
  }  
}


/******************************************************************************
For the "MIX AND MOOD" page - mood.html
******************************************************************************/
document.getElementById('moodForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var emoji = document.getElementById('mood').value;
    console.log('Selected mood:', emoji);
    // You can now use the variable 'emoji' as needed
});




/******************************************************************************
For the "FOLLOW ALONG" page - follow.html
******************************************************************************/

let timerInterval; // To store the timer interval ID

function showRecipe() {
    const cuisine = document.getElementById('cuisineSelect').value;
    const recipeDisplay = document.getElementById('recipeDisplay');

    let recipeContent = ''; // This will hold the HTML content for the recipe

    if (cuisine === 'western') {
        recipeContent = `
            <h2>Mac and Cheese (Western)</h2>
            <p><strong>Ingredients:</strong></p>
            <ul>
                <li>200g elbow macaroni</li>
                <li>2 cups shredded cheddar cheese</li>
                <li>1 cup milk</li>
                <li>2 tbsp butter</li>
                <li>2 tbsp flour</li>
                <li>Salt and pepper to taste</li>
            </ul>
            <p><strong>Instructions:</strong></p>
            <ol>
                <li>Cook the macaroni according to package instructions.</li>
                <li>In a saucepan, melt butter, then add flour and stir until smooth.</li>
                <li>Slowly add milk while stirring to make a thick sauce.</li>
                <li>Add cheese and stir until melted. <button onclick="startTimer(5, 'macAndCheeseTimer')">Start Timer (5 min)</button> <span id="macAndCheeseTimer"></span></li>
                <li>Mix the cheese sauce with the cooked macaroni and season with salt and pepper.</li>
                <li>Serve hot and enjoy!</li>
            </ol>
        `;
    } else if (cuisine === 'asian') {
        recipeContent = `
            <h2>Pad Thai (Asian)</h2>
            <p><strong>Ingredients:</strong></p>
            <ul>
                <li>200g rice noodles</li>
                <li>1 egg</li>
                <li>100g shrimp, peeled</li>
                <li>2 cloves garlic, minced</li>
                <li>2 tbsp fish sauce</li>
                <li>1 tbsp sugar</li>
                <li>1 tbsp tamarind paste</li>
                <li>2 tbsp lime juice</li>
                <li>Chopped peanuts and cilantro for garnish</li>
            </ul>
            <p><strong>Instructions:</strong></p>
            <ol>
                <li>Cook the rice noodles according to package instructions.</li>
                <li>In a wok, sauté garlic for 1 minute. <button onclick="startTimer(1, 'garlicTimer')">Start Timer (1 min)</button> <span id="garlicTimer"></span></li>
                <li>Add shrimp and sauté for 4 minutes. <button onclick="startTimer(4, 'shrimpTimer')">Start Timer (4 min)</button> <span id="shrimpTimer"></span></li>
                <li>Push the shrimp to the side, crack the egg in the wok and scramble.</li>
                <li>Add the cooked noodles to the wok and toss with fish sauce, sugar, tamarind paste, and lime juice.</li>
                <li>Serve with chopped peanuts and cilantro on top.</li>
            </ol>
        `;
    } else if (cuisine === 'european') {
        recipeContent = `
            <h2>Currywurst (European)</h2>
            <p><strong>Ingredients:</strong></p>
            <ul>
                <li>4 bratwurst sausages</li>
                <li>1 cup ketchup</li>
                <li>1 tbsp curry powder</li>
                <li>1 tsp smoked paprika</li>
                <li>1 tsp mustard</li>
                <li>Salt and pepper to taste</li>
            </ul>
            <p><strong>Instructions:</strong></p>
            <ol>
                <li>Grill or pan-fry the bratwurst sausages until cooked through.</li>
                <li>In a separate pan, mix ketchup, curry powder, paprika, mustard, salt, and pepper.</li>
                <li>Simmer the sauce over low heat for 5 minutes. <button onclick="startTimer(5, 'currywurstTimer')">Start Timer (5 min)</button> <span id="currywurstTimer"></span></li>
                <li>Slice the sausages and drizzle the curry sauce over them.</li>
                <li>Serve with fries or bread!</li>
            </ol>
        `;
    }

    // Display the recipe or hide the display if no cuisine is selected
    if (cuisine) {
        recipeDisplay.innerHTML = recipeContent;
        recipeDisplay.style.display = 'block';
    } else {
        recipeDisplay.style.display = 'none';
    }
}

// Function to start the timer
function startTimer(minutes, timerId) {
    let seconds = minutes * 60; // Convert minutes to seconds
    const timerDisplay = document.getElementById(timerId);
    timerDisplay.innerText = formatTime(seconds);

    // Clear any existing timer if the user presses the button again
    clearInterval(timerInterval);

    // Start a new timer
    timerInterval = setInterval(() => {
        seconds--;
        timerDisplay.innerText = formatTime(seconds);

        if (seconds <= 0) {
            clearInterval(timerInterval); // Stop the timer when it reaches 0
            alert("Time's up! The dish is ready.");
        }
    }, 1000); // Update every second
}

// Function to format the time (e.g., 2:30 for 2 minutes and 30 seconds)
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}
