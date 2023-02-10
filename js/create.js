/*global getquestions, sendquestion*/
var respget;
var qnlist;
const infopanel = $(".info");
getquestions();
function waitforqns(){
	if (respget !== undefined){
		qnlist = respget;
	}
	else{
		setTimeout(waitforqns, 250);
	}
}
waitforqns();
const form = $("form");
let arr = [];
let questionwithnoans = "";
function getansandsubmit(){
	for (let qn = 1; qn <= 10; qn++){
		let question = {"numb":qn};
		let answer = form.find(`#q${qn}_ans`).val();
		let questionask = form.find(`#q${qn}_qn`).val();
		if (questionask == ""){
			questionwithnoans += `<p><b>Question ${qn} has no question.</b></p>`;
			break;
		}
		question["question"] = questionask;
		question["answer"] = answer;
		let array = [];
		for (let op = 1; op <= 4; op++){
			let options = form.find(`#q${qn}_op${op}`).val();
			array.push(options);
		}
		if (!array.includes(answer)){
			questionwithnoans += `<p><b>Question ${qn}'s answer is not in options.</b></p><br>`;
		}
		question["options"] = array;
		arr.push(question);
	}
	if (questionwithnoans.length != 0){
		infopanel.html(questionwithnoans);
		return false;
	}
	console.log(arr);
	return true;
}

form.find(".create_btn").click( () => {
	if (!getansandsubmit()){
		return;
	}
	let namecreate = form.find("#q_cname").val();
	if (namecreate == ""){
		infopanel.html("<p><b>CreatorName cannot be empty</b></p>");
		return;
	}
	let id = qnlist.length + 1;
	console.log(id);
	sendquestion({"QuestionID": id,"QuestionList":arr,"CreatorName":namecreate});
	window.scrollTo(0, 0);
	infopanel.html(`<p><b>Your QuizID is ${id}</b></p><br><p>Wait until browser refreshes before you create another form.</p>`);
	form.find(".create_btn").prop("disabled", true);
	setTimeout(() => {location.reload();},25000);
});