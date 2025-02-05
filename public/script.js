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