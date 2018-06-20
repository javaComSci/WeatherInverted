console.log("GET ITNO");
// $(function(){
//       alert("My First Jquery Test");
// });

var name = "codemzy";
var url = "www.anyorigin.com/go?url=" + encodeURIComponent("https://www.codewars.com/users/") + name + "&callback=?";
$.get(url, function(response) {
  console.log(response);
});