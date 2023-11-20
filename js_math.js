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
    case "add":
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
      rightAnswer = "CHOOSE ACTION";
  }

  // if (action=="add"){
  //  result=Number (a)+Number (b)

  // }
  // else if (action=="subtract") {
  //      result=Number (a)-Number (b)

  // }
  // else if (action=="multiply") {
  //      result=Number (a)Number (b)

  // }
  // else if (action=="divide") {
  //      result=Number (a)/Number (b)

  // }
  // else {
  //     result="CHOOSE ACTION"
  // }

  let userAnswer = document.getElementById("result").value;

  if (userAnswer == rightAnswer) {
    alert("OK");
  } else {
    alert("YOU'RE WRONG");
    document.getElementById("nok").style.display = none;
  }

  // document.getElementById("result").value
}
