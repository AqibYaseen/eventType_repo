document.addEventListener("click", (e)=>{
    document.getElementById("container").innerText = "You Clicked on "+ e.target.tagName +" with id "+ e.target.id + "\n \n \n" +" Inner Html of Element is :" + e.target.innerHTML;

})

document.getElementById("btn").addEventListener("click",function(e){
    document.getElementById("eventObj").innerHTML = '<button id = "btnTemp" style = "padding : 30px; margin: 300px 0 0 500px"> Hello!! </button>';
});

document.getElementById("eventObj").addEventListener("click",function(e){
    if(e.target.tagName == "BUTTON"){
        
        if(window.prompt("Do you want to delete the Button :  enter Y for yes and N for No ") == "Y"){
        e.target.style.display = "none";
        alert("Deleted Elemtnt was a : "+e.target.tagName+ " with id : "+ e.target.id );
        
        }
        else{
            alert("Enter Correct Value!!!")
        }
    }
    
});
