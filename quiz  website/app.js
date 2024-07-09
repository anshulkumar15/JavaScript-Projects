const questions=[
	{
		'que':'which of the following is markup language?',
		'a':'HTML',
		'b':'CSS',
		'c':'Javascript',
		'd':'PHP',
		'correct':'a'


	},
	{
		'que':'How is yhe Miet college',
		'a':'good',
		'b':'bad',
		'c':'theek',
		'd':'ok',
		'correct':'a'


	},
	{
		'que':'What year javascript Launched?',
		'a':'1996',
		'b':'1995',
		'c':'1994',
		'd':'none of the above',
		
		'correct':'b'


	}
]
let index=0;
let total=questions.length;
let right=0,wrong=0;
const quesBox=document.getElementById("quesBox");
const optionInput=document.querySelectorAll(".option")
const loadquestion=()=>{
	if(index==total){
		return endQuiz()
	}
	reset();
	const data=questions[index]
         quesBox.innerText=`${index+1}) ${data.que}`;
	 optionInput[0].nextElementSibling.innerText=data.a;
	 optionInput[1].nextElementSibling.innerText=data.b;
	 optionInput[2].nextElementSibling.innerText=data.c;
	 optionInput[3].nextElementSibling.innerText=data.d;
}
const submitQuiz=()=>{
	
	const data =questions[index];
	const ans=getAnswer()
	if(ans==data.correct){
       right++;
	}else{
		wrong++;
	}
	index++;
	loadquestion();
	return;
}
const getAnswer=()=>{
	let answer;
	optionInput.forEach((input)=>{
		if(input.checked){
			answer=input.value;
		}
	})
	return answer;
}
const reset=()=>{
	optionInput.forEach((input)=>{
		input.checked=false;
	})
}
const endQuiz=()=>{
	document.getElementById("box").innerHTML=`
	<div style="text=align:center">
	<h3> Thank you for playing the Quiz</h3>
	<h2> ${right}/${total} are correct</h2>
     </div>

	`
}
loadquestion();
