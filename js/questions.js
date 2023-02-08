// creating an array and passing the number, questions, options, and answers
var respsend;
var respget;
var questions;
getquestions();
function waitforqns(index){
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