var ask = prompt("Are we there yet");

for(;;){
	ask = prompt("Are we there yet");
	if(ask == 'yes'){
		alert("Yes! We finally made it.");
		break;
	}
}