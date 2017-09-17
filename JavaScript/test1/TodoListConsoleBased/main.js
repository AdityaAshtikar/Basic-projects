var todos = [];
var ask = prompt("What would you like to do?");
var count=0;


while(ask!=="quit"){

	if(ask === 'new'){
		newItem(todos);
	}
	else if(ask === 'list'){
		listAll(todos);
	}

	else if(ask === 'delete'){
		deleteIt(todos);
	}

	ask = prompt("What would you like to do?");

}

console.log("Okay you have quit the app!");

function listAll(todos){
	console.log("**********");
	todos.forEach(function(todo, i){
		console.log(i + " : " + todo);
	});
	console.log("**********");
}

function deleteIt(todos){
	listAll(todos);
	var toDelete = prompt("Enter index number of the task to delete");
	console.log("Deleted item: " + todos[toDelete-1]);
	todos.splice(toDelete-1, 1);
}

function newItem(todos){
	
	var newTodo = prompt("Enter your new task-");
	todos.push(newTodo);
	count += 1;
	console.log("Todo list updated. " + count +  " Total in list");
}
