var coll = document.getElementsByClassName("title");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
      this.getElementsByClassName("fa-solid")[0].classList.remove('expanded');
    } else {
      content.style.display = "block";
      this.getElementsByClassName("fa-solid")[0].classList.add('expanded');
    }
    
  });
}