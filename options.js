var Spoilers = document.getElementById("dictionary");

function getSpoilers() {
  if(localStorage["spoilers"]){
    return localStorage["spoilers"];
  }
  else{
    resetSpoilers();
  }
}

/**
 * function to save the spoilers to local storage
 */
function saveChanges() {
  if (!Spoilers.value) {
    alert('Error: No Spoilers specified');
    return;
  }
  else{
    localStorage["spoilers"] = Spoilers.value.trim();
    location.reload();
  }
}

/**
 * reset the spoilers with some default values
 */
function resetSpoilers(){
  localStorage["spoilers"] = "survivor,τσανκ,κινέζος,Ορέστης,αγώνισμα,Ορέστης,Σάρα,Τσανγκ,Μισθοφόρος,Λάουρα,Σπαλιάρας,Σπαλ,Χρανιώλα,Χρανιώτης,ΜΠΟ,Ασυλία,Κολιδά,Μαχητές,Αγγελόπουλος,Βαλαβάνη,orestis,Ελισάβετ,ΒΑΛΑΒΑΝΗ";
  location.reload();
}

Spoilers.value =getSpoilers();
console.log(localStorage["spoilers"]);


// document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',  saveChanges);
document.getElementById('reset').addEventListener('click',  resetSpoilers);
