var li1 = document.querySelectorAll("li");

for(var i = 0; i < li1.length ; i++){

	li1[i].addEventListener("mouseover", function(){
			
			this.style.transition = "0.5s";

			this.style.border = "2px solid red";
			this.style.padding = "20px";
			this.style.color = "pink";
			this.style.margin = "10%";
	});

	li1[i].addEventListener("mouseout", function(){
		this.style.border = "none";
		this.style.padding = "0";
		this.style.color = "black";
		this.style.margin = "2px";
	});

	li1[i].addEventListener("click", function(){
		this.classList.toggle("done");
	});

}