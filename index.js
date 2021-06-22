function todolist() {
var item = document.getElementById("todoInput").Value
var text = document.creatTexteNode(item)
var newItem = document.createElement("li")
newItem.appendChild(text)
document.getElementById("todolist").appendChild(newItem)

}