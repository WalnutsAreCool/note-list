addListItem("david" + "/notes", "hi there!!!!")
console.log("hi")

var name;
var nameInput = $("#name-input")
var noteInput = $("#note-input")
var noteList = $("#note-list")


nameInput.keydown(function(e) {
  if (e.which == 13) {
    // we have a new name! Now what?
  }	
})

function getNotesForName(name) {  
  onNewListItem(name + "/notes", function(note) {
    console.log(note)
  })
}

noteInput.keydown(function(e) {
  if (e.which == 13) {    
    addListItem(nameInput + "/notes", noteInput.val())
    console.log(nameInput)

  }
})
