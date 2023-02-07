const form = $('form');
for (let qn = 1; qn <= 10; qn++){
    console.log(`Question ${qn}`);
    let answer = "ans";
    for (let op = 1; op <= 4; op++){
        console.log(`Option ${op}`);
        if (ans == answer){
            console.log("Hit");
        }
    }
}