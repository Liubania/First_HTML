let abc = document.getElementById("input1");
abc.addEventListener("change", () => {
  document
    .getElementById("result")
    .setAttribute("placeholder", document.getElementById("input1").value);
});

let resultInput = document.getElementById("result");
resultInput.addEventListener("change", () => {
  if (document.getElementById("result").value != null) {
    document.getElementById("check").disabled = false;
  }
});

function check() {
  let action = document.getElementById("action").value;
  let a = document.getElementById("input1").value;
  let b = document.getElementById("input2").value;

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

  // if (action=="sum"){
  //  result=Number (a)+Number (b)

  // }
  // else if (action=="substract") {
  //      result=Number (a)-Number (b)

  // }
  // else if (action=="multiply") {
  //      result=Number (a)Number (b)

  // }
  // else if (action=="divide") {
  //      result=Number (a)/Number (b)

  // }
  // else {
  //     result="Selectați o acțiune matematică"
  // }

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
