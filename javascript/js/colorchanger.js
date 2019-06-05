var btn = document.querySelector("button");
var isPurple = false;
//console.log(document);

// btn.addEventListener("click", function(){
//   if(isPurple){
//     document.body.style.backgroundColor = "white";
//   } else {
//     document.body.style.backgroundColor = "purple";
//   }
//   isPurple = !isPurple;
// });


btn.addEventListener("click", function(){
    document.body.classList.toggle("purple");
});
