// creating an array and passing the number, questions, options, and answers
/*global restart, getquestions*/
/*eslint no-unused-vars: "error"*/
var respsend; // eslint-disable-line no-unused-vars
var respget;
var questions; // eslint-disable-line no-unused-vars
getquestions();
function waitforqns(index){ // eslint-disable-line no-unused-vars
	if (respget !== undefined){
		try{
			questions = respget[index]["QuestionList"];
		}
		catch{
			questions = respget[0]["QuestionList"];
		}
		restart.show();
	}
	else{
		setTimeout(waitforqns, 250);
	}
}