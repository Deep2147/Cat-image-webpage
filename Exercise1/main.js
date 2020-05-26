var cat = {id:"101", name:"snowbell", age:3};

var text="";
var p;
    for(p in cat){
    
    text = cat[p] + " ";

document.getElementById([p]).innerHTML = text;
    
    
}


