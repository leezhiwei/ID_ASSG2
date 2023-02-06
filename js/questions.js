// creating an array and passing the number, questions, options, and answers
var respsend;
var respget;
var questions;
getquestions();
function waitforqns(){
  if (respget !== undefined){
    questions = respget[0]['QuestionList'];
    restart.show();
  }
  else{
    setTimeout(waitforqns, 250);
  }
}
waitforqns();
/* let questions1 = [
    {
    numb: 1,
    question: "Question 1",
    answer: "Correct",
    options: [
      "Correct",
      "Incorrect",
      "Incorrect",
      "Incorrect"
    ]
  },
    {
    numb: 2,
    question: "Question 2",
    answer: "Correct",
    options: [
      "Correct",
      "Incorrect",
      "Incorrect",
      "Incorrect"
    ]
  },
    {
    numb: 3,
    question: "Question 3",
    answer: "Correct",
    options: [
      "Correct",
      "Incorrect",
      "Incorrect",
      "Incorrect"
    ]
  },
    {
    numb: 4,
    question: "Question 4",
    answer: "Correct",
    options: [
      "Correct",
      "Incorrect",
      "Incorrect",
      "Incorrect"
    ]
  },
    {
    numb: 5,
    question: "Question 5",
    answer: "Correct",
    options: [
      "Correct",
      "Incorrect",
      "Incorrect",
      "Incorrect"
    ]
  },
    {
    numb: 6,
    question: "Question 6",
    answer: "Correct",
    options: [
      "Correct",
      "Incorrect",
      "Incorrect",
      "Incorrect"
    ]
  },
    {
    numb: 7,
    question: "Question 7",
    answer: "Correct",
    options: [
      "Correct",
      "Incorrect",
      "Incorrect",
      "Incorrect"
    ]
  },
    {
    numb: 8,
    question: "Question 8",
    answer: "Correct",
    options: [
      "Correct",
      "Incorrect",
      "Incorrect",
      "Incorrect"
    ]
  },
    {
    numb: 9,
    question: "Question 9",
    answer: "Correct",
    options: [
      "Correct",
      "Incorrect",
      "Incorrect",
      "Incorrect"
    ]
  },  
    {
    numb: 10,
    question: "Question 10",
    answer: "Correct",
    options: [
      "Correct",
      "Incorrect",
      "Incorrect",
      "Incorrect"
    ]
  },
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
]; */