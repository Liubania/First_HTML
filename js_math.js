let max=document.getElementById("input1");
let min=document.getElementById("input2");
let a=document.getRandomInt(min, max);
let b=document.getRandomInt(min, max);

let resultInput=document.getElementById("result");
resultInput.addEventListener ("change",()=>{

if (document.getElementById("result").value != null) {
    document.getElementById("check").disabled = false;
  }
})

function getRandomInt(min, max) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
}

first.value=a;
second.value=b;

function check() {
  let action = document.getElementById("action").value;

  document.getElementById("result").setAttribute("placeholder", a);

  let rightAnswer = undefined;
  switch (action) {
    case "sum":
      rightAnswer = Number(a) + Number(b);
      break;
    case "subtract":
      rightAnswer = Number(a) - Number(b);
      break;
    case "multiply":
      rightAnswer = Number(a) * Number(b);
      break;
    case "divide":
      rightAnswer = Number(a) / Number(b);
      break;
    default:
      rightAnswer = "Selectați o acțiune matematică";
  }

  let userAnswer = document.getElementById("result").value;
  let successMessage = document.getElementById("ok");
  let failedMessage = document.getElementById("nok");
  
  if (userAnswer == rightAnswer) {
   successMessage.style.display="block";
   failedMessage.style.display="none";
        
  } else {
    failedMessage.style.display="block";
    successMessage.style.display="none";
  }
 
  // document.getElementById("result").value
}
