var list = document.getElementById("list")


function addItem(){
    
    var inp = document.getElementById("add")
    var inpval = inp.value
    if(inpval === "")
    alert("Input cannot be empty")
    else{
    //Create li
    var li = document.createElement("li")
    var item = document.createElement("input")
    li.appendChild(item)
    item.value = inpval
    list.appendChild(li)

    inp.value = ""    

    //Create edit button
    var ebtn = document.createElement("button")
    var text = document.createTextNode("Edit")
    ebtn.appendChild(text)
    li.appendChild(ebtn)
        //set attr
    ebtn.setAttribute("onclick","edit(this)")

    //Create delet button
    var dbtn = document.createElement("button")
    var text = document.createTextNode("Delete")
    dbtn.appendChild(text)
    li.appendChild(dbtn)
        //set attr
    dbtn.setAttribute("onclick","delet(this)")

    //styles
    ebtn.setAttribute("class","btn-outline-success offset-md-2 ml-5")
    dbtn.setAttribute("class","btn-outline-danger mr-auto order-3")
   
    item.setAttribute("class","offset-md-2 ml-5")
    li.setAttribute("class","myli p-2")
    
    }
}
function deletAll(){
    list.innerHTML = ""
}
function delet(elem){
    var parent = elem.parentNode
    parent.remove()
    console.log(parent.remove())
}
var c = 0
function edit(e){
    if( c == 0){
    var par = e.parentNode
    var ps = e.previousSibling
    ps.style.backgroundColor = "white"
    // e.style.display = "none"
    // var update = document.createElement("button")
    // var t = document.createTextNode("Update")
    // update.appendChild(t)
    // par.appendChild(update)

    // set attr
    // update.setAttribute("class", "btn-outline-primary order-2")
    e.innerHTML = "update"
    c = 1
    }
    else{
        var ps = e.previousSibling
    ps.style.backgroundColor = "#5bf5f0"
    e.innerHTML  = "Edit"
    c = 0
    }
    
}
