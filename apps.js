let todo = ["playing", "dancing", "singing", "eating", "sleeping"] ;
let choice = prompt("please enter your choice");
console.log(choice);

while (true) {
    if(choice == "quit") {
        console.log ("quitting app");
        break;
    }
    if (choice =="list") {
        console.log("__________________");
        for (let i = 0; i< todo.length ; i++) {
            console.log(i, todo[i]);
        }
       
        console.log("_______________");
        
    } 
    else if (choice == "add") {
        let task = prompt("enter the task u want to add");
        todo.push(task);
        console.log("task added");
        
    }
    else if(choice =="delete") {
        let idx = prompt("enter the index you want to delete");
        todo.splice(idx, 1);
        console.log("index has been removed");
    }
    else {
        console.log("wrong request");
    }
    choice = prompt("please enter your choice");
    
    
    
}   