function search() {
      var input, filter, ul, li, a, i;
      input = document.getElementById("myinput");
      filter = input.value.toUpperCase();
      ul = document.getElementById("memberlist");
      li = ul.getElementsByTagName("li");
      for (i = 0; i < li.length; i++) {
          a = li[i].getElementsByTagName("a")[0];
          if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
              li[i].style.display = "";
          } else {
              li[i].style.display = "none";

          }
      }
  }

require('dotenv').config();


function passWord() {
window.stop('index.ejs');
var testV = 1;
var pass1 = prompt('Password',' ');
while (testV < 6) {
if (!pass1) 
history.go(-1);
if (pass1.toLowerCase() == `${process.env.password}`) {
alert('You Got it Right!');
window.open('index.ejs');
break;
} 
testV+=1;
var pass1 = 
prompt('Access Denied - Password Incorrect, Please Try Again.','Password');
}
if (pass1.toLowerCase()!="password" & testV ==3) 
history.go(-1);
return " ";
} 

