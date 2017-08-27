
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


// function passWord() {
// var testV = 1;
// var pass1 = prompt('Please Enter Your Password',' ');
// while (testV < 3) {
// if (!pass1) 
// history.go(-1);
// if (pass1.toLowerCase() == '21stward') {
// alert('You Got it Right!');
// window.open('protectpage.html');
// break;
// } 
// testV+=1;
// var pass1 = 
// prompt('Access Denied - Password Incorrect, Please Try Again.','Password');
// }
// if (pass1.toLowerCase()!="password" & testV ==3) 
// history.go(-1);
// return " ";
// } 




// function passWord(){
//   if(!executed){
//     var pass1 = prompt('Please Enter Password');
//       if(pass1.toLowerCase() == '21stward'){
//         executed = true;
//         return;
//       }
//       while(pass1 !== '21stward'){
//        pass1 = prompt('Incorrect Password! Try Again');
//       }
//     }else if(executed){
//       return;
//     }


// }

