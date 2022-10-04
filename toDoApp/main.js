let addToDoButton = document.getElementById('addToDo')
let toDoContainer = document.getElementById('toDoContainer')
let inputField = document.getElementById('inputField')


function myFunction() {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}


addToDoButton.addEventListener('click',function (){

    if(inputField.value !== ""){
        var paragraph = document.createElement('p')
        paragraph.classList.add('paragraph-styling')
        paragraph.innerText = inputField.value

    }else{
        return myFunction()
    }
    toDoContainer.appendChild(paragraph)
    inputField.value = ""
    paragraph.addEventListener("click",function(){
        paragraph.style.textDecoration = "line-through"

    } )
    paragraph.addEventListener("dblclick", function(){
        toDoContainer.removeChild(paragraph)
    })
})