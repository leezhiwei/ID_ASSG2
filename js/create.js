const form = $('form');
let arr = [];
function getansandsubmit(){
    for (let qn = 1; qn <= 10; qn++){
        console.log(`Question ${qn}`);
        let question = {"numb":qn}
        let answer = form.find(`#q${qn}_ans`).val();
        question["answer"] = answer;
        let array = [];
        for (let op = 1; op <= 4; op++){
            let options = form.find(`#q${qn}_op${op}`).val();
            console.log(options);
            array.push(options);
        }
        question["options"] = array;
        arr.push(question);
    }
    console.log(arr);
}
form.find('.create_btn').click( () => {
    getansandsubmit();
    let namecreate = form.find("#q_cname").val();
    sendquestion({"QuestionID": respget.length + 1,"QuestionList":arr,"CreatorName":namecreate});
});