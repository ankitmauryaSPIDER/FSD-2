function greet (name ,callback){
    console.log("hello  "  +name);
    callback();
}
function bye(){
    console.log("good bye");
}
greet("john",bye);