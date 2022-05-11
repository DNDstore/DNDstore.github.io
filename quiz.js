function check() {

  var userName = document.getElementsByName("username");

  var question0Correct;
  var question0 = document.getElementsByName("quelle_langue");
  if (question0[3].checked) {
    question0Correct = true;
  } else {
    quetion0Correct = false;
  }

  var question1Correct;
  var question1 = document.getElementsByName("question1")
  
  if (question1[2].checked && !(question1[0].checked) && !(question1[1].checked) && !(question1[3].checked) && !(question1[4].checked)) {
    question1Correct = true;
  } else {
    question1Correct = false;
  }

  if (question0Correct === true && question1Correct === true) {
    alert("Correct! Bravo.");
    console.log("good");
  } else {
    alert("Tu a fail");
    console.log('wrong');
  }
}