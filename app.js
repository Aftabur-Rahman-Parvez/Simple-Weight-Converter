let input=document.getElementById('input_form');
let output=document.getElementById('output');
output.style.visibility='hidden'
input.addEventListener('input',function(event){
	// console.log(event.target.value)
	output.style.visibility='visible'
	let lb=event.target.value;
	let kilo=document.getElementById('kg_out')
	let grm=document.getElementById('gram_out')
	let oun=document.getElementById('oun_out')

	kilo.innerHTML=lb/.0022046;
	grm.innerHTML=lb/2.2046;
	oun.innerHTML=lb*16;

})