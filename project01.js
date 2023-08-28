let  alltodos=  [];
// initialized a addnewlist
function addnewlist(){
    let newtodo = prompt("WHAT ARE YOU GOING TO DO TODATE")
    alltodos.push(newtodo)
    init()
}

// add a function to initialize the app
function  init(){
    document.getElementById("todos").innerHTML= alltodos.map(todo=> 
        `<li class="list">${todo}</li> <input type="checkbox" />`)
}
// invoke the init function.
init()