// Your code goes here



/*
document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
  });
  
  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );

*/

//document.getElementById('text').addEventListener("DOMContentLoaded", () => console.log("This is really cool") )
/*
const addingElement = document.getElementById('text')
addingElement.addEventListener('DOMContentLoaded', function(e) {
    e.textContent = "This is really cool"
}
*/
//document.getElementById('text').addEventListener("DOMContentLoaded", p.textContent="This is really cool!")


document.addEventListener('DOMContentLoaded', function() {
    const p = document.getElementById('text')
    p.textContent = "This is really cool!"
})














