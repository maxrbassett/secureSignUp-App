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

var upload_mem = document.getElementById()
var id = members
  upload_mem.addEventListener('click', function () {
  fetch('members', {
    method: 'get',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      'name': 'Darth Vader',
      'quote': 'I find your lack of faith disturbing.'
    })
  })
  .then(response => {
    if (response.ok) return response.json()
  })
  .then(data => {
    console.log(data)
  })
})