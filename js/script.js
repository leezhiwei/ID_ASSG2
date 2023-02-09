/*global respget, waitforqns, getscores, questions, sendscore*/
var username;
var points;
var prevscores;
let sortedscores = [];
var resp;
var id;
let qid = 0;
//pts per question
const ppq = 10;
//selecting all required elements
const play_btn = document.querySelector(".play_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");
const pointCount = $("div.score");
const nameBox = $(".pname");
const scoreBoard = $(".scoreboard");
const quizid = $(".qcode");
const infoboxjq = $(".info_box");
const restart = infoboxjq.find(".restart");
restart.hide();

// if startQuiz button clicked
play_btn.onclick = ()=>{
	username = nameBox.val();
	$(".AP_Logo2").hide();
	$(".typewrite2").hide();
	$(".qcode").hide();
	$(".pname").hide();
	$(".play_btn").hide();
	if (username == ""){
		return;
	}
	let qidtext = quizid.val();
	if (qidtext == ""){
		qid = 0;
	}
	else {
		qid = parseInt(qidtext);
		if (isNaN(qid)){
			qid = 1;
		}
		qid -= 1;
	}
	console.log(qid);
	waitforqns(qid);
	if (respget[qid].CreatorName == username){
		window.alert("A creator cannot play their own quiz");
		location.reload();
	}
	info_box.classList.add("activeInfo"); //show info box
};

// if exitQuiz button clicked
exit_btn.onclick = ()=>{
	info_box.classList.remove("activeInfo"); //hide info box
	$(".AP_Logo2").show();
	$(".typewrite2").show();
	$(".qcode").show();
	$(".pname").show();
	$(".play_btn").show();
};

// if continueQuiz button clicked
continue_btn.onclick = ()=>{
	info_box.classList.remove("activeInfo"); //hide info box
	quiz_box.classList.add("activeQuiz"); //show quiz box
	showQuetions(0); //calling showQestions function
	queCounter(1); //passing 1 parameter to queCounter
	startTimer(30); //calling startTimer function
};

let timeValue = 30;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;

const restart_quiz = scoreBoard.find(".restart");
const quit_quiz = scoreBoard.find(".quit");

// if restartQuiz button clicked
restart_quiz.click(()=>{
	quiz_box.classList.add("activeQuiz"); //show quiz box
	scoreBoard.removeClass("activeScores"); //hide result box
	timeValue = 30; 
	que_count = 0;
	que_numb = 1;
	userScore = 0;
	showQuetions(que_count); //calling showQestions function
	queCounter(que_numb); //passing question_number value to queCounter
	clearInterval(counter); //clear counter
	clearInterval(counterLine); //clear counterLine
	startTimer(timeValue); //calling startTimer function
	timeText.textContent = "Time Left"; //change the text of timeText to Time Left
	next_btn.classList.remove("show"); //hide the next button
});

// if quitQuiz button clicked
quit_quiz.click(()=>{
	window.location.href='../index.html'; //returns back to index home page
});

const proceedbutton = result_box.querySelector(".proceed");
const tablearea = scoreBoard.find(".tableofpeople");
// if click proceed button
proceedbutton.onclick = ()=>{
	result_box.classList.remove("activeResult");
	getscores();
	waitandsortscores();
	scoreBoard.addClass("activeScores");
};

function waitandsortscores(){
	if (prevscores !== undefined){
		let inthisquiz = [];
		for (let x = 0; x < prevscores.length; x++){
			if (prevscores[x].QuizID == (qid + 1).toString()){
				inthisquiz.push(prevscores[x]);
			}
		}
		sortedscores = inthisquiz.sort((o1,o2) => {
			if (o1.Score > o2.Score){
				return -1;
			}
			if (o1.Score < o2.Score){
				return 1;
			}
			return 0;
		});
		let scorehtml = addtable();
		tablearea.html(scorehtml);
		whichplace();
	}
	else{
		setTimeout(waitandsortscores, 250);
	}
}
function addtable(){
	if (!sortedscores || sortedscores.length === 0) {
		console.error("The sortedscores array is either undefined or empty");
		return "";
	}
	let scorehtml = "<table><tr><th>Name</th><th>Score</th></tr>";
	for (let x = 0; x < sortedscores.length; x++){
		scorehtml += `<tr><td>${sortedscores[x].Name}</td><td>${sortedscores[x].Score}</td></tr>`;
		if (x == 15){
			break;
		}    
	}
	scorehtml += "</table>";
	return scorehtml;
}
const position = scoreBoard.find(".pos");
function whichplace(){
	for (let x = 0; x < sortedscores.length; x++){ 
		var suffix; 
		if (sortedscores[x]._id == id){ 
			let place = x + 1; 
			if (place == 1){ 
				suffix = "st"; 
			} 
			else if (place == 2){
				suffix = "nd"; 
			} 
			else if (place == 3){
				suffix = "rd"; 
			} 
			else { 
				suffix = "th"; 
			} 
			let innertext = `<p>${sortedscores[x].Name} is in the <b><u>${place}${suffix}</b></u> place.</p>`; 
			position.html(innertext);
		} 
	}
}
const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// if Next Question button clicked
next_btn.onclick = ()=>{
	if(que_count < questions.length - 1){ //if question count is less than total question length
		que_count++; //increment the question count value
		que_numb++; //increment the question numb value
		showQuetions(que_count); //calling show Qestions function
		queCounter(que_numb); //passing question number value to queCounter
		clearInterval(counter); //clear counter
		clearInterval(counterLine); //clear counterLine
		startTimer(timeValue); //calling start Timer function
		timeText.textContent = "Time Left"; //change the time Text to Time Left
		next_btn.classList.remove("show"); //hide the next button
	}else{
		clearInterval(counter); //clear counter
		clearInterval(counterLine); //clear counterLine
		showResult(); //calling show Result function
	}
};

// getting questions and options from array
function showQuetions(index){
	const que_text = document.querySelector(".que_text");

	//creating a new span and div tag for question and option and passing the value using array index
	let que_tag = "<span>"+ questions[index].numb + ". " + questions[index].question +"</span>";
	let option_tag = "<div class=\"option\"><span>"+ questions[index].options[0] +"</span></div>"
    + "<div class=\"option\"><span>"+ questions[index].options[1] +"</span></div>"
    + "<div class=\"option\"><span>"+ questions[index].options[2] +"</span></div>"
    + "<div class=\"option\"><span>"+ questions[index].options[3] +"</span></div>";
	que_text.innerHTML = que_tag; //adding new span tag inside question tag
	option_list.innerHTML = option_tag; //adding new div tag inside option_tag
    
	const option = option_list.querySelectorAll(".option");

	// set onclick attribute to all available options
	for(let i=0; i < option.length; i++){
		option[i].setAttribute("onclick", "optionSelected(this)");
	}
}
// creating the new div tags which for icons correct & wrong
let tickIconTag = "<div class=\"icon tick\"><i class=\"fas fa-check\"></i></div>";
let crossIconTag = "<div class=\"icon cross\"><i class=\"fas fa-times\"></i></div>";

//if user clicked on option
function optionSelected(answer){ // eslint-disable-line no-unused-vars
	clearInterval(counter); //clear counter
	clearInterval(counterLine); //clear counterLine
	let userAns = answer.textContent; //getting user selected option
	let correcAns = questions[que_count].answer; //getting correct answer from array
	const allOptions = option_list.children.length; //getting all option items
    
	if(userAns == correcAns){ //if user selected option is equal to array's correct answer
		userScore += ppq; //upgrading score value with 1
		let pointText = `${userScore}`;
		console.log(pointText);
		pointCount.text(pointText);
		answer.classList.add("correct"); //adding green color to correct selected option
		answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
		console.log("Correct Answer");
		console.log("Your correct answers = " + userScore);
	}else{
		answer.classList.add("incorrect"); //adding red color to correct selected option
		answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
		console.log("Wrong Answer");

		for(let i=0; i < allOptions; i++){
			if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer 
				option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
				option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
				console.log("Auto selected correct answer.");
			}
		}
	}
	for(let i=0; i < allOptions; i++){
		option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
	}
	next_btn.classList.add("show"); //show the next button if user selected any option
}

function showResult(){
	info_box.classList.remove("activeInfo"); //hide info box
	quiz_box.classList.remove("activeQuiz"); //hide quiz box
	result_box.classList.add("activeResult"); //show result box
	const scoreText = result_box.querySelector(".score_text");
	if (userScore >= 70){ // if user scored more than 70 
		//creating a new span tag and passing the user score number and total question number
		let scoreTag = "<span>Congratulations! High score of <p>"+ userScore +"</p> out of <p>"+ (questions.length * ppq) +"</p></span>";
		scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
	}
	else if(userScore >= 50){ // if user scored more than 50 
		let scoreTag = "<span>You passed the Quiz, with <p>"+ userScore +"</p> out of <p>"+ (questions.length * ppq) +"</p></span>";
		scoreText.innerHTML = scoreTag;
	}
	else{ // if user scored less than 50 
		let scoreTag = "<span>Please try again! The score is <p>"+ userScore +"</p> out of <p>"+ (questions.length * ppq) +"</p></span>";
		scoreText.innerHTML = scoreTag;
	}
	proceedbutton.style.opacity = 0;
	proceedbutton.style.visibility = "hidden";
	points = userScore;
	sendscore({"Name":username,"Score":points,"QuizID":(qid + 1)});
	waitandidresp();
}
function waitandidresp(){
	if (resp !== undefined){
		id = resp._id;
		proceedbutton.style.opacity = 1;
		proceedbutton.style.visibility = "visible";
	}
	else{
		setTimeout(waitandidresp, 250);
	}
}
function startTimer(time){
	counter = setInterval(timer, 1000);
	function timer(){
		timeCount.textContent = time; //changing the value of timeCount with time value
		time--; //decrement the time value
		if(time < 9){ //if timer is less than 9
			let addZero = timeCount.textContent; 
			timeCount.textContent = "0" + addZero; //add a 0 before time value
		}
		if(time < 0){ //if timer is less than 0
			clearInterval(counter); //clear counter
			timeText.textContent = "Time Off"; //change the time text to time off
			const allOptions = option_list.children.length; //getting all option items
			let correcAns = questions[que_count].answer; //getting correct answer from array
			for(let i=0; i < allOptions; i++){
				if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer
					option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
					option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
					console.log("Time Off: Auto selected correct answer.");
				}
			}
			for(let i=0; i < allOptions; i++){
				option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
			}
			next_btn.classList.add("show"); //show the next button if user selected any option
		}
	}
}


function queCounter(index){
	//creating a new span tag and passing the question number and total question
	let totalQueCounTag = "<span><p>"+ index +"</p> of <p>"+ questions.length +"</p> Questions</span>";
	bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom question counter
}